"use client";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Checkbox({ setChecked = null, checked = false }) {
  // const [checked, setChecked] = useState(false);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="w-4 h-4 rounded-xs border border-[#9E9E9E] cursor-pointer flex items-center justify-center"
    >
      {checked && (
        // <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-[2px]" />
        <Check />
      )}
    </button>
  );
}
