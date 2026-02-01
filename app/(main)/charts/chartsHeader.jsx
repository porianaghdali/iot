"use client";
import { useState } from "react";
import { ListFilter } from "lucide-react";
export default function ChartsHeader() {
  const [selected, setSelected] = useState(1);
  const list = [
    { id: 1, title: "   هیت مپ" },
    { id: 2, title: "   تعین حد" },
    { id: 3, title: "    انتخاب ماه" },
  ];
  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-background-box">
        <p className="font-normal text-lg text-text-title  "> نمودارها </p>
      </div>
      <div className="flex items-center justify-between bg-background-box border-b border-border-main p-3 w-full border-y">
        <div className="flex items-center  gap-2.5 ">
          <select
            name="1"
            id=""
            className="border border-border-muted rounded-sm w-[114px] text-text-tertiary text-xs font-normal"
          >
            <option value="ناحیه">دما</option>
          </select>
          {list.map((item) => {
            return (
              <button
                onClick={() => setSelected(item.id)}
                key={item.id}
                className={
                  selected === item.id
                    ? "font-normal text-xs text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] border border-border-muted"
                    : "font-normal text-xs text-text-tertiary  bg-background-box px-5 py-1.5 rounded-[50px] border border-border-muted"
                }
              >
                {item.title}{" "}
              </button>
            );
          })}

          <button className="   text-xs font-normal flex items-center gap-2">
            <ListFilter size={18} />
            <p className="text-[#0000004D]">فیلتر</p>
          </button>
        </div>
      </div>
    </>
  );
}
