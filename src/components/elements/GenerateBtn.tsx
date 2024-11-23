import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

type GenerateBtnProps = {
  handleGeneratePassword: () => void;
  className?: string;
};

const GenerateBtn = ({
  handleGeneratePassword,
  className,
}: GenerateBtnProps) => {
  const { t } = useTranslation();
  return (
    <Button
      aria-label={t("generateBtn")}
      title={t("generateBtn")}
      className={className}
      size="lg"
      variant="default"
      onClick={handleGeneratePassword}
    >
      <Settings />
      {t("generateBtn")}
    </Button>
  );
};

export default GenerateBtn;