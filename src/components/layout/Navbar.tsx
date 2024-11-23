import LanguageSwitcher from "../elements/LangSwitcher";
import { ThemeSwitcher } from "../elements/ThemeSwitcher";

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <img
          src="/password-manager.png"
          alt="Image logo"
          width={60}
          height={60}
        />
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
