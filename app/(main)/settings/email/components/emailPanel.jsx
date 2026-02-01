"use client";
import { useState } from "react";
import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";

export default function EmailPanel() {
  const [formData, setFormData] = useState({
    senderEmail: "senderEmail",
    senderHost: "senderHost",
    senderUsername: "senderUsername",
    senderPassword: "senderPassword",
    smtpPort: "smtpPort",
    secure: "secure",
  });
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <>
      <div className="mx-auto bg-background-box max-w-[600px] p-4  flex flex-col gap-4">
        <p className="text-text-secondary text-base font-normal ">
          {" "}
          شماره‌های ثبت شده
        </p>
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="email"
                className="text-text-title text-sm font-normal"
              >
                ایمیل فرسنده{" "}
              </label>

              <div className=" w-1/2">
                <CustomInput
                  id="email"
                  name="email"
                  value={formData.senderEmail}
                  onChange={(e) => handleChange("senderEmail", e.target.value)}
                  placeholder=" ایمیل را وارد کنید"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="userName"
                className="text-text-title text-sm font-normal"
              >
                نام کاربری{" "}
              </label>

              <div className=" w-1/2">
                <CustomInput
                  id="senderUsername"
                  name="senderUsername"
                  value={formData.senderUsername}
                  onChange={(e) =>
                    handleChange("senderUsername", e.target.value)
                  }
                  placeholder="نام کاربری را وارد کنید"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="port"
                className="text-text-title text-sm font-normal"
              >
                پورت SMTP{" "}
              </label>

              <div className=" w-1/2">
                <CustomInput
                  id="smtpPort"
                  name="smtpPort"
                  value={formData.smtpPort}
                  onChange={(e) => handleChange("smtpPort", e.target.value)}
                  placeholder=" پورت را وارد کنید"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="server"
                className="text-text-title text-sm font-normal"
              >
                سرور ایمیل
              </label>

              <div className=" w-1/2">
                <CustomInput
                  id="senderHost"
                  name="senderHost"
                  value={formData.senderHost}
                  onChange={(e) => handleChange("senderHost", e.target.value)}
                  placeholder="سرور ایمیل مورد نظر را وارد کنید"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="password"
                className="text-text-title text-sm font-normal"
              >
                رمز ایمیل{" "}
              </label>

              <div className=" w-1/2">
                <CustomInput
                  value={formData.senderPassword}
                  onChange={(e) =>
                    handleChange("senderPassword", e.target.value)
                  }
                  id="senderPassword"
                  name="senderPassword"
                  className
                  placeholder=" رمز ایمیل مورد نظر را وارد کنید"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="serviceType"
                className="text-text-title text-sm font-normal"
              >
                نوع سرویس{" "}
              </label>
              <div className=" w-1/2">
                <CustomSelect />
              </div>
            </div>
            <div className="flex justify-end mt-6 ">
              <button className="text-text-title text-sm font-normal py-2 px-3 rounded border border-border-muted ">
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
                  name="deviceName"
                  className
                  placeholder="نام دستگاه را وارد کنید"
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
                  name="deviceName"
                  className
                  placeholder="نام دستگاه را وارد کنید"
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
