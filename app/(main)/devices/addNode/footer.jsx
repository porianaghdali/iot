"use client";
import { useNodes } from "@/hooks/useNodes";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { useMemo } from "react";

export default function Footer({ setStep, step, formData, setFormData }) {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  const { createNode } = useNodes(token);
  const handleSaveNode = async () => {
    const newId = await createNode(formData);
    if (newId) {
      setFormData((p) => ({ ...p, ID: newId }));
    }
    return newId; // 🔹 برگردوندن ID
  };

  const handleSubmit = async () => {
    const newId = await handleSaveNode();
    
    if (newId) {
      // حالا می‌تونی مستقیماً از newId استفاده کنی
    }
    setStep(step + 1); // بعد از اینکه ID مطمئناً آماده شد
  };


  
  return (
    <div className="flex justify-between items-center mt-6 ">
      <button
        disabled={step === 1}
        onClick={() => setStep(step - 1)}
        className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
      >
        قبلی
      </button>

      <div className="flex gap-2">
        {step == 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            بعدی
          </button>
        ) : step == 2 ? (
          <button
            onClick={handleSubmit}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            ثبت و ادامه
          </button>
        ) : (
          <button
            // onClick={handleSetSensor}
            className="text-xs px-3 py-1 bg-black text-white rounded"
          >
            ثبت
          </button>
        )}
      </div>
    </div>
  );
}
