export async function onRequest() {
  return Response.json(
    {
      ok: true,
      site: 'https://sdl.beauty',
      service: 'sdl-beauty',
      plan: 'cloudflare-free',
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    }
  );
}
