import { EllipsisVertical } from "lucide-react";
import DonutHalf from "@/components/utils/charts/doughnut";
const list = [
  {
    id: 1,
    title: "Cpu ",
    status: 32,
  },
  {
    id: 2,
    title: "Cpu ",
    status: 23,
  },
  {
    id: 3,
    title: " Cpu  ",
    status: 12,
  },
  {
    id: 4,
    title: " Cpu  ",
    status: 12,
  },
  {
    id: 5,
    title: " Cpu  ",
    status: 12,
  },
];

export default function Systems() {
  return (
    <div className="bg-white rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-[#0D0D0D] text-base font-normal">سیستم‌ها</p>
        <div className="flex items-center gap-1">
          <div className="bg-[#19CD73] rounded-xs text-white font-normal text-[10px] px-3 py-[1px]">
            عادی
          </div>
          <EllipsisVertical />
        </div>
      </div>
      <div className="bg-[#F4F4F4] rounded-md px-3 py-2 text-[#606060] text-xs font-normal flex justify-between">
        <p>نام</p>
        <p>وضعیت</p>
      </div>
      <div>
        {list.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-[#F4F4F4]">
            <p className="text-[#0D0D0D] text-sm font-normal">{item.title}</p>
            <div className="flex items-center gap-2">
               
              <p className="text-[#0D0D0D] text-sm font-normal">
                {item.status}%
              </p>
              <span
                dir="ltr"
                className="flex gap-[1px] h-1.5 bg-[#F4F4F4] w-20"
              >
                <span
                  className={`bg-[#20E080] h-1.5 `}
                  style={{ width: `${item.status}%` }}
                ></span>
              </span> 
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#0202020D] rounded-[50px] text-[#0D0D0D] font-normal text-sm py-1.5  w-1/2">
        دیدن سیستم ها
      </button>
    </div>
  );
}
