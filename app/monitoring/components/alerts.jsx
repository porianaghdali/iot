import { EllipsisVertical } from "lucide-react";

import Image from "next/image";

export default function Alert() {
  const check = "/images/icons/check.svg";
  const warning = "/images/icons/warning.svg";
  const xmark = "/images/icons/xmark.svg";
  const list = [
    {
      id: 1,
      name: " افزایش دما ",
      area: "اتاق سرور",
      icon: check,
    },
    {
      id: 2,
      name: " افزایش دما ",
      area: "اتاق سرور",
      icon: warning,
    },
    {
      id: 3,
      name: " افزایش دما ",
      area: "اتاق سرور",
      icon: xmark,
    },
    {
      id: 4,
      name: " افزایش دما ",
      area: "اتاق سرور",
      icon: xmark,
    },
    {
      id: 5,
      name: " افزایش دما ",
      area: "اتاق سرور",
      icon: check,
    },
  ];
  return (
    <div className=" p-3 bg-white rounded-xs flex flex-col gap-3">
      {" "}
      <div className="flex justify-between items-center text-[#2A2A2A]">
        <p className=" text-sm font-normal "> هشدارها</p>
        <div className="flex items-center gap-2">
          <button>
            <EllipsisVertical />
          </button>
        </div>
      </div>
      <div>
        <div className="bg-[#F4F4F4] p-2 flex justify-between text-[#606060] rounded-sm text-xs font-normal">
          <p>نام</p>
          <p>ناحیه</p>
        </div>
        <div>
          {list.map((item) => {
            return (
              <div key={item.id} className="border-b text-[#2A2A2A] text-xs font-normal border-[#F4F4F4] p-2 flex justify-between items-center">
                <div className="flex gap-1 items-center " >
                  <Image src={item.icon} width={14} height={14} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <p>{item.area}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div >
        <button className="text-sm text-[#0D0D0D] font-normal bg-[#0202020D] rounded-[50px] py-1.5 w-[144px]">هشدارها</button>
      </div>
    </div>
  );
}
