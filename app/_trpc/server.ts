import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

// TODO: Handle deprecation wawrning
export const server = appRouter.createCaller({
  // @ts-expect-error address this error along with the deprecation warning.
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
