import { BatteryFull } from "lucide-react";

export default function Card() {
  return (
    <div className="bg-white rounded-xs px-3 py-3.5  flex justify-between w-72 h-fit">
      <div className="flex gap-2">
        <div className=" p-3.5 rounded-full bg-[#F4F4F4] w-fit">
          <BatteryFull size={22} />
        </div>
        <div className="grid gap-2.5">
          <p className="text-[#2A2A2A] font-normal text-xs ">اتاق سرور</p>
          <p className=" text-[#606060] font-normal text-[10px]">
            لورم ایپسوم متن ساختگی 
          </p>
        </div>
      </div>
      <div className="grid gap-2.5 text-end">
        <p className=" text-[#606060] font-normal text-[10px]"> 1 ساعت پیش</p>
        <div className="flex items-center gap-1">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[11px] border-l-transparent border-r-transparent border-b-[#20E080]"></div>
          <p className=" text-[#2A2A2A] font-normal text-xl">10 </p>
        </div>
      </div>
    </div>
  );
}
