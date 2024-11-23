import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";
type ClearBtnProps = {
  isShow: string;
  deletePassword: () => void;
  size?: number;
  className?: string;
};

const ClearBtn = ({
  isShow,
  deletePassword,
  className,
  size = 24,
}: ClearBtnProps) => {
  const { t } = useTranslation();
  return isShow.length > 0 ? (
    <button
      aria-label={t("clearPassword")}
      title={t("clearPassword")}
      onClick={deletePassword}
      className={className}
    >
      <SearchX size={size} />
    </button>
  ) : null;
};

export default ClearBtn;
