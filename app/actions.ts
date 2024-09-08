"use server";

type State = { shortURL: string };

export const generateURL = async (_state: State, formData: FormData): Promise<State> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return {
    shortURL: formData.get("longURL") as string
  };
};
