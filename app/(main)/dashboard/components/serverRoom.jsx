import { EllipsisVertical } from "lucide-react";
const list = [
  {
    id: 1,
    bg: "#BC48FF",
  },
  {
    id: 2,
    bg: "#C266FF",
  },
  {
    id: 3,
    bg: "#9466FF",
  },
  {
    id: 4,
    bg: "#6669FF",
  },
  {
    id: 5,
    bg: "#6669FF",
  },
];
export default function ServerRoom() {
  return (
    <div className="bg-background-box rounded-xs px-3 py-3.5 flex flex-col gap-4 w-72 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-text-title text-base font-normal"> اتاق سرور</p>
        <div className="flex items-center gap-1">
          <div className="bg-red rounded-xs text-white font-normal text-[10px] px-3 py-[1px]">
            هشدار
          </div>
          <button  className="text-text-title"><EllipsisVertical /></button> 
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-text-secondary text-base font-normal">
           
          44 درجه سانتی گراد
        </p>
      </div>
      <div className="flex flex-col gap-1">
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-[50px] rounded-md "
              style={{ background: item.bg }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
