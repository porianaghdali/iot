"use client";
import { useState } from "react";
import SmsHeader from "./smsHeader";
import SmsPanel from "./components/smsPanel";
import InteractiveSMS from "./components/InteractiveSMS";
export default function Sms() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <SmsHeader />
      <div className=" flex gap-1.5 w-full border-t border-border-muted">
        <div className="grid grid-cols-2 w-full text-center text-sm">
          <button
            className={
              selected === 0
                ? "border-l-[0.5px] bg-background-box border-border-muted py-4 text-text-title font-normal"
                : "bg-background-modal-header text-[#0D0D0D4D] py-4"
            }
            onClick={() => {
              setSelected(0);
            }}
          >
            {" "}
            پنل پیامکی
          </button>

          <button
            className={
              selected === 1
                ? "border-r-[0.5px] bg-background-box border-border-muted py-4 text-text-title font-normal"
                : "bg-background-modal-header text-[#0D0D0D4D] py-4"
            }
            onClick={() => {
              setSelected(1);
            }}
          >
            {" "}
            پیامک تعاملی
          </button>
        </div>
      </div>
      <div className="py-6 px-4">
      {selected === 0 ? <SmsPanel />:<InteractiveSMS/>}
      </div>
    </div>
  );
}
