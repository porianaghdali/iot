"use client";

import { usePathname } from "next/navigation";
import fa from "@/locales/fa.json";
import en from "@/locales/en.json";

export default function useTranslation() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "fa";

  const t = (key) => {
    const translations = locale === "fa" ? fa : en;
    return translations[key] || key;
  };

  return { t, locale };
}
