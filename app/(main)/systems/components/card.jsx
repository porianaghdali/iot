import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function Card({status}) {
  const list = [
    {
      id: 1,
      icon: "/images/icons/areas/circle_nodes.svg",
      value: 1,
      
    },
    {
      id: 4,
      icon: "/images/icons/areas/devices.svg",
      value: 12,
    
    },
    {
      id: 3,
      icon: "/images/icons/areas/map.svg",
      value: 2,
      
    },
    {
      id: 2,
      icon: "/images/icons/areas/code_branch.svg",
      value: 32,
   
    },
  ];
  return (
    <div className="bg-background-box p-2 w-full rounded-xs  border border-border-muted">
      <div className="flex justify-between items-center mb-3.5">
        <div className="flex gap-2 items-center">
          <p className="text-text-title text-sx font-normal">اتاق نرم افزار</p>
          <p
            className={`text-text-title text-[10px] font-normal rounded-[50px] w-fit
           px-[11px] py-0.5 border ${status ? "border-green bg-[#20E0801A]" : "border-red bg-[#FF46461A]"}  `}
          >
              {status ? "فعال" : "غیر فعال"}
          </p>
        </div>
       <button  className="text-text-title"><EllipsisVertical /></button> 
      </div>

      <div className="flex gap-5 items-center">
        {list.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-1">
              <Image src={item.icon} alt="" width={14} height={14} />
              <p className="text-text-tertiary text-xs font-normal">{item.value}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-8">
        <button className="text-xs font-normal text-text-title bg-background-button  rounded-[50px] py-1 px-5">
          دیدن ناحیه
        </button>
      </div>
    </div>
  );
}
