import { EllipsisVertical } from "lucide-react";
const list = [
  {
    id: 1,
    title: " اتاق سرور 2",
    status: "۲ مورد",
  },
  {
    id: 2,
    title: "اتاق نرم افزار",
    status: "۲ مورد",
  },
  {
    id: 3,
    title: "سالن جلسات",
    status: "۲ مورد",
  },
  {
    id: 4,
    title: "انبار طبقه 3",
    status: "۲ مورد",
  },
  {
    id: 5,
    title: "واحد فروش",
    status: "۲ مورد",
  },
  {
    id: 6,
    title: "واحد سخت افزار",
    status: "۲ مورد",
  },
  {
    id: 7,
    title: "اتاق نرم افزار",
    status: "۲ مورد",
  },
];
export default function Areas() {
  return (
    <div className="bg-white rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-[#0D0D0D] text-base font-normal">ناحیه ها</p>
        <EllipsisVertical />
      </div>
      {list.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <p className="text-[#0D0D0D] text-sm font-normal">{item.title}</p>
          <div className="flex items-center gap-2">
            <span className="flex gap-[1px]">
              <span className="w-3.5 h-1.5 bg-[#FF4646]"></span>
              <span className="w-3.5 h-1.5 bg-[#5921FF]"></span>
            </span> 
            <p className="text-[#0D0D0D] text-sm font-normal">{item.status}</p>
          </div>
        </div>
      ))}
      <button className="bg-[#0202020D] rounded-[50px] text-[#0D0D0D] font-normal text-sm py-1.5  w-1/2">دیدن ناحیه ها</button>
    </div>
  );
}
