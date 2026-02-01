"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
  options = [],
  value = null,
  name = "",
  onChange = () => {},
  placeholder = "انتخاب کنید",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[372px]">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full flex items-center justify-between
          border border-border-muted rounded p-2.5
          bg-white text-right
          focus:outline-none
        "
      >
        <span className={selectedOption ? "text-black" : "text-gray-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Options */}
      {open && (
        <div
          className="
            absolute z-50 mt-1 w-full  max-h-[300px]
            border border-border-muted rounded
            bg-white shadow-md overflow-auto
          "
        >
          {options.map((option) => (
            <div
              key={option.value}
              value={option.value}
              onClick={() => {
                onChange({
                  target: {
                    name,
                    value: option.value,
                  },
                });
                setOpen(false);
              }}
              className="
                px-3 py-2 cursor-pointer
                hover:bg-gray-100
                text-sm
              "
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
