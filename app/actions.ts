"use server";

type State = { shortUrl: string };

export const generateURL = async (_state: State, formData: FormData): Promise<State> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return {
    shortUrl: formData.get("longUrl") as string
  };
};
