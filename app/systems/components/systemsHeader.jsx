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
      <div className="p-4 flex justify-between items-center w-full  bg-white">
        <p className="font-normal text-lg text-[#0D0D0D]  ">لیست دستگاه</p>
        <div className="flex gap-1">
        <button className="font-normal text-sm text-[#0d0d0d]  bg-[#0202020D] px-5 py-1.5 rounded-[50px] flex items-center">
         حذف
        </button>
        <button className="font-normal text-sm text-[#0d0d0d]  bg-[#0202020D] px-5 py-1.5 rounded-[50px] flex items-center">
معماری شبکه        </button>
        <button className="font-normal text-sm text-[#0d0d0d]  bg-[#0202020D] px-5 py-1.5 rounded-[50px] flex items-center">
          <Plus />
          دستگاه جدید{" "}
        </button>
        </div>
      </div>
      <div
        className="p-4 pb-0 flex gap-6 items-center w-full font-normal text-sm text-[#0d0d0d] sticky top-0  bg-white z-10 "
        style={{ borderBottom: " 1px solid rgba(0, 0, 0, 0.2)" }}
      >
        {list.map((item) => {
          return (
            <button
              onClick={() => setSelected(item.id)}
              key={item.id}
              className={
                selected === item.id
                  ? "border-b-2 pb-4 border-[#2A2A2A] "
                  : "border-b-2 pb-4 border-transparent"
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </>
  );
}
