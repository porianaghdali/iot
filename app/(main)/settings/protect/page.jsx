"use client";
import Image from "next/image";
import ProtectHeader from "./protectHeader";
import ToggleSwitch from "../../../../components/ui/toggleSwitch";
import Modal from "./components/modal";
import { useState } from "react";
export default function Protect() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <ProtectHeader />

      <div className="flex justify-center pt-[5%]">
        <div className="w-[607px]  py-6 px-5  rounded  bg-background-box">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3   my-auto ">
              <p className="text-lg font-normal text-text-title ">
                ورود دو عاملی
              </p>
              <p className="text-[#9E9E9E] text-sm">فعال</p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex flex-col gap-4.5">
            <div className="border border-border-muted rounded px-3 py-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/protect/sms.png"
                    alt="sms"
                    width={46}
                    height={46}
                  />
                  <p className="text-text-title text-sm font-normal">
                    ورود با پیامک
                  </p>
                  <p className="text-[#9E9E9E] text-sm font-normal mr-1">
                    فعال
                  </p>
                </div>
                <ToggleSwitch />
              </div>
            </div>
            <div className="border border-border-muted rounded px-3 py-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/protect/app.png"
                    alt="sms"
                    width={46}
                    height={46}
                  />
                  <p className="text-text-title text-sm font-normal">
                    {" "}
                    ورود با برنامه{" "}
                  </p>
                  <p className="text-[#9E9E9E] text-sm font-normal mr-1">
                    فعال
                  </p>
                </div>
                <button onClick={handleOpenModal} className="border border-border-muted rounded  px-8 py-2 text-text-title text-sm font-normal w-fit">
                  تنظیم
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
}
