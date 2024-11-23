import i18n from "i18next";
import { FC, useState } from "react";
import DynamicSvg from "../icons/DynamicSvg";

const LanguageSwitcher: FC = () => {
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  console.log(language);

  return (
    <div className="flex">
      <button
        aria-label={
          language === "uk" ? "Перейти до української" : "Switch to Ukrainian"
        }
        title={
          language === "uk" ? "Перейти до української" : "Switch to Ukrainian"
        }
        onClick={() => changeLanguage(language === "uk" ? "ua" : "uk")}
        className="w-9 h-9 flex items-center justify-center rounded-3xl border border-gray-300 bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200"
      >
        <DynamicSvg
          name={language === "uk" ? "British" : "Ukraine"}
          className=" rounded-3xl "
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
