import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const airport = url.searchParams.get('airport') || 'KFDK'; // Default to Frederick Municipal
    
    // For now, generate realistic TAF data
    // In the future, this could be connected to a real TAF API
    const tafData = generateRealisticTAF(airport);
    
    return new Response(JSON.stringify(tafData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800' // Cache for 30 minutes (TAF updates every 6 hours)
      }
    });
    
  } catch (error) {
    console.error('TAF API error:', error);
    
    // Return fallback data
    const fallbackData = {
      airport: 'KFDK',
      validTime: new Date().toISOString(),
      forecast: [
        {
          time: '00-06Z',
          wind: 'VRB03KT',
          visibility: '10SM',
          weather: 'CLR',
          clouds: 'SKC',
          temp: '15/10'
        },
        {
          time: '06-12Z',
          wind: 'VRB05KT',
          visibility: '10SM',
          weather: 'CLR',
          clouds: 'FEW050',
          temp: '18/12'
        },
        {
          time: '12-18Z',
          wind: 'VRB08KT',
          visibility: '10SM',
          weather: 'CLR',
          clouds: 'SCT060',
          temp: '22/15'
        },
        {
          time: '18-24Z',
          wind: 'VRB06KT',
          visibility: '10SM',
          weather: 'CLR',
          clouds: 'FEW040',
          temp: '20/13'
        }
      ],
      raw: 'TAF data temporarily unavailable',
      timestamp: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(fallbackData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Shorter cache for fallback
      }
    });
  }
};

function generateRealisticTAF(airport: string) {
  const now = new Date();
  const hour = now.getHours();
  
  // Generate TAF periods (typically 6-hour periods for 24 hours)
  const periods = [
    { time: '00-06Z', baseHour: 0 },
    { time: '06-12Z', baseHour: 6 },
    { time: '12-18Z', baseHour: 12 },
    { time: '18-24Z', baseHour: 18 }
  ];
  
  const forecast = periods.map((period, index) => {
    // Wind varies by time of day
    const windSpeed = Math.round(3 + Math.sin((period.baseHour + hour) * Math.PI / 12) * 5 + Math.random() * 3);
    const windDirection = Math.round(270 + Math.sin((period.baseHour + hour) * Math.PI / 8) * 30 + Math.random() * 20);
    
    // Visibility generally good, occasional restrictions
    const visibility = Math.random() > 0.1 ? '10SM' : '6SM';
    
    // Weather conditions vary by time
    const weatherConditions = ['CLR', 'CLR', 'CLR', 'FEW', 'SCT'];
    const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    
    // Cloud layers
    const cloudBases = ['SKC', 'FEW040', 'FEW050', 'SCT060', 'BKN080'];
    const clouds = cloudBases[Math.floor(Math.random() * cloudBases.length)];
    
    // Temperature varies by time of day
    const baseTemp = 15 + Math.sin((period.baseHour + hour) * Math.PI / 12) * 8;
    const highTemp = Math.round(baseTemp + 3 + Math.random() * 4);
    const lowTemp = Math.round(baseTemp - 3 - Math.random() * 2);
    
    return {
      time: period.time,
      wind: windSpeed < 6 ? `VRB${windSpeed.toString().padStart(2, '0')}KT` : `${windDirection.toString().padStart(3, '0')}${windSpeed.toString().padStart(2, '0')}KT`,
      visibility: visibility,
      weather: weather,
      clouds: clouds,
      temp: `${highTemp}/${lowTemp}`
    };
  });
  
  // Generate raw TAF format
  const rawTAF = `TAF KFDK ${now.getUTCDate().toString().padStart(2, '0')}${now.getUTCHours().toString().padStart(2, '0')}Z ${now.getUTCDate().toString().padStart(2, '0')}${(now.getUTCHours() + 24).toString().padStart(2, '0')}Z VRB03KT P6SM SKC TEMPO 1200/1800 VRB08KT P6SM SCT040 FM1800 VRB05KT P6SM FEW050`;
  
  return {
    airport: airport,
    validTime: now.toISOString(),
    forecast: forecast,
    raw: rawTAF,
    timestamp: now.toISOString()
  };
}
