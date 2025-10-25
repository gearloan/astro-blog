import type { APIRoute } from 'astro';
import { GET as legacy } from '../taf.ts';
export const prerender = false;

export const GET: APIRoute = async (ctx) => {
  const airport = (ctx.params.airport || 'KBOS').toUpperCase();
  const url = new URL(ctx.request.url);
  url.searchParams.set('airport', airport);
  const request = new Request(url.toString(), { headers: ctx.request.headers });
  return legacy({ request } as any);
};


