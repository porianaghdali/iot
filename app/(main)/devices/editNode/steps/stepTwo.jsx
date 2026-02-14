"use client";
import { useRef, useState } from "react";
import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";
import useMqtt from "@/hooks/useMqtt";

export default function StepTwo({ formData, handleChange }) {
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
      oid: formData.config.oid || ".1.3.6.1.2.1.1.3.0",
      version: formData.config.version || null,
      authProtocol: formData.config.authProtocol || null,
      authUser: formData.config.authUser || null,
      authPass: formData.config.authPass || null,
      privProtocol: formData.config.privProtocol || "DES",
      privPass: formData.config.privPass || null,
      community: formData.config.community || null,
    };
    const test = {
      ip: "192.168.41.20",
      oid: ".1.3.6.1.2.1.1.3.0",
      version: 3,
      authProtocol: "MD5",
      authUser: "administrator",
      authPass: "authkey1",
      privProtocol: "DES",
      privPass: "privkey1",
      community: null,
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

  const protocolOptions = [
    { label: "SNMP", value: "SNMP" },
    { label: "Modbus", value: "Modbus" },
  ];
  const versionOptions = {
    SNMP: [
      { label: "ورژن ۱", value: 1 },
      { label: "ورژن ۲", value: 2 },
      { label: "ورژن ۳", value: 3 },
    ],
    Modbus: [
      { label: "UDP", value: "UDP" },
      { label: "TCP", value: "TCP" },
    ],
  };

  return (
    <div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">پروتکل</label>
        <CustomSelect
          options={protocolOptions}
          value={formData.protocol}
          placeholder=" پروتکل را انتخاب کنید"
          onChange={(e) => {
            handleChange(["protocol"], e.target.value);
            handleChange(["config", "version"], "");
          }}
        />
      </div>

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          {formData.protocol == "SNMP" ? "ورژن" : "نوع اتصال"}
        </label>
        <CustomSelect
          options={formData.protocol ? versionOptions[formData.protocol] : []}
          value={formData.config.version}
          placeholder={
            formData.protocol === "SNMP"
              ? " ورژن را انتخاب کنید"
              : "نوع اتصال را انتخاب کنید"
          }
          onChange={(e) => handleChange(["config", "version"], e.target.value)}
        />
      </div>
      {(formData.config.version == 2 ||
        formData.config.version == 1) && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal">
            Community{" "}
          </label>
          <CustomInput
            id="community"
            name="community"
            placeholder="Community را وارد کنید"
            value={formData.config.community}
            onChange={(e) =>
              handleChange(["config", "community"], e.target.value)
            }
          />
        </div>
      )}
      {formData.config.version === 3 && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
          <label className="text-text-title text-sm font-normal">
            نام کاربری
          </label>
          <CustomInput
            id="authUser"
            placeholder="نام کاربری را وارد کنید"
            name="authUser"
            value={formData.config.authUser}
            onChange={(e) =>
              handleChange(["config", "authUser"], e.target.value)
            }
          />
        </div>
      )}
      {formData.config.version === 3 && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
          <label className="text-text-title text-sm font-normal">
            {" "}
            کلید احراز هویت
          </label>
          <div className="flex gap-1 w-full max-w-[372px]">
            <CustomInput
              id="authPass"
              placeholder="کلید احراز هویت را وارد کنید"
              name="authPass"
              value={formData.config.authPass}
              onChange={(e) =>
                handleChange(["config", "authPass"], e.target.value)
              }
            />
            <button
              value="SHAI"
              onClick={(e) =>
                handleChange(["config", "authProtocol"], e.target.value)
              }
              className="border border-border-muted p-2.5 w-1/5 rounded bg-[#C1C1C133]"
            >
              SHAI
            </button>
            <button
              value="MD5"
              onClick={(e) =>
                handleChange(["config", "authProtocol"], e.target.value)
              }
              className="border border-border-muted p-2.5 w-1/5 rounded bg-[#C1C1C133]"
            >
              MD5
            </button>
          </div>
        </div>
      )}
      {formData.config.version === 3 && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
          <label className="text-text-title text-sm font-normal">
            {" "}
            کلید رمز نگاری{" "}
          </label>
          <div className="flex gap-1 w-full max-w-[372px]">
            <CustomInput
              placeholder="کلید رمز نگاری را وارد کنید"
              id="privPass"
              name="privPass"
              value={formData.config.privPass}
              onChange={(e) =>
                handleChange(["config", "privPass"], e.target.value)
              }
            />
            <button
              value="AES"
              onClick={(e) =>
                handleChange(["config", "privPass"], e.target.value)
              }
              className="border border-border-muted w-1/5 p-2.5 rounded bg-[#C1C1C133]"
            >
              AES
            </button>
            <button
              value="DES"
              onClick={(e) =>
                handleChange(["config", "privPass"], e.target.value)
              }
              className="border border-border-muted w-1/5 p-2.5 rounded bg-[#C1C1C133]"
            >
              DES
            </button>
          </div>
        </div>
      )}
      {formData.protocol === "Modbus" && (
        <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
          <label className="text-text-title text-sm font-normal"> Port </label>
          <div className="flex gap-1 w-full max-w-[372px]">
            <CustomInput
              id="port"
              placeholder="port  را وارد کنید"
              name="port"
              dir="ltr"
              textAlign="left"
              value={formData.config.port}
              onChange={(e) => handleChange(["config", "port"], e.target.value)}
            />
          </div>
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
              value={formData.config.slaveID}
              onChange={(e) =>
                handleChange(["config", "slaveID"], e.target.value)
              }
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          زمان نمونه گیری
        </label>
        <div className="flex gap-1 w-full max-w-[372px] items-center">
          <div className="max-w-50">
            <CustomInput
              id="interval"
              name="interval"
              placeholder="زمان نمونه گیری را وارد کنید"
              value={formData.interval}
              onChange={(e) => handleChange(["interval"], e.target.value)}
            />
          </div>
          <p className="text-text-tertiary text-sm font-normal">ثانیه</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">تست اتصال</label>
        <div className="flex gap-1 w-full max-w-[372px] items-center justify-end">
          <button
            onClick={handleSnmpPull}
            className="border border-border-muted w-3/5 p-2.5 rounded bg-[#C1C1C133]"
          >
            تست
          </button>
        </div>
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
