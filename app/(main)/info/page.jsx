import { Headset } from "lucide-react";
import InfogHeader from "./infoHeader";
import Image from "next/image";

export default function Info() {
  const list = [
    { title: "ابزارک‌ها", id: 1, src: "/images/info/widget.png" },
    { title: "ناحیه‌ها", id: 2, src: "/images/info/zone.png" },
    { title: "دستگاه‌ها", id: 3, src: "/images/info/node.png" },
    { title: "سیستم‌ها", id: 4, src: "/images/info/system.png" },
    { title: "توپولوژی", id: 5, src: "/images/info/topo.png" },
    { title: "نقشه‌ها", id: 6, src: "/images/info/map.png" },
    { title: "نمودارها", id: 7, src: "/images/info/chart.png" },
    { title: "کاربران", id: 8, src: "/images/info/user.png" },
    { title: "تنظیمات", id: 9, src: "/images/info/setting.png" },
    { title: "کلیدهای میانبر", id: 10, src: "/images/info/shortcut.png" },
  ];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <InfogHeader />

      <div
        style={{
          background: "linear-gradient(268.32deg, #DFF0FE 0%, #F4E5FF 100%)",
        }}
        className="w-full flex flex-col gap-3 px-[20%] items-center py-[3.5%] "
      >
        <p className="text-text-title text-2xl font-bold">
          آیا به پشتیبانی نیاز دارید؟
        </p>
        <div className="max-w-[582px] grid justify-center gap-10">
          <p className="text-text-tertiary font-normal text-base text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <button className="bg-white border border-blue rounded-[45px] py-2.5 px-12 flex items-center gap-2 w-fit mx-auto">
            <Headset strokeWidth={1} />
            <p>پشتیانی</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 px-[7%] py-7">
{list.map((item)=>{
    return(<div  key={item.key} className="bg-white shadow-[0px_2px_6px_0px_#00000033] rounded grid gap-3.5 py-7 justify-center  ">
        <Image src={item.src} alt={item.title} width={80} height={80} />
        <p className="text-text-title text-lg font-normal text-center">{item.title}</p>
    </div>)
})}



      </div>
    </div>
  );
}
