"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const current = pathname.split("/")[1] || "fa";

  const toggleLanguage = () => {
    const newLocale = current === "fa" ? "en" : "fa";
    const newPath = pathname.replace(`/${current}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-background-box border border-border-muted rounded"
    >
      {current === "fa" ? "EN" : "FA"}
    </button>
  );
}
