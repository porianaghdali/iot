import { User } from "lucide-react";
import { useState } from "react";

export default function Profile({ openProfile, setOpenProfile }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const list = [
    { id: 1, title: "سوابق ورود", icon: <User /> },
    { id: 2, title: "ویرایش مشخصات", icon: <User /> },
    { id: 3, title: "تغییر رمز", icon: <User /> },
    { id: 4, title: "ورود دو مرحله‌ای", icon: <User /> },
    { id: 5, title: "راهنما", icon: <User /> },
    { id: 6, title: "خروج", icon: <User /> },
  ];
  function renderModalContent(item) {
    switch (item.id) {
      case 1:
        return <p>نمایش سوابق ورود...</p>;

      case 2:
        return (
          <div className="flex flex-col gap-3">
            <label className="text-sm">نام:</label>
            <input className="border p-2 rounded" placeholder="نام جدید" />
            <button className="bg-blue-600 text-white py-2 rounded">
              ذخیره
            </button>
          </div>
        );

      case 3:
        return (
          <div className="relative flex flex-col gap-3 p-1.5  w-full max-w-[570px] bg-white shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
            <div className="px-3 py-4 flex items-center gap-2 text-[#0D0D0D] text-base font-normal bg-[#F6F8FA] rounded">
              <User />
              <p>تغییر رمز</p>
            </div>
            <input
              className="border p-2 rounded"
              placeholder="رمز قدیمی"
              type="password"
            />
            <input
              className="border p-2 rounded"
              placeholder="رمز جدید"
              type="password"
            />
            <button className="bg-blue-600 text-white py-2 rounded">
              تغییر رمز
            </button>
          </div>
        );

      case 4:
        return <p>فعال‌سازی ورود دو مرحله‌ای (OTP / Google Auth)…</p>;

      case 5:
        return <p>راهنمای استفاده از سامانه...</p>;

      case 6:
        return (
          <div>
            <p>آیا از حساب کاربری خارج می‌شوید؟</p>
            <button className="bg-red-600 text-white mt-4 py-2 rounded">
              خروج
            </button>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <>
      {/* بک‌دراپ برای منو */}
      {openProfile && (
        <div
          onClick={() => setOpenProfile(false)}
          className="fixed inset-0 bg-black/40 z-10"
        />
      )}

      {/* باکس پروفایل */}
      {openProfile && (
        <div className="absolute top-14 left-0 w-60 bg-white shadow-lg rounded-sm flex flex-col z-20">
          <button
            className="p-2 text-right bg-[#F6F8FA] text-[#0D0D0D] font-normal text-sm hover:bg-gray-100 rounded flex items-center gap-1.5"
            onClick={() => console.log("profile clicked")}
          >
            <div className="border border-[#606060] rounded-full p-2.5 bg-[#D9D9D940]">
              <User />
            </div>
            مدیر
          </button>

          <div className="w-full px-1.5">
            {list.map((item) => (
              <button
                key={item.id}
                className={`
                  px-1.5 w-full py-2 text-right border-b border-[#E0E0E2] 
                  bg-white font-normal text-sm hover:bg-[#E0E0E240] 
                  flex items-center gap-1.5
                  ${item.id === 6 ? "text-[#FF4646]" : "text-[#606060]"}
                `}
                onClick={() => {
                  setOpenProfile(false); // ← اول پنل پروفایل رو ببند
                  setSelectedItem(item); // ← بعد مودال رو باز کن
                }} // ← اینجا مودال باز میشه
              >
                <div>{item.icon}</div>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* مودال وسط صفحه */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-30 h-full w-full p-3 border">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSelectedItem(null)}
          ></div>

          {renderModalContent(selectedItem)}

          {/* <button
        onClick={() => setSelectedItem(null)}
        className="px-4 py-2 bg-gray-300 text-black rounded mt-5"
      >
        بستن
      </button> */}
        </div>
      )}
    </>
  );
}
