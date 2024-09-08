import { z } from "zod";

import { procedure, router } from "./trpc";

export const appRouter = router({
  generate: procedure
    .input(z.object({ longURL: z.string() }))
    .mutation(async (opts) => {
      return opts.input.longURL;
    }),
});

export type AppRouter = typeof appRouter;
