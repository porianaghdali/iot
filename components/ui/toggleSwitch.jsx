"use client";
import { useState } from "react";

export default function ToggleSwitch({ defaultOn = false, onChange }) {
  const [enabled, setEnabled] = useState(defaultOn);

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      onClick={toggle}
      className={`relative w-9 h-3 rounded-full transition-colors duration-300
        ${enabled ? "bg-[#54DD64]" : "bg-[#6F7890]"}`}
    >
      <span
        className={`absolute top-[1px] left-[1px] w-5.5 h-2.5 bg-white rounded-full shadow
          transition-transform duration-300
          ${enabled ? "translate-x-3" : ""}`}
      />
    </button>
  );
}
