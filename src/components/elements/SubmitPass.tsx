import dictionary from "@/lib/dictionary";
import { Check, Settings } from "lucide-react";
import { Button } from "../ui/button";

type SubmitPassProps = {
  passwordValue: string;
  handleCopyPassword: () => void;
};

const SubmitPass = ({ passwordValue, handleCopyPassword }: SubmitPassProps) => {
  return (
    <Button
      onClick={handleCopyPassword}
      disabled={!passwordValue}
      className="mt-4 w-full"
      size="lg"
      variant="default"
    >
      {passwordValue.length ? (
        <>
          <Check />
          {dictionary.copyBtn}
        </>
      ) : (
        <>
          <Settings />
          {dictionary.generateBtn}
        </>
      )}
    </Button>
  );
};

export default SubmitPass;
