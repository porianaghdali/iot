"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const list = [
  { id: 1, title: "داشبورد", img: "/images/icons/dashboard.svg", path: "/" },
  {
    id: 2,
    title: "مانیتورینگ",
    img: "/images/icons/monitor.svg",
    path: "/monitoring",
  },
  { id: 3, title: "ناحیه ها", img: "/images/icons/layer2.svg", path: "/areas" },
  { id: 4, title: "دستگاه ها", img: "/images/icons/iot.svg", path: "/devices" },
  {
    id: 5,
    title: "سیستم ها",
    img: "/images/icons/system.svg",
    path: "/systems",
  },
  { id: 6, title: "نقشه ها", img: "/images/icons/map.svg", path: "/maps" },
  {
    id: 7,
    title: "نمودار ها",
    img: "/images/icons/chart.svg",
    path: "/charts",
  },
  { id: 8, title: "کاربران", img: "/images/icons/user.svg", path: "/users" },
];

export default function SideBar({ isOpen }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex h-[calc(100vh-64px)] flex-col gap-2 transition-all  duration-300 py-6  px-1.5 
         ${isOpen ? "w-[260px]" : "w-15 overflow-hidden"} bg-white`}
      style={{ borderLeft: " 1px solid rgba(0, 0, 0, 0.2)" }}
    >
      {list.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            href={item.path}
            key={item.id}
            className={`
              flex items-center gap-4 py-2 px-2.5 rounded-sm  
             text-[#0D0D0D] ${isActive ? "bg-[#02020208]  " : " "}
            `}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={24}
              height={24}
              className=""
            />
            <p
              className={`font-normal truncate whitespace-nowrap transition-all delay-350 text-base duration-300 `}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
      <div className="mt-auto">
        <Link
          href="/settings"
          className={`
              flex items-center gap-4 py-2 px-2.5 rounded-sm  
             text-[#0D0D0D] ${
               pathname === "/settings" ? "bg-[#02020208]  " : " "
             }
            `}
        >
          <Image
            src="/images/icons/settings.svg"
            alt="settings"
            width={24}
            height={24}
            className=""
          />{" "}
          <p
            className={`font-normal truncate whitespace-nowrap transition-all delay-350 text-base duration-300 `}
          >
            تنظیمات
          </p>
        </Link>
        <Link
          href="/info"
          className={`
              flex items-center gap-4 py-2 px-2.5 rounded-sm  
             text-[#0D0D0D] ${
               pathname === "/info" ? "bg-[#02020208]  " : " "
             }
            `}
        >
          <Image
            src="/images/icons/info.svg"
            alt="settings"
            width={24}
            height={24}
            className=""
          />
          <p
            className={`font-normal truncate whitespace-nowrap transition-all delay-350 text-base duration-300 `}
          >
            راهنما
          </p>
        </Link>
      </div>
    </div>
  );
}
