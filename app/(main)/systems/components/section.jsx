import { RefreshCw, EllipsisVertical } from "lucide-react";
import Card from "./card"
export default function Section() {
const data=[1,2,3,4]
  return (
    <div className="bg-background-box py-3 px-4 w-full rounded-xs flex flex-col gap-2">
      <div className="flex justify-between items-center text-text-secondary">
        <p className=" text-sm font-normal ">اتاق سرور</p>
        <div className="flex items-center gap-2">
          <button>
            <RefreshCw />
          </button>
          <button  className="text-text-title"><EllipsisVertical /></button> 
        </div>
      </div>
   <div className="grid grid-cols-3 gap-2">
      {data.map((item) => {
                return (
                  <div key={item} className="">
                    <Card />
                  </div>
                );
              })}

   </div>
    </div>
  );
}
