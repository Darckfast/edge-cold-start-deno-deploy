export function handler(req: Request): Response {
  return new Response(
    JSON.stringify({
      time: Temporal.Now.instant().epochMilliseconds * 1000,
    }),
    {
      headers: {
        "content-type": "application/json",
        "x-datacenter": Deno.env.get("DENO_REGION") || "unknown",
      },
    },
  );
}

if (import.meta.main) {
  Deno.serve(handler);
}
