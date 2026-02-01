"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDark(html.classList.contains("dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative shadow-[0px_0px_6px_0px_#00000033] inline-flex h-[37px] w-[71px] items-center rounded-full border border-border-muted bg-background-box transition-colors"
    >
      {/* Knob */}
       <span className={`absolute left-[9px] z-20 text-sm select-none  ${dark ? "text-border-muted" : "text-white"} `}><Sun  size={16} /></span>
      <span className={`absolute right-[9px] z-20 text-sm select-none  ${!dark ? "text-border-muted" : "text-white"} `}><Moon size={16}  /></span>

      <span
        className={`inline-block h-[31px] w-[31px] transform shadow-[0px_0px_4px_0px_#0000004D] rounded-full bg-[#5173F9] transition-transform duration-300 border border-[#FBFBFBB2] ${
          !dark ? "-translate-x-9" : "-translate-x-0.5"
        }`}
      />
    </button>
  );
}
