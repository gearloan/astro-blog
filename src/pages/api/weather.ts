import type { APIRoute } from 'astro';
function parseNwsObservation(obs: any, airport: string) {
  // NOAA weather.gov observations shape (simplified)
  const props = obs?.properties || {};
  const tempC = Number(props.temperature?.value);
  const windSpeedMs = Number(props.windSpeed?.value);
  const visibilityM = Number(props.visibility?.value);
  const baroPa = Number(props.barometricPressure?.value);
  const raw = props.rawMessage || props.textDescription || '';

  const tempF = Number.isFinite(tempC) ? Math.round((tempC * 9/5) + 32) : 0;
  const windKt = Number.isFinite(windSpeedMs) ? Math.round(windSpeedMs * 1.94384) : 0;
  const visMi = Number.isFinite(visibilityM) ? Math.round(visibilityM / 1609.34) : 0;
  const pressureInHg = Number.isFinite(baroPa) ? (baroPa * 0.0002953).toFixed(2) : '0.00';

  return {
    airport,
    temperature: tempF,
    windSpeed: windKt,
    windDirection: '--',
    visibility: visMi,
    pressure: pressureInHg,
    flightRules: 'VFR',
    conditions: props.textDescription || 'N/A',
    raw,
    timestamp: new Date().toISOString()
  };
}

export const GET: APIRoute = async ({ request }) => {
  // Parse airport outside try/catch so it's available in the catch block
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie') || '';
  const cookieAirport = (/currentAirport=([^;]+)/.exec(cookies)?.[1] || '').toUpperCase();
  const queryAirport = (url.searchParams.get('airport') || '').toUpperCase();
  const airport = (queryAirport || cookieAirport || 'KBOS');
  try {
    
    // Try multiple weather APIs for better reliability
    const metarUrl = `https://aviationweather.gov/api/data/metar?ids=${airport}&format=json&taf=false&hours=1`;
    const backupUrl = `https://api.weather.gov/stations/${airport}/observations/latest`;
    
    const response = await fetch(metarUrl, {
      headers: {
        'User-Agent': 'AOPA-Weather-Widget/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const responseText = await response.text();
    
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response from weather API');
    }
    
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error('Invalid JSON response from weather API');
    }
    
    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error('No weather data available');
    }
    
    // Prefer an entry that matches the requested airport; if none, try backup API
    let metar = data[0];
    let matched = false;
    if (Array.isArray(data)) {
      const match = data.find((d: any) => {
        const code = (d.icao || d.station_id || '').toUpperCase();
        const raw = (d.rawOb || d.raw_text || d.raw || '').toUpperCase();
        return code === airport || raw.includes(`METAR ${airport}`);
      });
      if (match) {
        metar = match;
        matched = true;
      }
    }

    // If aviationweather.gov didn’t include our station, try weather.gov latest observation
    if (!matched) {
      const backupResp = await fetch(backupUrl, { cache: 'no-store' });
      if (backupResp.ok) {
        const obs = await backupResp.json();
        const weatherData = parseNwsObservation(obs, airport);
        const enriched = { ...weatherData, airport };
        return new Response(JSON.stringify(enriched), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=120',
            'X-Requested-Airport': airport,
            'X-Weather-Source': 'weather.gov'
          }
        });
      }
    }

    // Parse METAR data
    const weatherData = parseMetar(metar);
    // Always echo the requested airport in the payload
    const enriched = { ...weatherData, airport };
    
    return new Response(JSON.stringify(enriched), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'X-Requested-Airport': airport
      }
    });
    
  } catch (error) {
    console.error('Weather API error:', error);
    
    // Generate realistic test data that changes over time
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Simulate realistic weather variations
    const baseTemp = 55 + Math.sin(hour * Math.PI / 12) * 15; // 40-70°F range
    const tempVariation = Math.sin(minute * Math.PI / 30) * 3; // ±3°F variation
    const temperature = Math.round(baseTemp + tempVariation);
    
    const baseWind = 2 + Math.sin(hour * Math.PI / 8) * 8; // 2-10 mph range
    const windVariation = Math.sin(minute * Math.PI / 20) * 2; // ±2 mph variation
    const windSpeed = Math.round(Math.max(0, baseWind + windVariation));
    
    const basePressure = 30.00 + Math.sin(hour * Math.PI / 6) * 0.5; // 29.5-30.5 range
    const pressureVariation = Math.sin(minute * Math.PI / 15) * 0.1; // ±0.1 variation
    const pressure = (basePressure + pressureVariation).toFixed(2);
    
    const windDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 
                           'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const windDirection = windDirections[Math.floor(Math.random() * windDirections.length)];
    
    const testData = {
      airport: airport,
      temperature: temperature,
      windSpeed: windSpeed,
      windDirection: windDirection,
      visibility: 10,
      pressure: pressure,
      flightRules: 'VFR',
      conditions: 'CLEAR SKIES, CALM WINDS',
      raw: 'Test weather data - API unavailable',
      timestamp: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(testData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30', // Short cache for test data
        'X-Requested-Airport': airport,
        'X-Weather-Source': 'fallback-simulated'
      }
    });
  }
};

function parseMetar(metar: any) {
  // Raw METAR string (various shapes)
  const raw: string = metar.rawOb || metar.raw_text || metar.raw || '';

  // Helpers
  const num = (v: any): number | null => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };

  // Temperatures (C)
  const tempC = num(metar.temp) ?? num(metar.temp_c) ?? 0;
  const dewpointC = num(metar.dewp) ?? num(metar.dewpoint_c) ?? null;

  // Winds (knots)
  let windSpeedKt =
    num(metar.wspd) ??
    num(metar.wind_speed_kt) ??
    num(metar.wspdkt) ??
    num(metar.wind_speed) ??
    null;

  // If still null, parse from raw METAR (e.g., 18012KT or VRB05KT)
  if (windSpeedKt == null && raw) {
    const m = raw.match(/\b(?:\d{3}|VRB)(\d{2,3})(?:G\d{2,3})?KT\b/);
    if (m && m[1]) {
      windSpeedKt = Number(m[1]);
    }
  }
  if (windSpeedKt == null) windSpeedKt = 0;

  // Wind direction (degrees)
  let windDirDeg = num(metar.wdir) ?? num(metar.wind_dir_degrees) ?? null;
  if (windDirDeg == null && raw) {
    const m = raw.match(/\b(\d{3}|VRB)(\d{2,3})(?:G\d{2,3})?KT\b/);
    if (m && m[1] && m[1] !== 'VRB') {
      windDirDeg = Number(m[1]);
    }
  }
  if (windDirDeg == null) windDirDeg = 0;

  // Visibility (statute miles)
  let visibilityMi =
    num(metar.visib) ??
    num(metar.visibility_statute_mi) ??
    null;
  if ((visibilityMi == null || visibilityMi === 0) && raw) {
    // Parse from raw METAR: supports P6SM, M1/4SM, fractions like 1/2SM, 1 1/2SM, whole 10SM
    const visMatch = raw.match(/\b(P6|M?\d+(?: \d+\/\d+)?|\d+\/\d+)SM\b/);
    if (visMatch && visMatch[1]) {
      const token = visMatch[1];
      if (token === 'P6') {
        visibilityMi = 10; // treat P6SM as 10 miles (clear)
      } else if (token.startsWith('M')) {
        const frac = token.substring(1); // e.g., M1/4
        const parts = frac.split('/');
        if (parts.length === 2) {
          const nume = Number(parts[0]);
          const den = Number(parts[1]);
          if (Number.isFinite(nume) && Number.isFinite(den) && den !== 0) {
            visibilityMi = Math.max(0, (nume / den) - 0.01); // just under that value
          }
        }
      } else if (token.includes(' ')) {
        // Mixed number like 1 1/2
        const [w, f] = token.split(' ');
        const whole = Number(w);
        const [nume, den] = f.split('/').map(Number);
        if (Number.isFinite(whole) && Number.isFinite(nume) && Number.isFinite(den) && den !== 0) {
          visibilityMi = whole + (nume / den);
        }
      } else if (token.includes('/')) {
        // Simple fraction like 3/4
        const [nume, den] = token.split('/').map(Number);
        if (Number.isFinite(nume) && Number.isFinite(den) && den !== 0) {
          visibilityMi = nume / den;
        }
      } else {
        // Whole miles like 10
        const whole = Number(token);
        if (Number.isFinite(whole)) visibilityMi = whole;
      }
    }
  }
  if (visibilityMi == null) visibilityMi = 0;

  // Altimeter/pressure
  const altimeterHpa = num(metar.altim); // some feeds use hPa
  const altimeterInHg = num(metar.altim_in_hg);
  const pressureInHg = altimeterInHg != null
    ? altimeterInHg
    : (altimeterHpa != null ? altimeterHpa * 0.02953 : 0);

  // Sky cover
  const skyCover = metar.skyc || metar.sky_condition || [];
  const skyHeight = metar.skyh || [];

  // Determine flight rules based on visibility and ceiling
  let flightRules = 'VFR';
  let conditions = 'CLEAR SKIES, CALM WINDS';

  // Check ceiling (lowest broken or overcast layer)
  let ceiling = 9999;
  if (Array.isArray(skyCover) && skyCover.length) {
    if (typeof skyCover[0] === 'string') {
      for (let i = 0; i < skyCover.length; i++) {
        if ((skyCover[i] === 'BKN' || skyCover[i] === 'OVC') && Number(skyHeight[i]) < ceiling) {
          ceiling = Number(skyHeight[i]);
        }
      }
    } else if (typeof skyCover[0] === 'object') {
      for (const layer of skyCover) {
        const cover = layer.sky_cover;
        const height = Number(layer.cloud_base_ft_agl);
        if ((cover === 'BKN' || cover === 'OVC') && height && height < ceiling) {
          ceiling = height;
        }
      }
    }
  }

  // Determine flight rules
  if (visibilityMi < 1 || ceiling < 500) {
    flightRules = 'IFR';
    conditions = 'INSTRUMENT CONDITIONS';
  } else if (visibilityMi < 3 || ceiling < 1000) {
    flightRules = 'MVFR';
    conditions = 'MARGINAL CONDITIONS';
  } else if (visibilityMi < 5 || ceiling < 3000) {
    flightRules = 'MVFR';
    conditions = 'MARGINAL CONDITIONS';
  }

  // Convert temperature from Celsius to Fahrenheit
  const tempF = Math.round((tempC * 9/5) + 32);

  // Wind direction to cardinal
  const windDirection = getWindDirection(windDirDeg);

  // Normalize ceiling to feet if present (ADDS skyh is hundreds of feet)
  let ceilingFt: number | null = null;
  if (Number.isFinite(ceiling) && ceiling !== 9999) {
    const h = Number(ceiling);
    ceilingFt = h > 300 ? h : h * 100; // if value looks like 60 => 6000ft
  }

  return {
    airport: metar.icao || metar.station_id || 'KFDK',
    temperature: tempF,
    windSpeed: windSpeedKt,
    windDirection: windDirection,
    visibility: Math.round(visibilityMi),
    pressure: pressureInHg.toFixed(2),
    flightRules: flightRules,
    conditions: conditions,
    ceilingFt,
    raw: raw,
    timestamp: new Date().toISOString()
  };
}

function getWindDirection(degrees: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 
                     'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}
