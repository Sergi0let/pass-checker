import "react-i18next";

import en from "../locales/en.json";

type DefaultNamespace = typeof en;

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: DefaultNamespace;
  }
}
