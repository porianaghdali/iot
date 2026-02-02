import { CircleX } from "lucide-react";

export default function Header({ step }) {
  const list = [
    { title: "مشخصات", id: 1 },
    { title: "دسترسی‌ها", id: 2 },
    { title: "IP", id: 3 },
    { title: "توضیحات", id: 4 },
  ];
  return (
    <div className="">
      <div className="bg-background-modal-header p-3 rounded relative flex flex-col gap-3">
        <button className="absolute left-3 top-3">
          <CircleX size={22} strokeWidth={1.25} />
        </button>
        <p className="text-text-title text-base font-normal[#0D0D0D]">
          کاربر جدید
        </p>
        <div className="bg-white shadow-[0px_2px_8px_1px_#00000014] rounded p-1 grid grid-cols-4 gap-1">
          {list.map((item) => {
            return (
              <div
                key={item.id}
                className={`text-center p-1.5  ${
                  step > item.id
                    ? "bg-green text-white"
                    : step == item.id
                      ? "bg-blue text-white"
                      : "bg-background-modal-header"
                }
                     rounded text-[#60606080] text-sm font-normal`}
              >
                <button>{item.title}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
