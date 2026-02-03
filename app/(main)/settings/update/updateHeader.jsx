"use client";

export default function UpdateHeader() {
  return (
    
      <div
        className="p-4 flex justify-between items-center w-full  bg-background-box h-fit"
        style={{ borderBottom: " 1px solid rgba(0, 0, 0, 0.2)" }}
      >
        <p className="font-normal text-lg text-text-title  "> به‌روز رسانی </p>
        <div className="flex gap-1">
          <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            به‌روزسانی دستی{" "}
          </button>
        </div>
      </div>
    
  );
}
