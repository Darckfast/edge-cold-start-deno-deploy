export function handler(req: Request): Response {
  return new Response(JSON.stringify({ time: Date.now() }), {
    headers: { "content-type": "application/json" },
  });
}

if (import.meta.main) {
  Deno.serve(handler);
}
