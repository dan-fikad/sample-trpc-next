import superjson from "superjson";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "@/server/routers/_app";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    const url = `${getBaseUrl()}/api/trpc`;
    return {
      links: [
        httpBatchLink({
          transformer: superjson,
          url,
        }),
      ],
    };
  },
  ssr: false,
  transformer: superjson,
});
