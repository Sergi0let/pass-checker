import { SearchX } from "lucide-react";

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
}: ClearBtnProps) =>
  isShow.length > 0 ? (
    <button onClick={deletePassword} className={className}>
      <SearchX size={size} />
    </button>
  ) : null;

export default ClearBtn;
