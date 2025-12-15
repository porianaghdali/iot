import { User } from "lucide-react";




export default function Manager() {
   return (
          <div className="relative flex flex-col gap-3 p-1.5  w-full max-w-[570px] bg-white shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
            <div className="px-3 py-4 flex items-center gap-2 text-[#0D0D0D] text-base font-normal bg-[#F6F8FA] rounded">
              <div
                className="p-2.5 bg-[#D9D9D940] rounded-full"
              >
                <User strokeWidth={1.25} />
              </div>
              <p> مدیر</p>
            </div>
            <div>
              <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-[#F4F4F4]">
                <label
                  className="text-sm text-[#0D0D0D] font-normal"
                  htmlFor="name"
                >
                  نام{" "}
                </label>
                <input
                  name="name"
                  id="name"
                  className="border border-[#C1C1C1] p-2.5 rounded w-[322px]"
                  placeholder="مدیر"
                  type="text"
                />
              </div>
              <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-[#F4F4F4]">
                <label
                  className="text-sm text-[#0D0D0D] font-normal"
                  htmlFor="email"
                >
                  ایمیل{" "}
                </label>
                <input
                  name="email"
                  id="email"
                  className="border border-[#C1C1C1] p-2.5 rounded w-[322px]"
                  placeholder="Admin@info.com"
                  type="email"
                />
              </div>
              <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-[#F4F4F4]">
                <label
                  className="text-sm text-[#0D0D0D] font-normal"
                  htmlFor="mobileNumber"
                >
                  تلفن همراه
                </label>
                <input
                  name="mobileNumber"
                  id="mobileNumber"
                  className="border border-[#C1C1C1] p-2.5 rounded w-[322px]"
                  placeholder="09128502020"
                  type="text"
                />
              </div>
              <div className="flex justify-end px-3 py-5 gap-1">
                <button className="text-center rounded border  py-2 w-24 text-sm font-normal text-[#0D0D0D] border-[#FF4646] bg-[#FF46460D]">
                  انصراف{" "}
                </button>
                <button className="text-center rounded border  py-2 w-24 text-sm font-normal text-[#0D0D0D] border-[#20E080] bg-[#20E0800D]">
                  ثبت{" "}
                </button>
              </div>
            </div>
          </div>
        );
}