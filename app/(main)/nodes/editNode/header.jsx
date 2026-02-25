import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header({ step,setStep }) {
  const list = [
    { title: "مشخصات", id: 1, src: "/images/icons/details.png" },
    { title: "روش اتصال", id: 2, src: "/images/icons/share.png" },
    { title: "سنسورها", id: 3, src: "/images/icons/sensor2.png" },
  ];
  return (
    <div className="flex flex-col relative ">
      <div className="flex gap-2 items-center mb-2">
        <Image src="/images/icons/iot.svg" alt="alt" width={36} height={36} />
        <p className="text-text-title text-xl font-normal"> ویرایش دستگاه</p>
      </div>
      <div className="flex justify-center gap-2">
        {list.map((item) => {
          return (
            <button
  key={item.id}
  type="button"
  onClick={() => setStep(item.id)}
  className={`w-fit py-2 px-12 border rounded-[50px] text-sm font-normal flex items-center gap-1.5 transition
    ${
      step === item.id
        ? "bg-[#599DE81A] text-text-title border-blue"
        : "bg-[#C1C1C11A] text-[#0D0D0D80] border-border-muted"
    }`}
>
  <Image src={item.src} alt="alt" width={22} height={22} />
  <p>{item.title}</p>
</button>
          );
        })}
      </div>
    </div>
  );
}
