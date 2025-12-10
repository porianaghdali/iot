import { EllipsisVertical } from "lucide-react";
import DonutHalf from "@/components/utils/charts/doughnut";
const list = [
  {
    id: 1,
    title: " نود",
    status: 32,
  },
  {
    id: 2,
    title: " رطوبت",
    status: 32,
  },
  {
    id: 3,
    title: " گرد و خاک",
    status: 32,
  },
];
export default function Store() {
  return (
    <div className="bg-white rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-[#0D0D0D] text-base font-normal"> انبار طبقه 3</p>
        <div className="flex items-center gap-1">
          <div className="bg-[#19CD73] rounded-xs text-white font-normal text-[10px] px-3 py-[1px]">
            عادی
          </div>
          <EllipsisVertical />
        </div>
      </div>

      {list.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <p className="text-[#0D0D0D] text-sm font-normal">{item.title}</p>
          <div className="flex items-center gap-2">
             
            <p className="text-[#0D0D0D] text-sm font-normal">{item.status}%</p>
            <span dir="ltr" className="flex gap-[1px] h-1.5 bg-[#F4F4F4] w-20">
              <span
                className={`bg-[#20E080] h-1.5 `}
                style={{ width: `${item.status}%` }}
              ></span>
            </span> 
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <div className=" text-center text-[#2A2A2A] font-normal text-xs">
           
          <DonutHalf />
          <p>دما</p>
        </div>
        <div className=" text-center text-[#2A2A2A] font-normal text-xs">
           
          <DonutHalf />
          <p>فضا</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        <div className="bg-[#20E080] w-5 h-5 rounded-xs"></div>
        <div className="bg-[#FF9E01] w-5 h-5 rounded-xs"></div>
        <div className="bg-[#FF4646] w-5 h-5 rounded-xs"></div>
        <div className="bg-[#5921FF] w-5 h-5 rounded-xs"></div>
        <div className="bg-[#D9D9D9] w-5 h-5 rounded-xs"></div>
      </div>
    </div>
  );
}
