"use client"
import { LogOutIcon } from "lucide-react";

export default function LogOut({closeModal, handleLogout}) {
  return (
    <div className="relative flex flex-col gap-4  items-center p-8 justify-center w-full max-w-[570px] bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
      <div className=" rotate-180 p-5 rounded-full bg-background-modal-header w-fit">
        <LogOutIcon size={60} color="#FF4646" />
      </div>
      <p className="tex-base font-normal text-text-title">
        آیا می‌خواهید از برنامه خارج شوید؟
      </p>
      <div className="flex gap-1.5">
         <button
          className="py-2 px-7 border border-red text-text-title rounded text-sm"
          onClick={closeModal   }
        >
          انصراف
        </button>
        <button
          className="py-2 px-3 bg-red rounded text-white text-sm"
          onClick={handleLogout}
        >
          خروج از برنامه
        </button>
      </div>
    </div>
  );
}
