"use client";

import Copy from "@/components/form/copy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { trpc } from "@/app/_trpc/client";
import { FormEvent, useState } from "react";

const URL_PATTERN =
  "[Hh][Tt][Tt][Pp][Ss]?://(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::d{2,5})?(?:/[^s]*)?";

const Form = () => {
  const [shortURL, setShortURL] = useState<string | undefined>();
  const { mutate: generate, isLoading } = trpc.generate.useMutation();

  // TODO for my future self: This does not give out the right vibes.
  // React now comes with server actions. The form submission should call a
  // server action with the help of `useFormState`or `useActionState` hook.
  // Perhaps try calling trpc through a server action? But, I shall still
  // argue that server actions are RPCs, so why use server action in the
  // first place.
  // https://trpc.io/blog/trpc-actions
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generate(
      { longURL: new FormData(e.target as HTMLFormElement).get("longURL") as string },
      { onSuccess: setShortURL }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <Input
          required
          autoFocus
          autoComplete="off"
          name="longURL"
          placeholder="https://example.com"
          pattern={URL_PATTERN}
          title="Enter a valid URL"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Please wait" : "Shorten"}
        </Button>
      </div>

      {shortURL && (
        <div className=" flex items-center justify-between space-x-4 rounded-md border px-4">
          <p className="text-sm font-medium leading-none">{shortURL}</p>
          <Copy value={shortURL} />
        </div>
      )}
    </form>
  );
};

export default Form;
