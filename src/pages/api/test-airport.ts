import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie') || '';
  const cookieAirport = (/currentAirport=([^;]+)/.exec(cookies)?.[1] || '').toUpperCase();
  const queryAirport = (url.searchParams.get('airport') || '').toUpperCase();
  const airport = (queryAirport || cookieAirport || 'KBOS');
  
  console.log('TEST API received airport parameter:', airport);
  
  const testData = {
    airport: airport,
    timestamp: new Date().toISOString(),
    message: `Test response for airport: ${airport}`
  };
  
  return new Response(JSON.stringify(testData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Requested-Airport': airport
    }
  });
};
