import Image from "next/image";
import { useState } from "react";

export default function Header({ setStep,step }) {
  const list = [
    { title: "مشخصات", id: 1, src: "/images/icons/nodes/details.png" },
    { title: "روش اتصال", id: 2, src: "/images/icons/nodes/share.png" },
    { title: "سنسورها", id: 3, src: "/images/icons/nodes/sensor.png" },
  ];
  return (
    <div className="flex flex-col mb-12 ">
      <div className="flex gap-2 items-center mb-10">
        <Image src="/images/icons/iot.svg" alt="iot" width={36} height={33} />
        <p className="text-text-title text-xl font-normal">ویرایش دستگاه </p>
      </div>
      <div className="flex items-center gap-2">
        {list.map((item) => {
          return (
            <button
            onClick={()=>setStep(item.id)}
              key={item.id}
              className={step!=item.id?"flex items-center gap-1.5 justify-center bg-[#C1C1C11A] text-[#0D0D0D80] border border-border-muted text-sm font-normal py-2 w-full rounded-[50px]":
                "flex items-center gap-1.5 justify-center bg-[#599DE81A] text-text-title border border-blue text-sm font-normal py-2 w-full rounded-[50px]"
              }
            >
              {" "}
              <Image src={item.src} alt="iot" width={22} height={22} />
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
