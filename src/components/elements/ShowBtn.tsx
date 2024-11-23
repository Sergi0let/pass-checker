import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";

type ShowBtnProps = {
  show: boolean;
  toggleShow: () => void;
  className?: string;
};

const ShowBtn = ({ show = false, toggleShow, className }: ShowBtnProps) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={toggleShow}
      className={cn(className, "group")}
      aria-label={show ? t("hidePassword") : t("showPassword")}
      aria-pressed={show}
      title={show ? t("hidePassword") : t("showPassword")}
    >
      {show ? (
        <Eye className="hover-icon" />
      ) : (
        <EyeOff className="hover-icon" />
      )}
    </button>
  );
};

export { ShowBtn };
