import DynamicSvg from "@/components/icons/DynamicSvg";
import i18n from "i18next";
import { FC, useState } from "react";

const LanguageSwitcher: FC = () => {
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <button
      aria-label={
        language === "uk" ? "Перейти до української" : "Switch to Ukrainian"
      }
      title={
        language === "uk" ? "Перейти до української" : "Switch to Ukrainian"
      }
      onClick={() => changeLanguage(language === "uk" ? "ua" : "uk")}
      className="group flex h-9 w-9 items-center justify-center overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200"
    >
      <DynamicSvg
        name={language === "uk" ? "British" : "Ukraine"}
        className="hover-icon"
      />
    </button>
  );
};

export { LanguageSwitcher };
