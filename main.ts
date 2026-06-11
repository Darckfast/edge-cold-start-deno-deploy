export function handler(req: Request): Response {
  return new Response(
    JSON.stringify({
      time: performance.now() * 1000,
    }),
    {
      headers: { "content-type": "application/json" },
    },
  );
}

if (import.meta.main) {
  Deno.serve(handler);
}
