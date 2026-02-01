"use client";
import { Plus } from "lucide-react";

export default function DevicesHeader({ setIsOpen }) {
  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-background-box border-b border-border-main">
        <p className="font-normal text-lg text-text-title  ">لیست دستگاه</p>
        <div className="flex gap-1">
          <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            حذف
          </button>
          <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            معماری شبکه{" "}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center"
          >
            <Plus />
            دستگاه جدید{" "}
          </button>
        </div>
      </div>
    </>
  );
}
