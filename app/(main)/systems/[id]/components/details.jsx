export default function Details() {
  const list = [
    { title: "مشخصات سیستم", value: "Test SNMP String", id: 1 },
    { title: "نام شبکه", value: "Test SNMP String", id: 2 },
    { title: "زمان روشن بودن", value: "Test SNMP String", id: 3 },
    { title: "آدرس شبکه (IP)", value: "192.198.1.1", id: 4 },
    { title: "پینگ دستگاه", value: "22 ms", id: 5 },
  ];
  return (
    <div className="w-full flex flex-col gap-1.5 p-4">
      <div className="bg-white rounded p-3 w-full flex flex-col gap-4">
        <p className="text-text-title text-sm font-normal">
          اطلاعات سخت افزاری
        </p>
        <div className="flex flex-col gap-2.5">
          {list.map((item) => {
            return (
              <div className="grid grid-cols-4" key={item.id}>
                <p className="col-span-1 text-text-tertiary text-xs">
                  {item.title}
                </p>
                <p className="col-span-3 text-text-title text-xs">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded p-3 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-text-title text-sm font-normal">اطلاعات شبکه </p>{" "}
          <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
            ویرایش
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          {list.map((item) => {
            return (
              <div className="grid grid-cols-4" key={item.id}>
                <p className="col-span-1 text-text-tertiary text-xs">
                  {item.title}
                </p>
                <p className="col-span-3 text-text-title text-xs">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded p-3 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-text-title text-sm font-normal">اطلاعات امنیتی </p>{" "}
          <div className="flex gap-1.5 items-center">
            <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
              تست دستگاه
            </button>
            <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
              ویرایش
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {list.map((item) => {
            return (
              <div className="grid grid-cols-4" key={item.id}>
                <p className="col-span-1 text-text-tertiary text-xs">
                  {item.title}
                </p>
                <p className="col-span-3 text-text-title text-xs">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
