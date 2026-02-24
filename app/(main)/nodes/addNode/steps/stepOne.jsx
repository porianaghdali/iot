"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";
import useMqtt from "@/hooks/useMqtt";
import { useZones } from "@/hooks/useZones";
import { getTokenFromCookie } from "@/utils/functions/auth";

export default function StepOne({ formData, handleChange }) {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  /* ---------------- ZONES ---------------- */

  const { zones, getZonesList } = useZones(token);

  useEffect(() => {
    getZonesList();
  }, []);
  const zoneOptions = zones.map((z) => ({
    label: z.zoneName,
    value: z.ID,
  }));
  /* ---------------- MQTT ---------------- */
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();
  const [pingStatus, setPingStatus] = useState("idle");
  const [latency, setLatency] = useState(null);
  const macStatusRef = useRef("idle");
  const randomNodeRef = useRef(null);
  /* ---------------- HELPERS ---------------- */
  const setMacStatusSafe = (status) => {
    macStatusRef.current = status;
  };
  const pingStatusRef = useRef("idle");
  const setPingStatusSafe = (status) => {
    pingStatusRef.current = status;
    setPingStatus(status);
  };
  useEffect(() => {
    randomNodeRef.current = "node-" + Math.random().toString(36).slice(2, 8);
  }, []);
  // subscribe به topic جواب ping
  useEffect(() => {
    if (!connected || !randomNodeRef.current) return;

    const pingTopic = `data/${formData.department || "+"}/${formData.zone || "+"}/${randomNodeRef.current}/${formData.sensor || "+"}/Network/ping/+`;

    subscribe(pingTopic);

    const handleMessage = (msg) => {
      if (msg.destinationName.includes("/ping")) {
        const result = msg.payloadString;

        if (result.includes("ms")) {
          setPingStatusSafe("success");
          setLatency(result);
        } else {
          setLatency(null);
        }
      }
    };

    onMessage(handleMessage);

    return () => {
      offMessage(handleMessage);
    };
  }, [connected, formData.department, formData.zone, formData.sensor]);

  const handlePing = () => {
    if (!formData.ip) return;

    setPingStatusSafe("loading");

    const pingPullTopic = `data/${formData.department || "default"}/${formData.zone || "default"}/${randomNodeRef.current}/${formData.sensor || "default"}/Network/ping/pull`;
    // data/{department}/{zone}/"node"/{sensor}/Network/ping/pull
    const payload = JSON.stringify({
      ip: formData.ip,
      count: 1,
      wait: 1000,
    });

    publish(pingPullTopic, payload);

    // timeout برای جلوگیری از stuck شدن
    setTimeout(() => {
      if (pingStatusRef.current === "loading") {
        setPingStatusSafe("fail");
      }
    }, 5000);
  };

  const handleMacPull = () => {
    if (!formData.ip) return;

    setMacStatusSafe("loading");

    const arpPullTopic = `data/${formData.department || "default"}/${formData.zone || "default"}/node/${formData.sensor || "default"}/Network/arp/pull`;
    const payload = JSON.stringify({ ip: formData.ip });

    // subscribe به topic جواب arp
    const arpTopic = `data/${formData.department || "+"}/${formData.zone || "+"}/node/${formData.sensor || "+"}/Network/arp/+`;
    subscribe(arpTopic);

    const handleMessage = (msg) => {
      if (msg.destinationName.includes("/arp")) {
        const result = msg.payloadString;
        if (result) {
          setMacStatusSafe("success");
          handleChange(["mac"], result); // update فرم هم
        } else {
          setMacStatusSafe("fail");
        }
      }
    };

    onMessage(handleMessage);

    // publish
    publish(arpPullTopic, payload);

    // timeout برای جلوگیری از stuck شدن
    setTimeout(() => {
      if (macStatusRef.current === "loading") setMacStatusSafe("fail");
      offMessage(handleMessage); // cleanup بعد از timeout
    }, 5000);
  };
  return (
    <div className="space-y-4">
      {/* Device Name */}
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          نام دستگاه
        </label>
        <CustomInput
          placeholder="نام دستگاه را وارد کنید"
          id="deviceName"
          name="deviceName"
          value={formData.deviceName}
          onChange={(e) => handleChange(["deviceName"], e.target.value)}
        />
      </div>

      {/* IP */}
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">IP</label>
        <CustomInput
          id="ip"
          placeholder="IP دستگاه را وارد کنید"
          name="ip"
          textAlign="left"
          dir="ltr"
          value={formData.ip}
          onChange={(e) => handleChange(["ip"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
        <label className="text-text-title text-sm font-normal"> MAC</label>
        <div className="flex gap-1 w-full max-w-[372px]">
          <CustomInput
            id="mac"
            name="mac"
            placeholder="آدرس MAC خود را وارد کنید"
            value={formData.mac}
            onChange={(e) => {
              handleChange(["mac"], e.target.value);
            }}
          />
          <button
            onClick={handleMacPull}
            className="border border-border-muted p-2.5 rounded bg-[#C1C1C133]"
          >
            MAC
          </button>
        </div>
      </div>

      {/* Zone */}
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">ناحیه</label>
        <CustomSelect
          options={zoneOptions}
          value={formData.zone}
          onChange={(e) => handleChange(["zone"], e.target.value)}
          placeholder="ناحیه را انتخاب کنید"
        />
      </div>

      {/* تست اتصال */}
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">تست اتصال</label>
        <div className="flex gap-1 w-full max-w-[372px] items-center justify-end">
          <button
            onClick={handlePing}
            className="border border-border-muted w-3/5 p-2.5 rounded bg-[#C1C1C133]"
          >
            تست
          </button>
        </div>
      </div>

      {/* نمایش نتیجه */}
      {pingStatus !== "idle" && (
        <div className="text-sm mt-2">
          {pingStatus === "loading" && "⏳ در حال بررسی اتصال..."}
          {pingStatus === "success" && `✅ متصل (${latency})`}
          {pingStatus === "fail" && "❌ عدم دسترسی به دستگاه"}
        </div>
      )}
    </div>
  );
}
