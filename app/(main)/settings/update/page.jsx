"use client";
import Image from "next/image";
import UpdateHeader from "./updateHeader";
import Link from "next/link";
export default function Update() {
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto">
      <UpdateHeader />

      <div className="p-4 flex flex-col gap-1.5 w-full">
        <div className="bg-white p-10 rounded-xs">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src="/images/update/update.png"
              height={182}
              width={149}
              alt="update"
            />

            <p className="text-black text-lg font-normal">
              به‌روز رسانی جدید در دسترس است
            </p>

            <Link
              href="/settings/Updating"
              className="text-white text-center font-normal text-lg p-2 bg-[#FF4A69] rounded-[50px] w-40"
            >
              به‌روز رسانی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
