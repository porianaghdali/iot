"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SensorList from "./sensorList";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import Header from "./header";
import Footer from "./footer";
import LeftImage from "./leftImage";
import useMqtt from "@/hooks/useMqtt";
import { useSensors } from "@/hooks/useSensors";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { X } from "lucide-react";
import { initialSensorData } from "../dummy";

export default function AddDeviceModal({
  open,
  formData,
  handleClose,
  step,
  setStep,
  handleSaveNode,
  handleChange,
}) {
  const token = useMemo(() => getTokenFromCookie("token"), []);
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();
  const { getList, sensorList,  createMultipleSensor } =
    useSensors(token);
  const [editingIndex, setEditingIndex] = useState(null);
  // فرم سنسور
  const [sensorData, setSensorData] = useState(initialSensorData);
  // ⭐ لیست نهایی سنسورها (همه چی اینجاست)
  const [combinedSensors, setCombinedSensors] = useState([]);

  // وضعیت اسکن
  const [scanStatus, setScanStatus] = useState("idle");
  const scanStatusRef = useRef("idle");

  // -------------------------
  // گرفتن سنسورهای ثبت‌شده از سرور
  // -------------------------
  useEffect(() => {
    if (!formData.ID) return;
    getList(formData.ID);
  }, [formData.ID]);

  // وقتی سنسورهای سرور آمد → اضافه به لیست نهایی
  useEffect(() => {
    const saved = sensorList.map((item) => ({
      ...item,
      status: "saved",
    }));
    setCombinedSensors(saved);
  }, [sensorList]);

  // -------------------------
  // افزودن سنسور دستی
  // -------------------------
  const handleAddSensor = () => {
    const sensor = {
      ...sensorData,
      node: formData.ID,
      status: "pending",
    };

    if (editingIndex !== null) {
      // ✏️ حالت ویرایش
      setCombinedSensors((prev) =>
        prev.map((item, i) => (i === editingIndex ? sensor : item)),
      );

      setEditingIndex(null);
    } else {
      // ➕ حالت افزودن
      setCombinedSensors((prev) => [...prev, sensor]);
    }

    setSensorData(initialSensorData);
  };

  // -------------------------
  // حذف سنسور
  // -------------------------

  // -------------------------
  // ادیت سنسور
  // -------------------------
  const handleSelectSensorForEdit = (index) => {
    const sensor = combinedSensors[index];

    setSensorData(sensor); // پر کردن فرم
    setEditingIndex(index); // مشخص کردن آیتم
  };

  // -------------------------
  // اسکن سنسور از MQTT
  // -------------------------
  const setScanStatusSafe = (status) => {
    scanStatusRef.current = status;
    setScanStatus(status);
  };

  const handleSensorScan = () => {
    if (!connected) return;

    setScanStatusSafe("loading");

    const pullTopic = `web/{department}/user/1/sensor-scan/${formData.ID}/pull`;
    const responseTopic = `web/{department}/user/1/sensor-scan/${formData.ID}/get`;

    subscribe(responseTopic);

    const handleMessage = (msg) => {
      if (msg.destinationName !== responseTopic) return;

      const result = msg.payloadString;

      if (result) {
        setScanStatusSafe("success");

        try {
          const parsed = JSON.parse(result);

          const scanned = parsed.map((item) => ({
            ...item,
            status: "scanned",
          }));

          // ⭐ اضافه به لیست کلی
          setCombinedSensors((prev) => [...prev, ...scanned]);
        } catch {
          console.error("Invalid scan data");
        }
      } else {
        setScanStatusSafe("fail");
      }

      offMessage(handleMessage);
    };

    onMessage(handleMessage);

    publish(pullTopic, JSON.stringify({}), { qos: 2 });

    setTimeout(() => {
      if (scanStatusRef.current === "loading") {
        setScanStatusSafe("fail");
        offMessage(handleMessage);
      }
    }, 70000);
  };

  // -------------------------
  // ذخیره همه سنسورها در بک‌اند
  // -------------------------
  const handleSaveAllSensors = async () => {console.log(combinedSensors,formData.ID)
     if ( !combinedSensors.length) return;
  

    await createMultipleSensor(formData.ID, combinedSensors);
  };

  // -------------------------
  // مراحل مودال
  // -------------------------
  const steps = {
    1: <StepOne formData={formData} handleChange={handleChange} />,
    2: <StepTwo formData={formData} handleChange={handleChange} />,
    3: (
      <StepThree
        sensorData={sensorData}
        setSensorData={setSensorData}
        formData={formData}
        handleAddSensors={handleAddSensor}
        isEditing={editingIndex !== null} // ⭐ اضافه
        handleChange={(e) =>
          setSensorData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    ),
  };
console.log(combinedSensors,"combinedSensors")
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0D0D0D26]" onClick={handleClose} />

      <div className="relative flex w-[90%] h-[90%] rounded-md bg-white shadow-lg overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full border"
        >
          <X size={16} />
        </button>

        {/* سمت چپ */}
        <div className="w-full xl:w-3/5 px-[6%] py-[5%] overflow-auto">
          <Header step={step} />

          <div className="space-y-2 text-xs">{steps[step]}</div>

          <Footer
            step={step}
            setStep={setStep}
            handleSaveNode={handleSaveNode}
            handleSaveAllSensors={handleSaveAllSensors}
          />
        </div>

        {/* سمت راست */}
        {step === 3 ? (
          <SensorList
            scanStatus={scanStatus}
            handleSensorScan={handleSensorScan}
            sensorList={combinedSensors}
            setSensorList={setCombinedSensors}
            onEdit={handleSelectSensorForEdit}
          />
        ) : (
          <LeftImage />
        )}
      </div>
    </div>
  );
}
