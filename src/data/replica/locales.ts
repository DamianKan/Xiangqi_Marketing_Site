import type { LocaleConfig, ReplicaLocale } from "./types";

export const localeConfigs: LocaleConfig[] = [
  { locale: "zh-CN", label: "简中", route: "/", htmlLang: "zh-CN" },
  { locale: "zh-Hant", label: "繁中", route: "/tcn/", htmlLang: "zh-Hant" },
  { locale: "en", label: "English", route: "/en/", htmlLang: "en" },
  { locale: "vi", label: "Tiếng Việt", route: "/vi/", htmlLang: "vi" }
];

export function getLocaleConfig(locale: ReplicaLocale): LocaleConfig {
  return localeConfigs.find((item) => item.locale === locale) || localeConfigs[0];
}
