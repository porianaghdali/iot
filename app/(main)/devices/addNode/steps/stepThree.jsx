"use client";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import useMqtt from "@/hooks/useMqtt";
import { useRef, useState } from "react";

export default function StepThree({
  formData,
  sensorTypeList,
  handleChange,
  sensorData,
  setSensorData,
  handleAddSensors,sensorsState
}) {
  const [snmpResult, setSnmpResult] = useState(null);
  const [snmpStatus, setSnmpStatus] = useState("idle");
  const snmpStatusRef = useRef("idle");
  const setSnmpStatusSafe = (status) => {
    snmpStatusRef.current = status;
    setSnmpStatus(status);
  };
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();

  const handleSnmpPull = () => {
    if (!formData.ip) return;

    setSnmpStatusSafe("loading");

    const snmpPullTopic = `data/${formData.department || "default"}/${formData.zone || "default"}/node/${formData.sensor || "default"}/SNMP/pull`;

    const payload = {
      ip: formData.ip,
      oid: sensorData.oid || ".1.3.6.1.2.1.1.3.0",
      version: formData.config.version || null,
      authProtocol: formData.config.authProtocol || null,
      authUser: formData.config.authUser || null,
      authPass: formData.config.authPass || null,
      privProtocol: formData.config.privProtocol || "DES",
      privPass: formData.config.privPass || null,
      community: formData.config.community || null,
    };

    // subscribe به topic جواب SNMP
    const snmpTopic = `data/${formData.department || "+"}/${formData.zone || "+"}/node/${formData.sensor || "+"}/SNMP/+`;
    subscribe(snmpTopic);

    const handleMessage = (msg) => {
      if (msg.destinationName.includes("/SNMP")) {
        const result = msg.payloadString;
        if (result) {
          setSnmpStatusSafe("success");
          setSnmpResult(result);
          setSensorData((prev) => ({
            ...prev,
            mqttValue: result,
          }));
        } else {
          setSnmpStatusSafe("fail");
          setSnmpResult(null);
        }
      }
    };

    onMessage(handleMessage);

    // publish
    publish(snmpPullTopic, JSON.stringify(payload));

    // timeout برای جلوگیری از stuck شدن
    setTimeout(() => {
      if (snmpStatusRef.current === "loading") setSnmpStatusSafe("fail");
      offMessage(handleMessage); // cleanup بعد از timeout
    }, 5000);
  };
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
          value={sensorData.sensorName}
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
            onClick={() => setSensorData((prev) => ({ ...prev, active: true }))}
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
          <button
            onClick={handleSnmpPull}
            className="border border-border-muted w-2/3 p-2.5 rounded bg-[#C1C1C133]"
          >
            تست اتصال
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 ">
        <button
          onClick={handleAddSensors}
          className="border border-border-muted w-full p-2.5 rounded bg-[#C1C1C133]"
        >
          ثبت سنسور{" "}
        </button>
      </div>
      {snmpStatus !== "idle" && (
        <div className="text-sm mt-1">
          {snmpStatus === "loading" && "⏳ در حال دریافت داده SNMP..."}
          {snmpStatus === "success" && `✅ نتیجه: ${snmpResult}`}
          {snmpStatus === "fail" && "❌ دریافت داده SNMP ناموفق بود"}
        </div>
      )}
    </div>
  );
}
