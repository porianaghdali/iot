import { EllipsisVertical } from "lucide-react";
import DonutHalf from "@/components/charts/doughnut";
export default function SoftwareRoom() {
  return (
    <div className="bg-background-box rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-text-title text-base font-normal"> اتاق نرم افزار</p>
        <div className="flex items-center gap-1">
          <div className="bg-[#19CD73] rounded-xs text-white font-normal text-[10px] px-3 py-[1px]">
            عادی
          </div>
         <button  className="text-text-title"><EllipsisVertical /></button> 
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-text-title text-sm font-normal">نود دما</p>
      </div>

 <DonutHalf/>
    </div>
  );
}
