"use client";

import { Check, Copy as CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface CopyProps {
  value: string;
}

const Copy = ({ value }: CopyProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast("URL copied to clipboard!", { icon: <Check /> });
  };

  return (
    <Button type="button" size="icon" variant="ghost" onClick={handleCopy}>
      <CopyIcon size="0.875rem" />
    </Button>
  );
};

export default Copy;
