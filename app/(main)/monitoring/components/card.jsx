import { RefreshCw, EllipsisVertical } from "lucide-react";
import DoughnutChart from "@/components/charts/doughnut";
import Image from "next/image";
export default function Card() {
  const move = "/images/icons/monitoring/move.svg";
  const check = "/images/icons/monitoring/check.svg";
  const dont_move = "/images/icons/monitoring/dont_move.svg";
  const close = "/images/icons/monitoring/close.svg";
  const fire = "/images/icons/monitoring/fire.svg";
  const open = "/images/icons/monitoring/open.svg";
  const cards = [
    { title: "حرکت", value: " MBcurrent", icon: move, color: "#FF4646", id: 1 },
    {
      title: "ثابت",
      value: " MBcurrent",
      icon: dont_move,
      color: "#20E080",
      id: 2,
    },
    { title: "حریق", value: " MBcurrent", icon: fire, color: "#20E080", id: 3 },
    {
      title: "عادی",
      value: " MBcurrent",
      icon: check,
      color: "#FF4646",
      id: 4,
    },
    {
      title: "بسته",
      value: " MBcurrent",
      icon: close,
      color: "#FF4646",
      id: 5,
    },
    { title: "باز", value: " MBcurrent", icon: open, color: "#20E080", id: 6 },
  ];
  return (
    <div className="bg-background-box py-3 px-4 w-full rounded-xs">
      <div className="flex justify-between items-center text-text-secondary">
        <p className=" text-sm font-normal ">اتاق سرور</p>
        <div className="flex items-center gap-2">
          <button>
            <RefreshCw />
          </button>
          <button  className="text-text-title"><EllipsisVertical /></button> 
        </div>
      </div>
      <div className="grid grid-cols-5 mb-4">
        <div>
          <DoughnutChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
      <div className="flex gap-1.5">
        {cards.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-t-xs rounded-b-full grid p-[3px] gap-0.5  g-[#F7F7F7] border border-[#0000001A]"
            >
              <p className="py-0.5 text-center bg-background-box border border-[#0000000D] text-text-secondary font-normal text-[10px]">
                {item.title}
              </p>
              <p className="py-3 text-center bg-background-box border border-[#0000000D] text-text-secondary font-normal text-[10px]">
                {item.value}
              </p>
              <div className="bg-[#0000000D] p-[3px] rounded-full">
                <div
                  className=" p-4 w-14 h-14 flex items-center justify-center rounded-full shadow-[0px_0px_2px_1px_#00000061]"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <Image src={item.icon} width={26} height={26} alt="move" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
