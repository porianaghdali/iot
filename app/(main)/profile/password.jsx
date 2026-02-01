import Image from "next/image";
import CustomInput from "../../../components/ui/customInput";
export default function Password({ setSelectedItem }) {
  return (
    <div className="relative flex flex-col gap-3 p-1.5  w-full max-w-[570px] bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
      <div className="px-3 py-4 flex items-center gap-2 text-text-title text-base font-normal bg-background-modal-header rounded">
        <Image
          src="/images/icons/profile/password.svg"
          alt="lock"
          width={36}
          height={36}
        />
        <p>تغییر رمز</p>
      </div>
      <div>
        <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
          <label
            className="text-sm text-text-title font-normal"
            htmlFor="currentPassword"
          >
            رمز فعلی
          </label>
         
          <div className="w-[322px]">
            <CustomInput
              id="currentPassword"
              placeholder=" رمز فعلی خود را وارد کنید"
              name="currentPassword"
              // value={formData.ip}
              // onChange={(e) => handleChange(["ip"], e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
          <label
            className="text-sm text-text-title font-normal"
            htmlFor="newPassword"
          >
            رمز جدید
          </label>
        
          <div className="w-[322px]">
            <CustomInput
              id="newPassword"
              placeholder=" رمز جدید خود را وارد کنید"
              name="newPassword"
              // value={formData.ip}
              // onChange={(e) => handleChange(["ip"], e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
          <label
            className="text-sm text-text-title font-normal"
            htmlFor="repeatPassword"
          >
            تکرار رمز جدید{" "}
          </label>

          <div className="w-[322px]">
            <CustomInput
              id="repeatPassword"
              placeholder=" رمز جدید را تکرار کنید"
              name="repeatPassword"
              // value={formData.ip}
              // onChange={(e) => handleChange(["ip"], e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end px-3 py-5 gap-1">
          <button
            onClick={() => setSelectedItem(null)}
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
  );
}
