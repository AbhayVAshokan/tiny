"use client";

import Copy from "@/components/form/copy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateURL } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const URL_PATTERN =
  "[Hh][Tt][Tt][Pp][Ss]?://(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::d{2,5})?(?:/[^s]*)?";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Please wait" : "Shorten"}
    </Button>
  );
};

const Form = () => {
  const [{ shortURL }, action] = useFormState(generateURL, { shortURL: "" });

  return (
    <form action={action} className="space-y-4">
      <div className="flex gap-4">
        <Input
          required
          autoFocus
          name="longURL"
          placeholder="https://example.com"
          pattern={URL_PATTERN}
          title="Enter a valid URL"
        />
        <SubmitButton />
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
