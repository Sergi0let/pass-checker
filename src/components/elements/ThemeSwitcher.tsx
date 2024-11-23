import { useTheme } from "@/components";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="group flex h-9 w-9 items-center justify-center rounded-3xl border border-gray-300 shadow-md transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 active:border-blue-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" && <Sun className="hover-icon" />}
      {theme === "dark" && <Moon className="hover-icon" />}

      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export { ThemeSwitcher };
