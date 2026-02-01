import Image from "next/image";

export default function Create() {
  return (
    <div className="bg-background-box rounded-xs px-3 py-3.5 flex justify-between w-72 h-fit">
      <div className="w-full h-full border border-dashed border-[#0000001A] rounded-md py-3 flex flex-col items-center gap-2">
        <Image
          src="/images/create.png"
          width={155}
          height={154}
          alt="create"
          className=" "
        />
        <div className="grid gap-2 ">
          <p className="text-sm font-normal text-text-tertiary text-center">
            ابزارک خودت رو بساز
          </p>
          <button className="text-background-box w-full text-sm font-normal bg-text-title rounded-[50px] py-1.5 mx-auto px-3">
            ساخت ابزارک
          </button>
        </div>
      </div>
    </div>
  );
}
