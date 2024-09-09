import * as crypto from "node:crypto";
import { z } from "zod";

import { createTRPCContext, procedure, router } from "./trpc";
import { Prisma } from "@prisma/client";

const createShortUrl = async (
  ctx: ReturnType<typeof createTRPCContext>,
  longUrl: string
) => {
  const shortUrl = crypto.randomBytes(2).toString("hex");
  try {
    await ctx.prisma.url.create({
      data: {
        shortUrl,
        longUrl: longUrl,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") return createShortUrl(ctx, longUrl);
      else throw error;
    } else throw error;
  }

  return shortUrl;
};

export const appRouter = router({
  generate: procedure
    .input(z.object({ longUrl: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const url = await ctx.prisma.url.findFirst({
        where: { longUrl: input.longUrl },
        select: { shortUrl: true },
      });

      return url ? url.shortUrl : createShortUrl(ctx, input.longUrl);
    }),
});

export type AppRouter = typeof appRouter;
