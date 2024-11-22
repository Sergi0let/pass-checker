import { ThemeSwitcher } from "../elements/ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <img
          src="./public/password-manager.png"
          alt="Image logo"
          width={60}
          height={60}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
