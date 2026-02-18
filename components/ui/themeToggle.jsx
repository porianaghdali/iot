"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeSwitch() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative shadow-[0px_0px_6px_0px_#00000033] inline-flex h-[37px] w-[71px] items-center rounded-full border border-border-muted bg-background-box transition-colors"
    >
      <span
        className={`absolute left-[9px] z-20 ${
          dark ? "text-border-muted" : "text-white"
        }`}
      >
        <Sun size={16} />
      </span>

      <span
        className={`absolute right-[9px] z-20 ${
          !dark ? "text-border-muted" : "text-white"
        }`}
      >
        <Moon size={16} />
      </span>

      <span
        className={`inline-block h-[31px] w-[31px] transform shadow-[0px_0px_4px_0px_#0000004D] rounded-full bg-[#5173F9] transition-transform duration-300 border border-[#FBFBFBB2] ${
          dark ? "-translate-x-0.5" : "-translate-x-9"
        }`}
      />
    </button>
  );
}
