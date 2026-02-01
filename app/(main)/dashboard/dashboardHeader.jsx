"use client";
import { useState } from "react";

export default function DashboardHeader() {
  const [selected, setSelected] = useState(1);
  const list = [
    { id: 1, title: " داشبورد ۱" },
    { id: 2, title: " داشبورد ۲" },
    { id: 3, title: "  داشبورد ۳" },
  ];
  return (
    <>


      
      <div className="p-4 flex justify-between items-center w-full bg-background-box">
        <p className="font-normal text-lg text-text-title  ">داشبورد</p>
        <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px]">
          داشبورد جدید
        </button>
      </div>



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
                  : "border-b-2 pb-4 border-transparent"}
            >
              {item.title} 
            </button>
          );
        })}

    
      </div>
    </>
  );
}
