export function handler(req: Request): Response {
  return new Response(
    JSON.stringify({
      time: Temporal.Now.instant().epochMilliseconds * 1000,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    },
  );
}

if (import.meta.main) {
  Deno.serve(handler);
}
