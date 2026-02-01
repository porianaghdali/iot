"use client";

import { useState } from "react";
import Token from "./token";

export default function DataBaseHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="p-4 flex justify-between items-center w-full  bg-background-box"
        style={{ borderBottom: " 1px solid rgba(0, 0, 0, 0.2)" }}
      >
        <p className="font-normal text-lg text-text-title  "> لیست بکاپ</p>
        <div className="flex gap-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center"
          >
            انتقال به سرور{" "}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center"
          >
            بکاپ دستی{" "}
          </button>

          <Token isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
}
