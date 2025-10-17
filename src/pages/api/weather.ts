import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const airport = url.searchParams.get('airport') || 'KFDK'; // Default to Frederick Municipal
    
    // Fetch METAR data from NOAA Aviation Weather Center
    const metarUrl = `https://aviationweather.gov/api/data/metar?ids=${airport}&format=json&taf=false&hours=1`;
    
    const response = await fetch(metarUrl, {
      headers: {
        'User-Agent': 'AOPA-Weather-Widget/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error('No weather data available');
    }
    
    const metar = data[0];
    
    // Parse METAR data
    const weatherData = parseMetar(metar);
    
    return new Response(JSON.stringify(weatherData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });
    
  } catch (error) {
    console.error('Weather API error:', error);
    
    // Return fallback data
    const fallbackData = {
      airport: 'KFDK',
      temperature: 58,
      windSpeed: 3,
      windDirection: 'N',
      visibility: 10,
      pressure: 30.51,
      flightRules: 'VFR',
      conditions: 'CLEAR SKIES, CALM WINDS',
      raw: 'Weather data temporarily unavailable',
      timestamp: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(fallbackData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60' // Shorter cache for fallback
      }
    });
  }
};

function parseMetar(metar: any) {
  const raw = metar.rawOb || '';
  const temp = metar.temp || 0;
  const dewpoint = metar.dewp || 0;
  const windSpeed = metar.wspd || 0;
  const windDir = metar.wdir || 0;
  const visibility = metar.visib || 0;
  const altimeter = metar.altim || 0;
  const skyCover = metar.skyc || [];
  const skyHeight = metar.skyh || [];
  
  // Determine flight rules based on visibility and ceiling
  let flightRules = 'VFR';
  let conditions = 'CLEAR SKIES, CALM WINDS';
  
  // Check ceiling (lowest broken or overcast layer)
  let ceiling = 9999;
  for (let i = 0; i < skyCover.length; i++) {
    if ((skyCover[i] === 'BKN' || skyCover[i] === 'OVC') && skyHeight[i] < ceiling) {
      ceiling = skyHeight[i];
    }
  }
  
  // Determine flight rules
  if (visibility < 1 || ceiling < 500) {
    flightRules = 'IFR';
    conditions = 'INSTRUMENT CONDITIONS';
  } else if (visibility < 3 || ceiling < 1000) {
    flightRules = 'MVFR';
    conditions = 'MARGINAL CONDITIONS';
  } else if (visibility < 5 || ceiling < 3000) {
    flightRules = 'MVFR';
    conditions = 'MARGINAL CONDITIONS';
  }
  
  // Convert temperature from Celsius to Fahrenheit
  const tempF = Math.round((temp * 9/5) + 32);
  
  // Convert pressure from inches to display format
  const pressureInches = (altimeter / 100).toFixed(2);
  
  // Convert wind direction to cardinal direction
  const windDirection = getWindDirection(windDir);
  
  return {
    airport: metar.icao || 'KFDK',
    temperature: tempF,
    windSpeed: windSpeed,
    windDirection: windDirection,
    visibility: Math.round(visibility),
    pressure: pressureInches,
    flightRules: flightRules,
    conditions: conditions,
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
