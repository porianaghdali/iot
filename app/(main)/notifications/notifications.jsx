import Image from "next/image";

export default function Notifications({
  openNotifications,
  setOpenNotifications,
}) {
  return (
    <>
      {/* بک‌دراپ برای منو */}
      {openNotifications && (
        <div
          onClick={() => setOpenNotifications(false)}
          className="fixed inset-0 bg-black/40 z-10"
        />
      )}

      {/* باکس پروفایل */}
      {openNotifications && (
        <div className="absolute top-14 left-16 w-80 h-60 bg-white shadow-lg rounded flex flex-col z-20">
          <div className="flex justify-between items-center p-3 bg-[#F6F8FA]">
            <p className="text-lg font-normal text-[#0D0D0D]">اعلان‌ها</p>
            <button className="text-[#2A2A2A] text-xs font-normal">
              پاک کردن همه
            </button>
          </div>
          <div className="m-auto">
            <Image  
              src="/images/icons/notifications/notification.png"
              alt="notifications"
              width={143} 
              height={143}
              className="mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
