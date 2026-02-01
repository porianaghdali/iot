"use client";
import { useState } from "react";
import { Bell, Menu, User, CircleAlert } from "lucide-react";
import ThemeToggle from "@/components/ui/themeToggle";
import Image from "next/image";
import Profile from "../app/(main)/profile/profile";
import Notifications from "../app/(main)/notifications/notifications";
import LanguageSwitcher from "./ui/languageSwitcher";
export default function Header({ toggleSidebar }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <div className="relative shadow-[0px_2px_4px_1px_#0000001F] h-16 bg-background-box border-b border-border-main p-4 flex justify-between z-20">
      <div className="flex items-center gap-6">
        <button onClick={toggleSidebar}>
          <Menu />
        </button>
 
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" width={26} height={26} alt="logo" />
          <p className="text-text-title font-normal text-lg">پایش محیط سپهر</p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-text-title relative">
        {/* <LanguageSwitcher/> */}
        <ThemeToggle />
        <button>
          <CircleAlert strokeWidth={1.25} />
        </button>

        <button onClick={() => setOpenNotifications(!openNotifications)}>
          <Bell strokeWidth={1.25} />
        </button>

        {/* پروفایل */}
        <button
          className="p-2.5 bg-[#D9D9D940] rounded-full"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <User strokeWidth={1.25} />
        </button>
        <Notifications
          openNotifications={openNotifications}
          setOpenNotifications={setOpenNotifications}
        />
        <Profile setOpenProfile={setOpenProfile} openProfile={openProfile} />
      </div>
    </div>
  );
}
