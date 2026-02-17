"use client";

import { useState } from "react";
import CustomInput from "../../../../components/ui/customInput";
import Image from "next/image";
import CustomSelect from "../../../../components/ui/customSelect";
import { X } from "lucide-react";

export default function AddZoneModal({ open, closeCreateModal }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#0D0D0D26] z-0"
        onClick={closeCreateModal}
      />

      <div className="relative flex flex-col gap-3 p-1.5  w-full max-w-[570px] bg-background-box shadow-[0px_0px_12px_2px_#00000014]  rounded text-center">
        <button onClick={closeCreateModal} className=" absolute top-3 left-3 border rounded-full p-1">
          <X size={18}/>
        </button>
        <div className="px-3 py-4 flex items-center gap-2 text-text-title text-base font-normal bg-background-modal-header rounded">
          <Image
            src="/images/icons/profile/password.svg"
            alt="lock"
            width={36}
            height={36}
          />
          <p> ناحیه جدید</p>
        </div>
        <div>
          <div className="flex justify-between items-center px-3 py-3.5 border-b-2 border-background-table-header">
            <label
              className="text-sm text-text-title font-normal"
              htmlFor="currentPassword"
            >
              نام{" "}
            </label>

            <div className="w-[322px]">
              <CustomInput
                id="currentPassword"
                placeholder="نام ناحیه مورد نظر را وارد کنید"
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
              نوع ناحیه
            </label>

            <div className="w-[322px]">
              <CustomSelect
                // options={zoneOptions}
                // value={formData.zone}
                // onChange={(e) => handleChange(["zone"], e.target.value)}
                placeholder="ناحیه را انتخاب کنید"
              />
            </div>
          </div>

          <div className="flex justify-end px-3 py-5 gap-1">
           
            <button className="text-center rounded border  py-2 w-24 text-sm font-normal text-text-title border-green bg-[#20E0800D]">
              ثبت{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
