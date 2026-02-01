"use client";
import Card from "./components/card";
import ServerHeader from "./serverHeader";
import ServerPopUP from "./components/server";
import { useState } from "react";
export default function Server() {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      title: "Client ",
      id: 1,
      img: "/images/icons/settings/server/client.png",
      time: "20:10:19",
      date: "1404/10/22",
    },
    {
      title: " Software Server",
      id: 2,
      img: "/images/icons/settings/server/Software.png",
      time: "20:10:19",
      date: "1404/10/22",
    },
    {
      title: " NTP Server",
      id: 3,
      img: "/images/icons/settings/server/ntp.png",
      time: "20:10:19",
      date: "1404/10/22",
      button: true,
    },
  ];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <ServerHeader />
      <div className="p-4 flex flex-col gap-1.5 w-full ">
        <div className="flex gap-1.5 w-full flex-wrap">
          {list.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                img={item.img}
                time={item.time}
                date={item.date}
                button={item.button}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            );
          })}
        </div>
        <ServerPopUP isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className=" mt-6  text-text-tertiary text-xs py-3.5 px-8 border border-border-muted rounded-[50px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>
      </div>
       
    </div>
  );
}
