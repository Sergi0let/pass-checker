import dictionary from "@/lib/dictionary";
import { Eye, EyeOff } from "lucide-react";

type ShowBtnProps = {
  show: boolean;
  toggleShow: () => void;
  className?: string;
};

const ShowBtn = ({ show = false, toggleShow, className }: ShowBtnProps) => {
  return (
    <button
      onClick={toggleShow}
      className={className}
      aria-label={show ? dictionary.hidePassword : dictionary.showPassword}
      aria-pressed={show}
      title={show ? dictionary.hidePassword : dictionary.showPassword}
    >
      {show ? <Eye /> : <EyeOff />}
    </button>
  );
};

export default ShowBtn;
