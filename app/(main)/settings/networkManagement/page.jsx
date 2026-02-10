"use client";
import { useState } from "react";
import BarRaceChart from "./networkChart";
import NetworkHeader from "./networkHeader";
export default function NetworkManagement() {
  const [selected, setSelected] = useState(1);
  const list = [
    { id: 1, title: "  کنترل درخواست‌ها" },
    { id: 2, title: "  لیست سیاه / سفید" },
  ];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <NetworkHeader />
      <div
        className="p-4 pb-0 flex gap-6 items-center w-full font-normal text-sm text-text-title   sticky top-0  bg-background-box z-10 "
        style={{ borderBottom: " 1px solid rgba(0, 0, 0, 0.2)" }}
      >
        {list.map((item) => {
          return (
            <button
              onClick={() => setSelected(item.id)}
              key={item.id}
              className={
                selected === item.id
                  ? "border-b-2 pb-4 border-text-secondary "
                  : "border-b-2 pb-4 border-transparent"
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between bg-background-box  p-3 w-full border-b border-border-muted">
        <div className="flex items-center  gap-8 ">
          <div className="flex items-center gap-2">
            <label
              htmlFor="time"
              className="text-text-tertiary text-xs font-normal"
            >
              زمان (ثانیه)
            </label>
            <input
              placeholder="1200"
              type="text"
              className="border border-border-muted px-4 py-1 rounded w-full max-w-16 focus:outline-none  text-xs font-normal h-7 text-text-title
    focus:ring-0
    focus:border-border-muted "
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="time"
              className="text-text-tertiary text-xs font-normal"
            >
              تعداد درخواست
            </label>
            <input
              placeholder="1200"
              type="text"
              className="border border-border-muted px-4 py-1 rounded w-full max-w-16 focus:outline-none  text-xs font-normal h-7 text-text-title
    focus:ring-0
    focus:border-border-muted "
            />
          </div>
          <button className="px-7 py-1 border border-green bg-[#20E0800D] rounded text-xs font-normal h-7 text-text-title">
            ثبت
          </button>
        </div>
      </div>
      {selected==1?(<div className="p-4.5">
        <div className="bg-white rounded-xs">
          <BarRaceChart />
        </div>
      </div>):""}
      
    </div>
  );
}
