"use client";
import { useState } from "react";

export default function AreasHeader() {
  const [selected, setSelected] = useState(1);
  const list = [
    { id: 1, title: " نمای کلی" },
    { id: 2, title: "  نقشه" },
    { id: 3, title: "   ناحیه 1" },
    { id: 4, title: "    ناحیه 2 " },
  ];
  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-white">
        <p className="font-normal text-lg text-[#0D0D0D]  ">ناحیه‌ها </p>
        <button className="font-normal text-sm text-[#0d0d0d]  bg-[#0202020D] px-5 py-1.5 rounded-[50px]">
          ناحیه جدید{" "}
        </button>
      </div>
   
    </>
  );
}
