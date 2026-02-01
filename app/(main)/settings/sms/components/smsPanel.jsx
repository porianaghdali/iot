"use client";
import { useState } from "react";
import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";
import { setSmsPanel } from "../../../../api/fetchSms";

export default function SmsPanel() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    mode: "",
    senderNumber: "",
    senderAllSensor: "",
  });
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const serviceOptions = [
    { label: "SNMP", value: "SNMP" },
    { label: "Modbus", value: "Modbus" },
  ];

  function getTokenFromCookie(name) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)"),
    );
    if (match) return match[2];
    return null;
  }

  const handleSetSmsPanel = async () => {
    try {
      const token = getTokenFromCookie("token"); // اسم کوکی توکنت

      const response = await setSmsPanel({ formData, token });

      if (response?.errorCode === 0) {
        console.log(response);
      } else {
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="mx-auto bg-background-box max-w-[600px] p-4  flex flex-col gap-4">
        <p className="text-text-secondary text-base font-normal ">ثبت سرویس</p>
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="servicName"
                className="text-text-title text-sm font-normal"
              >
                نام سرویس
              </label>
              <div className="w-1/2">
                <CustomSelect
                  onChange={(e) => handleChange(["mode"], e.target.value)}
                  options={serviceOptions}
                  value={formData.mode}
                  placeholder="   انتخاب کنید"
                />{" "}
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="userName"
                className="text-text-title text-sm font-normal"
              >
                نام کاربری{" "}
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="userName"
                  placeholder="نام کاربری را وارد کنید"
                  name="userName"
                  value={formData.username}
                  onChange={(e) => handleChange(["username"], e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="password"
                className="text-text-title text-sm font-normal"
              >
                رمز کاربر
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="password"
                  placeholder="رمز عبور را وارد کنید"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(["password"], e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="senderNumber"
                className="text-text-title text-sm font-normal"
              >
                شماره فرسنده{" "}
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="senderNumber"
                  placeholder="شماره مورد نظر را وارد کنید"
                  name="senderNumber"
                  value={formData.senderNumber}
                  onChange={(e) =>
                    handleChange(["senderNumber"], e.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 ">
              <button onClick={handleSetSmsPanel} className="text-text-title text-sm font-normal py-2 px-3 rounded border border-border-muted ">
                تست ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-background-box max-w-[600px] p-4  flex flex-col gap-4 mt-1.5 mb-12">
        <p className="text-text-secondary text-base font-normal ">
          {" "}
          تست دستگاه
        </p>
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="deviceName"
                className="text-text-title text-sm font-normal"
              >
                نام دستگاه{" "}
              </label>
              <div className="flex gap-1.5 w-1/2 ">
                <CustomInput
                  id="deviceName"
                  placeholder="نام دستگاه را وارد کنید"
                  name="deviceName"
                  // value={formData.ip}
                  // onChange={(e) => handleChange(["ip"], e.target.value)}
                />
                <button className="text-text-title text-sm font-normal py-2 px-4 rounded border border-border-muted ">
                  تست{" "}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="deviceName"
                className="text-text-title text-sm font-normal"
              >
                نام دستگاه{" "}
              </label>
              <div className="flex gap-1.5 w-1/2 ">
                <CustomInput
                  id="deviceName"
                  placeholder="نام دستگاه را وارد کنید"
                  name="deviceName"
                  // value={formData.ip}
                  // onChange={(e) => handleChange(["ip"], e.target.value)}
                />
                <button className="text-text-title text-sm font-normal py-2 px-4 rounded border border-border-muted ">
                  تست{" "}
                </button>
              </div>
            </div>

            <div className=" mt-6  text-text-tertiary text-xs py-3.5 px-8 border border-border-muted rounded-[50px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
