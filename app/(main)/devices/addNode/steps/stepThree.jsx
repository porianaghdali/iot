"use client";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import { setSensor } from "../../../../api/fetchSensor";
import { getTokenFromCookie } from "@/utils/functions/auth.js";

export default function StepThree({ formData, sensorTypeList,handleChange,sensorData,setSensorData,handleSetSensor }) {

  const handleSensorTypeChange = (e) => {
    const value = e.target.value;

    const sensor = sensorTypeList.find((item) => item.type === value);
    if (!sensor) return;

    setSensorData((prev) => ({
      ...prev,
      type: value,
      oid: sensor.oid,
    }));
  };
  const sensorOptions = sensorTypeList.map((item) => ({
    label: item.type,
    value: item.type,
  }));


  
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          {" "}
          اسم سنسور
        </label>

        <CustomInput
          id="sensorName"
          name="sensorName"
          placeholder="اسم سنسور را وارد کنید"
          value={sensorData.sensorName }
          onChange={handleChange}
        />
      </div>
      {formData.protocol == "SNMP" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal ">OID </label>

          <CustomInput
            id="OID"
            name="oid"
            dir="ltr"
            textAlign=""
            value={sensorData.oid}
            readOnly
          />
        </div>
      )}

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          نوع سنسور{" "}
        </label>

        <CustomSelect
          options={sensorOptions}
          value={sensorData.type}
          onChange={handleSensorTypeChange}
          placeholder="نوع سنسور را انتخاب کنید"
        />
      </div>
      {formData.protocol == "Modbus" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal">
            {" "}
            Data Type{" "}
          </label>

          <CustomSelect
            options={sensorOptions}
            value={sensorData.dataType}
            onChange={(e) =>
              setSensorData((prev) => ({
                ...prev,
                dataType: e.target.value,
              }))
            }
            placeholder="Data Type  را انتخاب کنید"
          />
        </div>
      )}
      {formData.protocol == "Modbus" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal">
            {" "}
            Data Address
          </label>

          <CustomInput
            id="dataAddress"
            name="dataAddress"
            placeholder="Data Address را وارد کنید"
            value={sensorData.dataAddress}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          {" "}
          ذخیره سابقه
        </label>
        <div className="flex gap-1 w-full max-w-[372px] items-center justify-end">
          <button
            onClick={() =>
              setSensorData((prev) => ({ ...prev, historySave: true }))
            }
            className={
              sensorData.historySave
                ? "border  w-1/3 p-2.5 rounded border-green bg-[#20E0800D]"
                : "border border-border-muted w-1/3 p-2.5 rounded bg-[#C1C1C133]"
            }
          >
            فعال
          </button>
          <button
            onClick={() =>
              setSensorData((prev) => ({ ...prev, historySave: false }))
            }
            className={
              sensorData.historySave
                ? "border border-border-muted w-1/3 p-2.5 rounded bg-[#C1C1C133]"
                : "border  w-1/3 p-2.5 rounded  border-red bg-[#FF46460D]"
            }
          >
            غیر فعال
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal"> وضعیت </label>
        <div className="flex gap-1 w-full max-w-[372px] items-center justify-end">
          <button
            onClick={() =>
              setSensorData((prev) => ({ ...prev, active: true }))
            }
            className={
              sensorData.active
                ? "border  w-1/3 p-2.5 rounded border-green bg-[#20E0800D]"
                : "border border-border-muted w-1/3 p-2.5 rounded bg-[#C1C1C133]"
            }
          >
            فعال
          </button>
          <button
            onClick={() =>
              setSensorData((prev) => ({ ...prev, active: false }))
            }
            className={
              sensorData.active
                ? "border border-border-muted w-1/3 p-2.5 rounded bg-[#C1C1C133]"
                : "border  w-1/3 p-2.5 rounded  border-red bg-[#FF46460D]"
            }
          >
            غیر فعال
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          {" "}
          دریافت اطلاعات{" "}
        </label>
        <div className="flex gap-1 w-full max-w-[372px] items-center justify-end">
          <button className="border border-border-muted w-2/3 p-2.5 rounded bg-[#C1C1C133]">
            تست اتصال
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 ">
        <button onClick={handleSetSensor}
          className="border border-border-muted w-full p-2.5 rounded bg-[#C1C1C133]"
        >
          ثبت سنسور{" "}
        </button>
      </div>
    </div>
  );
}
