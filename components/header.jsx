import { Bell, CircleQuestionMark, Menu, User } from "lucide-react";
import Image from "next/image";

export default function Header({ toggleSidebar }) {
  return (
    <div className="shadow-[0px_2px_4px_1px_#0000001F] h-16 bg-white p-4 flex justify-between relative z-10">
      <div className="flex items-center gap-6">
        <button onClick={toggleSidebar}>
          {" "}
          <Menu />
          
        </button>

        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" width={26} height={26} alt="logo" />
          <p className="text-[#0D0D0D] ffont-normal text-lg">پایش محیط سپهر</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#0D0D0D]">
        <button>
          <CircleQuestionMark strokeWidth={1.25} />
        </button>
        <button>
          <Bell strokeWidth={1.25} />
        </button>
        <button className="p-2.5 bg-[#D9D9D940] rounded-full">
          <User strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
}
