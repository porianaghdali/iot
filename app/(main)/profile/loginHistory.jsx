"use client";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LOginHistory({ setSelectedItem }) {
  const list = [
    {
      title: "همه",
      id: 1,
    },
    {
      title: "ورودهای موفق",
      id: 2,
    },
    {
      title: "ورودهای ناموفق",
      id: 3,
    },
  ];
  const items = [
    {
      title: "ورود",
      id: 1,
    },
    {
      title: "IP",
      id: 2,
    },
    {
      title: "سیستم عامل",
      id: 3,
    },
    {
      title: "زمان",
      id: 4,
    },
  ];
  const data = [
    {
      id: 1,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 2,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 3,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 4,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 5,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 6,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 7,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 8,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 9,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 10,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 11,
      status: true,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
    {
      id: 12,
      status: false,
      IP: "123",
      OS: "ویندوز",
      time: "1404/09/03 16:55:29",
    },
  ];
  const [selected, setSelected] = useState(1);
  const filteredData = data.filter((item) => {
    if (selected === 1) return true;
    if (selected === 2) return item.status === true;
    if (selected === 3) return item.status === false;
  });

  return (
    <div className="relative flex flex-col gap-3 p-1.5  w-1/2 min-w-[400px] h-3/4  bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
      <div className="relative px-3 py-4 flex items-center justify-center gap-2 text-text-title  text-base font-normal bg-background-modal-header rounded">
        <button
          onClick={() => setSelectedItem(null)}
          className="absolute left-2.5 top-2.5"
        >
          {" "}
          <CircleX strokeWidth={1} size={22} color="#0D0D0D" />
        </button>
        <p> سوابق ورود</p>
      </div>
      <div className="border-[0.5px] border-border-muted ">
        <div className="grid grid-cols-3 text-sm font-normal">
          {list.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelected(item.id);
              }}
              className={`
  border-border-muted py-3.5
  ${item.id !== 1 ? "border-r" : ""}
  ${
    selected === item.id
      ? "bg-background-box text-text-tertiary"
      : "bg-background-modal-header text-[#60606080]"
  }
`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 px-7 py-1 border-b border-border-muted">
          {items.map((item) => (
            <div
              key={item.id}
              className=" text-text-title text-sm font-normal py-2.5"
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="overflow-y-auto max-h-[350px]">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 px-7 border-b border-border-muted text-text-tertiary text-xs font-normal py-2.5"
            >
              <div className="flex items-center gap-2">
                {item.status ? (
                  <Image
                    src="/images/icons/check.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/images/icons/xmark.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                )}
                {item.status ? "ورود موفق" : "ورود ناموفق"}
              </div>
              <div>{item.IP}</div>
              <div>{item.OS}</div>
              <div>{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
