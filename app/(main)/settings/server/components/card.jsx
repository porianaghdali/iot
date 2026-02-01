import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";

export default function Card({ title, img, time, date,button=false,setIsOpen,
isOpen }) {
  return (
    <div className="bg-background-box py-5 max-w-[377px] px-4 flex flex-col gap-2 justify-center w-full items-center  rounded-xs  ">
      <div className="rounded-full p-3 bg-background-modal-header w-fit">
        <Image src={img} alt={title} width={76} height={76} />
      </div>
      <p className="text-text-title text-base font-normal text-center">
        {title}
      </p>
      <div className="flex w-full justify-between items-center text-text-title text-sm font-normal">
        <p className="flex items-center gap-1"><Clock3 size={16} strokeWidth={1.5} /> زمان</p>
        <p className="text-text-tertiary">{time}</p>
      </div>
      <div className="flex w-full justify-between items-center text-text-title text-sm font-normal">
        <p  className="flex items-center gap-1"><Calendar size={16} strokeWidth={1.5} />تاریخ</p>
        <p className="text-text-tertiary">{date}</p>
      </div>
      {button  && <button onClick={()=>{setIsOpen(!isOpen)}} className="border border-border-muted rounded text-text-title font-normal text-sm py-1.5 px-3 w-full mt-2">تنظیم</button>}
    </div>
  );
}
