import Image from "next/image";

export default function Header({ step, setStep }) {
  const list = [
    { title: "مشخصات", id: 1 },
    { title: "روش اتصال", id: 2 },
    { title: "سنسورها", id: 3 },
  ];
  return (
    <div className="flex flex-col relative">
      <div className="flex gap-2 items-center mb-2">
        <Image src="/Images/icons/iot.svg" alt="alt" width={36} height={36} />
        <p className="text-text-title text-xl font-normal"> ویرایش دستگاه</p>
      </div>
      <div className="flex justify-center gap-2">
        {list.map((item) => {
          return (
            <button
              onClick={() => {
                setStep(item.id);
              }}
              key={item.id}
              type=""
              className={
                step != item.id
                  ? "py-2 px-12 rounded-[50px] border bg-[#C1C1C11A] border-border-muted text-sm text-[#0D0D0D80] font-normal"
                  : "py-2 px-12 rounded-[50px] border bg-[#599DE81A] border-blue text-sm text-text-title font-normal"
              }
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
