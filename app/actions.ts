"use server";

import prisma from "../server/prisma";

export const getLongUrl = async (shortUrl: string): Promise<string | null> => {
  const url = await prisma.url.findFirst({
    where: { shortUrl },
    select: { longUrl: true },
  });
  return url ? url.longUrl : url;
};
