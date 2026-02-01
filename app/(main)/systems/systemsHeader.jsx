"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
export default function SystemsHeader() {
  const [selected, setSelected] = useState(1);
  const list = [
    { id: 1, title: "  همه" },
    { id: 2, title: "  مدیران" },
    { id: 3, title: "   ناظران" },
  ];
  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-background-box">
        <p className="font-normal text-lg text-text-title  "> سیستم ها</p>
        <div className="flex gap-1">
         <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            معماری شبکه{" "}
          </button> <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            اسکن شبکه
          </button>
          
          <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            <Plus />
            سیستم جدید{" "}
          </button>
        </div>
      </div>

    </>
  );
}
