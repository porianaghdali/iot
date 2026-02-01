import { User } from "lucide-react";
import { useState } from "react";
import Manager from "./manager";
import Password from "./password";
import LoginHistory from "./loginHistory";
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
    switch (item) {
      //login history
      case 1:
        return <LoginHistory setSelectedItem={setSelectedItem}/>;
      //edit profile
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
      //change password
      case 3:
        return <Password setSelectedItem={setSelectedItem}/>;
      // two step auth
      case 4:
        return <p>فعال‌سازی ورود دو مرحله‌ای (OTP / Google Auth)…</p>;
      // help
      case 5:
        return <p>راهنمای استفاده از سامانه...</p>;
      // logout
      case 6:
        return (
          <div>
            <p>آیا از حساب کاربری خارج می‌شوید؟</p>
            <button className="bg-red-600 text-white mt-4 py-2 rounded">
              خروج
            </button>
          </div>
        );
      // profile
      case 7:
        return <Manager setSelectedItem={setSelectedItem}/>
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
        <div className="absolute top-14 left-0 w-60 bg-background-box shadow-lg rounded-sm flex flex-col z-20">
          <button
            className="p-2 text-right bg-background-modal-header text-text-title font-normal text-sm hover:bg-gray-100 rounded flex items-center gap-1.5"
            onClick={() => {
              setOpenProfile(false); // ← اول پنل پروفایل رو ببند
              setSelectedItem(7); // ← بعد مودال رو باز کن
            }}
          >
            <div className="border border-text-tertiary rounded-full p-2.5 bg-[#D9D9D940]">
              <User />
            </div>
            مدیر
          </button>

          <div className="w-full px-1.5">
            {list.map((item) => (
              <button
                key={item.id}
                className={`
                  px-1.5 w-full py-2 text-right  border-[#E0E0E2] 
                  bg-background-box font-normal text-sm hover:bg-[#E0E0E240] 
                  flex items-center gap-1.5
                  ${item.id === 6 ? "text-red" : "text-text-tertiary border-b"}
                `}
                onClick={() => {
                  setOpenProfile(false); // ← اول پنل پروفایل رو ببند
                  setSelectedItem(item.id); // ← بعد مودال رو باز کن
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

        
        </div>
      )}
    </>
  );
}
