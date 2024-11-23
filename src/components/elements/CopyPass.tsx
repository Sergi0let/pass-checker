import { Button } from "@/components";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

type CopyPassProps = {
  handleCopyPassword: () => void;
  className?: string;
};

const CopyPass = ({ handleCopyPassword, className }: CopyPassProps) => {
  const { t } = useTranslation();

  return (
    <Button
      onClick={handleCopyPassword}
      className={className}
      size="lg"
      variant="default"
      aria-label={t("copyBtn")}
      title={t("copyBtn")}
    >
      <Check />
      {t("copyBtn")}
    </Button>
  );
};

export { CopyPass };
