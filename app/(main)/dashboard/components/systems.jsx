import { EllipsisVertical } from "lucide-react";
import DonutHalf from "@/components/charts/doughnut";
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
    <div className="bg-background-box rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-text-title text-base font-normal">سیستم‌ها</p>
        <div className="flex items-center gap-1">
          <div className="bg-[#19CD73] rounded-xs text-white font-normal text-[10px] px-3 py-[1px]">
            عادی
          </div>
        <button  className="text-text-title"><EllipsisVertical /></button> 
        </div>
      </div>
      <div className="bg-background-table-header rounded-md px-3 py-2 text-text-tertiary text-xs font-normal flex justify-between">
        <p>نام</p>
        <p>وضعیت</p>
      </div>
      <div>
        {list.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-background-table-header">
            <p className="text-text-title text-sm font-normal">{item.title}</p>
            <div className="flex items-center gap-2">
               
              <p className="text-text-title text-sm font-normal">
                {item.status}%
              </p>
              <span
                dir="ltr"
                className="flex gap-[1px] h-1.5 bg-background-table-header w-20"
              >
                <span
                  className={`bg-green h-1.5 `}
                  style={{ width: `${item.status}%` }}
                ></span>
              </span> 
            </div>
          </div>
        ))}
      </div>
      <button className="bg-background-button rounded-[50px] text-text-title font-normal text-sm py-1.5  w-1/2">
        دیدن سیستم ها
      </button>
    </div>
  );
}
