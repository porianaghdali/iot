"use client";
import { Trash } from "lucide-react";
import { useState } from "react";
import CustomInput from "../../../../../components/ui/customInput";

export default function StepThree({ formData, handleChange }) {
  const [inputIp, setInputIp] = useState("");

  const ipList = formData.acceptIp || [];

  const addIp = () => {
    if (!inputIp.trim()) return;

    handleChange("acceptIp", [...ipList, inputIp.trim()]);
    setInputIp("");
  };

  const removeIp = (index) => {
    const newList = ipList.filter((_, i) => i !== index);
    handleChange("acceptIp", newList);
  };
  return (
    <div className="border border-border-muted h-full bg=">
      <div className="bg-background-modal-header text-center font-normal p-4 text-sm text-text-tertiary">
        IP های مجاز ورود به سیستم{" "}
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">IP</label>
        <div className="flex gap-1 w-full max-w-[372px]">
          <CustomInput
            placeholder="IP را وارد کنید"
            id="acceptIp"
            name="acceptIp"
            value={inputIp}
            onChange={(e) => setInputIp(e.target.value)}
          />{" "}
          <button
            onClick={addIp}
            className="border 
              py-2.5 rounded w-24 text-text-title font-normal text-sm
               bg-[#20E0800D] border-green"
          >
            ثبت
          </button>
        </div>
        <div className=""></div>
      </div>
      <div className="grid gap-1 px-[6%] py-[4%]">
        {ipList.map((ip, index) => {
          return (
            <div key={index} className="flex gap-1">
              <div className="bg-background-modal-header text-text-tertiary text-sm font-normal w-15 flex justify-center items-center rounded">
                {index + 1}
              </div>
              <div className="bg-background-modal-header text-text-tertiary text-sm font-normal p-3 rounded w-full flex justify-between">
                <p>{ip}</p>
                <button
                  onClick={() => removeIp(index)}
                  className="p-1 rounded-xl border border-[text-tertiary]"
                >
                  <Trash size={18} strokeWidth={1.25} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
