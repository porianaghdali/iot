"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Filter() {
  const list = [
    {
      id: 1,
      title: " یک روز",
    },
    {
      id: 2,
      title: "سه روز",
    },
    {
      id: 3,
      title: "یک هفته",
    },
    {
      id: 4,
      title: "دو هفته",
    },
    {
      id: 5,
      title: "یک ماه",
    },
    {
      id: 6,
      title: "سه ماه",
    },
    {
      id: 7,
      title: "شش ماهه",
    },
  ];
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex gap-1">
      <div className="border border-border-muted rounded ">
        {list.map((item) => {
          return (
            <button
              onClick={() => setSelected(item.id)}
              key={item.id}
              className={`font-normal text-xs text-text-tertiary h-full
            px-2.5 py-1  border-border-muted ${
              item.id == selected ? "bg-background-button text-text-title" : "bg-background-box"
            } ${item.id != 1 ? "border-r " : "rounded"} ${
                item.id == 7 ? "rounded-l" : ""
              }`}
            >
              {item.title}
            </button>
          );
        })}
     
      </div>
         <button className="border border-border-muted rounded w-6.5 flex items-center justify-center"><Menu color="#C1C1C1" size={18}/></button>
    </div>
  );
}
