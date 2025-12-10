"use client";
import { useState } from "react";
import { Bell, CircleQuestionMark, Menu, User } from "lucide-react";
import Image from "next/image";
import Profile from "./profile";
export default function Header({ toggleSidebar }) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="relative shadow-[0px_2px_4px_1px_#0000001F] h-16 bg-white p-4 flex justify-between z-20">
      <div className="flex items-center gap-6">
        <button onClick={toggleSidebar}>
          <Menu />
        </button>

        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" width={26} height={26} alt="logo" />
          <p className="text-[#0D0D0D] font-normal text-lg">پایش محیط سپهر</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[#0D0D0D] relative">
        <button>
          <CircleQuestionMark strokeWidth={1.25} />
        </button>

        <button>
          <Bell strokeWidth={1.25} />
        </button>

        {/* پروفایل */}
        <button
          className="p-2.5 bg-[#D9D9D940] rounded-full"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <User strokeWidth={1.25} />
        </button>

        <Profile setOpenProfile={setOpenProfile} openProfile={openProfile} />
      </div>
    </div>
  );
}
