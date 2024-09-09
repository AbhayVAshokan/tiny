import { initTRPC } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import prisma from "./prisma";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createTRPCContext = (_opts: FetchCreateContextFnOptions) => ({ prisma });

const t = initTRPC.context<typeof createTRPCContext>().create();
export const router = t.router;
export const procedure = t.procedure;
