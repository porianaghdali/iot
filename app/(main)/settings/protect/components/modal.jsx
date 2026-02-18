import { X } from "lucide-react";
import Image from "next/image";

export default function Modal({ onClose, isOpen }) {
  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30 h-full w-full p-3 border">
          <div className="fixed inset-0 bg-black/40" onClick={onClose}></div>
          <div className="relative flex flex-col gap-3  items-center w-full max-w-[570px] p-8 bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
            <button
              className="p-1 border rounded-full w-fit absolute left-3 top-3 "
              onClick={onClose}
            >
              <X size={18} />
            </button>
            <Image
              src="/images/protect/appLogo.png"
              alt="sms"
              width={94}
              height={94}
            />
            <p className="text-text-title text-lg font-normal">ثبت برنامه</p>
          </div>
        </div>
      )}
    </>
  );
}
