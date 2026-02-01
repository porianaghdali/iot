import Image from "next/image";

export default function Token({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30 h-full w-full p-3 border">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative flex flex-col gap-3 p-1.5  w-full max-w-[570px] bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
            <div className="px-3 py-4 flex items-center gap-2 text-text-title text-base font-normal bg-background-modal-header rounded">
              <div className="p-2.5 bg-[#D9D9D940] rounded-full">
                <Image
                  src="/images/icons/settings/bot/token.svg"
                  alt="token"
                  width={36}
                  height={36}
                />
              </div>
              <p> ثبت توکن</p>
            </div>
            <div>
              <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
                <label
                  className="text-sm text-text-title font-normal"
                  htmlFor="platform"
                >
                  پلتفرم <span className="text-red-800">*</span>
                </label>
                <select
                  name="platform"
                  id="platform"
                  className="border border-border-muted p-2.5 rounded w-[322px]"
                >
                  <option value="انتخاب کنید">انتخاب کنید</option>
                </select>
              </div>
              <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
                <label
                  className="text-sm text-text-title font-normal"
                  htmlFor="tokenAddress"
                >
                  آدرس توکن <span className="text-red-800">*</span>
                </label>
                <textarea
                  name="tokenAddress"
                  id="tokenAddress"
                  className="border border-border-muted p-2.5 rounded w-[322px] h-20 "
                  style={{ resize: "none" }}
                  placeholder="رمز عبور را وارد کنید"
                  type="email"
                />
              </div>

              <div className="flex justify-end px-3 py-5 gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-center rounded border  py-2 w-24 text-sm font-normal text-text-title border-red bg-[#FF46460D]"
                >
                  انصراف{" "}
                </button>
                <button className="text-center rounded border  py-2 w-24 text-sm font-normal text-text-title border-green bg-[#20E0800D]">
                  ثبت{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
