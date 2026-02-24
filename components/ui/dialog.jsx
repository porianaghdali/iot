"use client";

import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";

export default function Dialog({
  open,
  type = "success", // success | delete | error | cancel | warning
  message,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  // رنگ‌ها و استایل‌ها
  const styles = {
    success: "bg-[#599DE8] text-white",
    delete: "bg-red-500 text-white",
    error: "bg-red-500 text-white",
    cancel: "bg-red-500 text-white",
    warning: "bg-red-500  text-white",
  };

  // آیکون‌ها
  const icons = {
    success: "/images/dialog/done.png",
    delete: "/images/dialog/delete.png",
    error: "/images/dialog/error.png",
    cancel: "/images/dialog/error.png",
    warning: "/images/dialog/warning.png",
  };

  // عنوان داینامیک
  const titles = {
    success: "انجام شد",
    delete: "حذف",
    error: "خطا",
    cancel: "انصراف",
    warning: "هشدار",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D26]"
      onClick={onCancel} // کلیک روی بک‌گراند => بستن
    >
      <div
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن وقتی داخل مودال کلیک می‌کنیم
        className="w-full max-w-[572px] bg-white overflow-hidden relative px-8 py-12 grid gap-8"
      >
        {/* Close Button */}
        <button
          onClick={onCancel}
          className="absolute left-3 top-5 border rounded-full p-0.5"
        >
          <X size={18} />
        </button>

        {/* Body */}
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-xl bg-background-modal-header">
            <Image src={icons[type]} alt={type} width={84} height={84} />
          </div>

          <div className="grid gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-text-title font-normal">
                {titles[type]}
              </h2>
              <p className="text-text-tertiary text-base font-normal">
                {message}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 text-sm font-normal">
              {/* success */}
              {type === "success" && (
                <button
                  onClick={onConfirm}
                  className={`rounded py-2 px-3.5 w-fit min-w-[95px] text-center ${styles[type]}`}
                >
                  متوجه شدم
                </button>
              )}

              {/* delete */}
              {type === "delete" && (
                <>
                  <button
                    onClick={onCancel}
                    className="rounded py-2 px-3.5 text-text-title hover:bg-gray-100 border min-w-[95px] border-red"
                  >
                    خیر
                  </button>
                  <button
                    onClick={onConfirm}
                    className={`rounded py-2 px-3.5 w-fit min-w-[95px] text-center ${styles[type]} justify-center flex items-center gap-1.5`}
                  >
                    بله
                  </button>
                </>
              )}

              {/* cancel */}
              {type === "cancel" && (
                <>
                  <button
                    onClick={onCancel}
                    className="rounded py-2 px-3.5 text-text-title hover:bg-gray-100 border min-w-[95px] border-red"
                  >
                    خیر
                  </button>
                  <button
                    onClick={onConfirm}
                    className={`rounded py-2 px-3.5 w-fit min-w-[95px] text-center ${styles[type]}  gap-1.5`}
                  >
                    بله
                  </button>
                </>
              )}

              {/* error */}
              {type === "error" && (
                <>
                  <button
                    onClick={onCancel}
                    className="rounded py-2 px-3.5 text-text-title hover:bg-gray-100 border border-red"
                  >
                    متوجه شدم
                  </button>
                  <button
                    onClick={onConfirm}
                    className={`rounded py-2 px-3.5 w-fit min-w-[95px] text-center ${styles[type]} flex  items-center  gap-1.5`}
                  >
                    <p>صفحه تنظیمات</p> <ArrowLeft size={16} />
                  </button>
                </>
              )}

              {/* warning */}
              {type === "warning" && (
                <>
                  <button
                    onClick={onCancel}
                    className="rounded py-2 px-3.5 text-text-title hover:bg-gray-100 border border-red"
                  >
                    متوجه شدم
                  </button>
                  <button
                    onClick={onConfirm}
                    className={`rounded py-2 px-3.5 w-fit min-w-[95px] text-center ${styles[type]} flex items-center gap-1.5`}
                  >
                    <p>صفحه تنظیمات</p> <ArrowLeft size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
