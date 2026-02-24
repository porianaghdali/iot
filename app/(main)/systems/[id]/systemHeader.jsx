"use client";

export default function SystemHeader({ setIsOpen, setSelected, selected }) {
  const list = [
    { id: 1, title: "  مشخصات" },
    { id: 2, title: "  منابع" },
    { id: 3, title: "   OID" },
    { id: 4, title: "   برنامه‌ها" },
    { id: 5, title: "   سرویس‌ها" },
    { id: 6, title: "   لاگ" },
    { id: 7, title: "   سخت افزار" },
    { id: 8, title: "   منبع تغذیه" },
  ];

  return (
    <>
      <div className="p-4 flex justify-between items-center w-full  bg-background-box">
        <p className="font-normal text-lg text-text-title  ">نام سیستم</p>
        <button
          onClick={() => setIsOpen(true)}
          className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center"
        >
          تعریف هشدار
        </button>
      </div>
      <div
        className="p-4 pb-0 flex gap-6 items-center w-full font-normal text-sm text-text-title sticky top-0  bg-background-box z-10 "
        style={{ borderBottom: " 1px solid rgba(0, 0, 0, 0.2)" }}
      >
        {list.map((item) => {
          return (
            <button
              onClick={() => setSelected(item.id)}
              key={item.id}
              className={
                selected === item.id
                  ? "border-b-2 pb-4 border-text-secondary "
                  : "border-b-2 pb-4 border-transparent"
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </>
  );
}
