"use client";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import useMqtt from "@/hooks/useMqtt";
import { useRef, useState } from "react";
import { useSensors } from "@/hooks/useSensors";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { useEffect, useMemo } from "react";
export default function StepThree({
  formData,
  handleChange,
  sensorData,
  setSensorData,
  handleAddSensors,
  isEditing, // ⭐ اضافه
}) {
  const token = useMemo(() => getTokenFromCookie("token"), []);
  const { getTypes, sensorTypes } = useSensors(token, formData.ID);

  useEffect(() => {
    getTypes();
  }, []);
  const [snmpResult, setSnmpResult] = useState(null);
  const [snmpStatus, setSnmpStatus] = useState("idle");
  const snmpStatusRef = useRef("idle");
  const setSnmpStatusSafe = (status) => {
    snmpStatusRef.current = status;
    setSnmpStatus(status);
  };
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();
const getLengthFromDataType = (type) => {
  switch (type) {
    case "Float 64-bit (8 Bytes)":
      return 4;

    case "Float 32-bit (4 Bytes)":
    case "Unsigned 32-bit (4 Bytes)":
    case "Signed 32-bit (4 Bytes)":
      return 2;

    case "Unsigned 16-bit (2 Bytes)":
    case "Signed 16-bit (2 Bytes)":
    case "Hex (2 Byte)":
      return 1;

    case "Boolean (1 Bit)":
    case "Unsigned 8-bit (1 Byte)":
    case "Signed 8-bit (1 Byte)":
      return 1;

    default:
      return 1;
  }
};
 const handlePull = () => {
  if (!formData.ip) return;

  const protocol = formData.protocol || "SNMP";
  setSnmpStatusSafe("loading");

  const pullTopic = `data/${formData.department || "default"}/${formData.zone || "default"}/node/${formData.sensor || "default"}/${protocol}/pull`;

  const responseTopic = `data/${formData.department || "+"}/${formData.zone || "+"}/node/${formData.sensor || "+"}/${protocol}/+`;

  subscribe(responseTopic);

  const handleMessage = (msg) => {
if (
  msg.destinationName.includes(`/${protocol}/get`) ||
  msg.destinationName.includes(`/${protocol}/alert`)
) {      const result = msg.payloadString.trim();

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

  // ======================
  // 🔵 Payload بر اساس پروتکل
  // ======================

  let payload = {};

  // 🟢 SNMP
  if (protocol === "SNMP") {
    payload = {
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
  }

  // 🔴 Modbus  ← از فرم sensorData
if (protocol === "Modbus") {
  payload = {
    "ip": formData.ip,
    "port": Number(formData.config.port) || 502,
    "slaveID": Number(sensorData.slaveID) || 1,
    "dataAddress": Number(sensorData.dataAddress),
    "length": getLengthFromDataType(sensorData.dataType),
    "dataType": sensorData.dataType,
    "timeout": 5,
    "protocol": formData.config.version || "TCP",
    "MB_Addresstype": sensorData.MB_Addresstype || "Register",
  };
}
  publish(pullTopic, JSON.stringify(payload));

  setTimeout(() => {
    if (snmpStatusRef.current === "loading") {
      setSnmpStatusSafe("fail");
    }
    offMessage(handleMessage);
  }, 5000);
};
  const handleSensorTypeChange = (e) => {
    const value = e.target.value;

    const sensor = sensorTypes.find((item) => item.type === value);
    if (!sensor) return;

    setSensorData((prev) => ({
      ...prev,
      node: formData.ID,
      type: value,
      oid: sensor.oid,
    }));
  };
  const sensorOptions = sensorTypes.map((item) => ({
    label: item.name,
    value: item.type,
  }));
  const dataType = [
    { label: "Hex (2 Byte)", value: "Hex (2 Byte)" },
    { label: "Unsigned 8-bit (1 Byte)", value: "Unsigned 8-bit (1 Byte)" },
    { label: "Boolean (1 Bit)", value: "Boolean (1 Bit)" },
    { label: "Signed 8-bit (1 Byte)", value: "Signed 8-bit (1 Byte)" },
    { label: "Unsigned 16-bit (2 Bytes)", value: "Unsigned 16-bit (2 Bytes)" },
    { label: "Signed 16-bit (2 Bytes)", value: "Signed 16-bit (2 Bytes)" },
    { label: "Unsigned 32-bit (4 Bytes)", value: "Unsigned 32-bit (4 Bytes)" },
    { label: "Signed 32-bit (4 Bytes)", value: "Signed 32-bit (4 Bytes)" },
    { label: "Float 32-bit (4 Bytes)", value: "Float 32-bit (4 Bytes)" },
    { label: "Float 64-bit (8 Bytes)", value: "Float 64-bit (8 Bytes)" },
    { label: "String (1 Byte per char)", value: "String (1 Byte per char)" },
  ];
  const MBAddresstype = [
    { label: "Coil", value: "Coil" },
    { label: "InputDiscrete", value: "InputDiscrete" },
    { label: "Register", value: "Register" },
  ];

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
      {formData.protocol == "SNMP" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal ">OID </label>

          <CustomInput
            id="OID"
            name="oid"
            dir="ltr"
            textAlign=""
            value={sensorData.oid}
          />
        </div>
      )}

      {formData.protocol == "Modbus" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal">
            {" "}
            Data Type{" "}
          </label>

          <CustomSelect
            options={dataType}
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
            MB_Addresstype
          </label>

          <CustomSelect
            options={MBAddresstype}
            value={sensorData.MB_Addresstype}
            onChange={(e) =>
              setSensorData((prev) => ({
                ...prev,
                MB_Addresstype: e.target.value,
              }))
            }
            placeholder="MB_Addresstype   را انتخاب کنید"
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
      {formData.protocol === "Modbus" && (
              <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
                <label className="text-text-title text-sm font-normal"> SLAVE </label>
                <div className="flex gap-1 w-full max-w-[372px]">
                  <CustomInput
                    id="slaveID"
                    placeholder=" slaveID را وارد کنید"
                    name="slaveID"
                    value={sensorData.slaveID}
                    onChange={handleChange}
                    format="number"
                  />
                </div>
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
              setSensorData((prev) => ({ ...prev, historySave: 1 }))
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
              setSensorData((prev) => ({ ...prev, historySave: 0 }))
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
            onClick={() => setSensorData((prev) => ({ ...prev, active: 1 }))}
            className={
              sensorData.active
                ? "border  w-1/3 p-2.5 rounded border-green bg-[#20E0800D]"
                : "border border-border-muted w-1/3 p-2.5 rounded bg-[#C1C1C133]"
            }
          >
            فعال
          </button>
          <button
            onClick={() => setSensorData((prev) => ({ ...prev, active: 0 }))}
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
            onClick={handlePull}
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
          {isEditing ? "ویرایش سنسور" : "ثبت سنسور"}
        </button>
      </div>
     {snmpStatus !== "idle" && (
  <div className="text-sm mt-1">
    {snmpStatus === "loading" &&
      `⏳ در حال دریافت داده ${formData.protocol || ""}...`}

    {snmpStatus === "success" &&
      `✅ نتیجه (${formData.protocol || ""}): ${snmpResult}`}

    {snmpStatus === "fail" &&
      `❌ دریافت داده ${formData.protocol || ""} ناموفق بود`}
  </div>
)}
    </div>
  );
}
