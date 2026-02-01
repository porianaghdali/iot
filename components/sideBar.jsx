"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* =========================
   Main Menu
========================= */
const mainMenu = [
  {
    id: 1,
    title: "داشبورد",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="text-text-title"
      >
        <path
          d="M0 0 C3.63 0 7.26 0 11 0 C11 4.62 11 9.24 11 14 C7.37 14 3.74 14 0 14 C0 9.38 0 4.76 0 0 Z M2 2 C2 5.3 2 8.6 2 12 C4.31 12 6.62 12 9 12 C9 8.7 9 5.4 9 2 C6.69 2 4.38 2 2 2 Z"
          fill="currentColor"
          transform="translate(0,10)"
        />
        <path
          d="M0 0 C3.63 0 7.26 0 11 0 C11 4.62 11 9.24 11 14 C7.37 14 3.74 14 0 14 C0 9.38 0 4.76 0 0 Z M2 2 C2 5.3 2 8.6 2 12 C4.31 12 6.62 12 9 12 C9 8.7 9 5.4 9 2 C6.69 2 4.38 2 2 2 Z"
          fill="currentColor"
          transform="translate(13,0)"
        />
        <path
          d="M0 0 C3.63 0 7.26 0 11 0 C11 2.64 11 5.28 11 8 C7.37 8 3.74 8 0 8 C0 5.36 0 2.72 0 0 Z M2 2 C2 3.32 2 4.64 2 6 C4.31 6 6.62 6 9 6 C9 4.68 9 3.36 9 2 C6.69 2 4.38 2 2 2 Z"
          fill="currentColor"
          transform="translate(13,16)"
        />
        <path
          d="M0 0 C3.63 0 7.26 0 11 0 C11 2.64 11 5.28 11 8 C7.37 8 3.74 8 0 8 C0 5.36 0 2.72 0 0 Z M2 2 C2 3.32 2 4.64 2 6 C4.31 6 6.62 6 9 6 C9 4.68 9 3.36 9 2 C6.69 2 4.38 2 2 2 Z"
          fill="currentColor"
          transform="translate(0,0)"
        />
      </svg>
    ),
    path: "/dashboard",
  },
  {
    id: 2,
    title: "مانیتورینگ",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="24"
        height="24"
        viewBox="0 0 24.000000 24.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path d="M0 115 l0 -85 46 0 c37 0 45 -3 40 -15 -4 -12 3 -15 34 -15 31 0 38 3 34 15 -5 12 3 15 40 15 l46 0 0 85 0 85 -120 0 -120 0 0 -85z m230 15 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m0 -80 c0 -6 -43 -10 -110 -10 -67 0 -110 4 -110 10 0 6 43 10 110 10 67 0 110 -4 110 -10z m-90 -30 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z" />
          <path d="M116 145 c-6 -24 -26 -36 -26 -15 0 6 -10 9 -22 9 -17 -1 -18 -3 -6 -6 9 -2 20 -13 23 -24 9 -26 22 -24 29 6 8 30 22 32 31 5 4 -13 14 -20 28 -19 16 1 17 3 5 6 -9 2 -22 17 -28 34 -15 36 -26 37 -34 4z" />
        </g>
      </svg>
    ),
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

/* =========================
   Settings Menu
========================= */
const settingsMenu = [
  {
    id: 1,
    title: "پنل پیامکی",
    img: "/images/icons/settings/sideBar/sms.svg",
    path: "/settings/sms",
  },
  {
    id: 2,
    title: "ایمیل",
    img: "/images/icons/settings/sideBar/email.svg",
    path: "/settings/email",
  },
  {
    id: 3,
    title: "بات",
    img: "/images/icons/settings/sideBar/bot.svg",
    path: "/settings/bot",
  },
  {
    id: 4,
    title: "زمان سرور",
    img: "/images/icons/settings/sideBar/server.svg",
    path: "/settings/server",
  },
  {
    id: 5,
    title: "به‌روز رسانی",
    img: "/images/icons/settings/sideBar/update.svg",
    path: "/settings/update",
  },
  {
    id: 6,
    title: "پایگاه داده",
    img: "/images/icons/settings/sideBar/data.svg",
    path: "/settings/dataBase",
  },
  {
    id: 7,
    title: "مدیریت شبکه",
    img: "/images/icons/settings/sideBar/network.svg",
    path: "/settings/network",
  },
];

/* =========================
   Sidebar Component
========================= */
export default function SideBar({ isOpen }) {
  const pathname = usePathname();
  const isSettings = pathname.startsWith("/settings/");
  const menuList = isSettings ? settingsMenu : mainMenu;

  return (
    <aside
      className={`flex h-[calc(100vh-64px)]  flex-col gap-2 border-l border-border-main transition-all transform duration-300 py-6 
        ${isOpen ? "w-[260px]" : "w-15 overflow-hidden"} bg-background-box`}
    >
      {/* Header / Back */}
      {isSettings && (
        <Link
          href="/settings"
          className={`flex items-center gap-4 px-2.5 py-2 text-base  border-border-main text-text-title transition-colors border-b `}
        >
          <div className="w-6 h-6 mr-1.5 ">
            <X size={24} />
          </div>
          <p className="font-normal truncate whitespace-nowrap text-base">
            {" "}
            تنظیمات{" "}
          </p>
        </Link>
      )}

      {/* Menu Items */}
      {menuList.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            href={item.path}
            key={item.id}
            className={`flex items-center gap-4 py-2 px-2.5 rounded-sm mx-1.5
              text-text-title transition-colors
              ${isActive ? "bg-menu-item-hover" : "hover:bg-menu-item-hover"}`}
          >
            <span>{item.svg}</span>
            {/* <Image src={item.img} alt={item.title} width={20} height={20} /> */}
            <p className="font-normal truncate whitespace-nowrap text-base">
              {item.title}
            </p>
          </Link>
        );
      })}

      {/* Footer (Only Main Menu) */}
      {!isSettings && (
        <div className="mt-auto">
          <Link
            href="/settings"
            className={` flex items-center gap-4 py-2 px-2.5 rounded-sm mx-1.5
              text-text-title transition-colors 
              ${
                pathname === "/settings"
                  ? "bg-menu-item-hover"
                  : "hover:bg-menu-item-hover"
              }`}
          >
            <Image
              src="/images/icons/settings.svg"
              alt="settings"
              width={24}
              height={24}
            />
            <p className="font-normal truncate whitespace-nowrap text-base">
              تنظیمات
            </p>
          </Link>

          <Link
            href="/info"
            className={` flex items-center gap-4 py-2 px-2.5 rounded-sm mx-1.5
              text-text-title transition-colors
              ${
                pathname === "/info"
                  ? "bg-menu-item-hover"
                  : "hover:bg-menu-item-hover"
              }`}
          >
            <Image
              src="/images/icons/info.svg"
              alt="info"
              width={24}
              height={24}
            />
            <p className="font-normal truncate whitespace-nowrap text-base">
              راهنما
            </p>
          </Link>
        </div>
      )}
    </aside>
  );
}
