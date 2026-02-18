import { RefreshCw, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useNodes } from "@/hooks/useNodes";
import { useEffect, useMemo } from "react";
import { getTokenFromCookie } from "@/utils/functions/auth";
import GaugeChart from "../../../../components/charts/gaugeChart";

const STATUS_CARDS = [
  {
    title: "حرکت",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/move.svg",
    color: "#FF4646",
    id: 1,
  },
  {
    title: "ثابت",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/dont_move.svg",
    color: "#20E080",
    id: 2,
  },
  {
    title: "حریق",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/fire.svg",
    color: "#20E080",
    id: 3,
  },
  {
    title: "عادی",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/check.svg",
    color: "#FF4646",
    id: 4,
  },
  {
    title: "بسته",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/close.svg",
    color: "#FF4646",
    id: 5,
  },
  {
    title: "باز",
    value: "MBcurrent",
    icon: "/images/icons/monitoring/open.svg",
    color: "#20E080",
    id: 6,
  },
];

export default function Card({ item }) {
  // گرفتن نودهای این zone
  return (
    <>
      <div className="bg-background-box py-3 px-4 w-full rounded-xs">
        {/* Header */}
        <div className="flex justify-between items-center text-text-secondary">
          <p className="text-sm font-normal">{item.zoneName}</p>

          <div className="flex items-center gap-2">
            <button onClick={() => fetchNodes(item.ID)}>
              <RefreshCw />
            </button>

            <button className="text-text-title">
              <EllipsisVertical />
            </button>
          </div>
        </div>
        {/* Charts */}
        <div className="grid grid-cols-4 gap-10 mb-4 ">
        {item.sensor.map((sens) => {
          return (
            <div key={sens.ID} className=" ">
              <GaugeChart data={sens} />
            </div>
          );
        })}</div>

        {/* Status cards */}
        <div className="flex gap-1.5">
          {STATUS_CARDS.map((card) => (
            <div
              key={card.id}
              className="rounded-t-xs rounded-b-full grid p-[3px] gap-0.5 border border-[#0000001A]"
            >
              <p className="py-0.5 text-center bg-background-box border border-[#0000000D] text-text-secondary text-[10px]">
                {card.title}
              </p>

              <p className="py-3 text-center bg-background-box border border-[#0000000D] text-text-secondary text-[10px]">
                {card.value}
              </p>

              <div className="bg-[#0000000D] p-[3px] rounded-full">
                <div
                  className="p-4 w-14 h-14 flex items-center justify-center rounded-full shadow-[0px_0px_2px_1px_#00000061]"
                  style={{ backgroundColor: card.color }}
                >
                  <Image
                    src={card.icon}
                    width={26}
                    height={26}
                    alt={card.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
