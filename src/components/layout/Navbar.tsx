import { LanguageSwitcher, ThemeSwitcher } from "@/components";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <img
          src="/password-manager.webp"
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

export { Navbar };
