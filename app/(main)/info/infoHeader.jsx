"use client";

import { Download } from "lucide-react";

export default function InfogHeader() {
  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-background-box">
        <p className="font-normal text-lg text-text-title  ">راهنمایی و پشتیبانی</p>
        <button className="font-normal text-sm text-text-title  bg-[#FFFFFF1A] border border-border-muted px-5 py-1.5 rounded-[50px] flex items-center gap-1">
          <Download strokeWidth={1.25} size={18} />
          <p>دانلود راهنما </p>
        </button>
      </div>
    </>
  );
}
