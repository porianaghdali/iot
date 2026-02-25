"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

import Header from "./header";
import Footer from "./footer";
import LeftImage from "./leftImage";
import SensorList from "./sensorList";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";

import useMqtt from "@/hooks/useMqtt";
import { useSensors } from "@/hooks/useSensors";
import { getTokenFromCookie } from "@/utils/functions/auth";
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

  // MQTT
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();

  // Sensors hook
  const { getList, sensorList, createMultipleSensor } = useSensors(token);

  // Form & sensors state
  const [editingIndex, setEditingIndex] = useState(null);
  const [sensorData, setSensorData] = useState(initialSensorData);
  const [combinedSensors, setCombinedSensors] = useState([]);

  // Scan status
  const [scanStatus, setScanStatus] = useState("idle");
  const scanStatusRef = useRef("idle");

  // -------------------------
  // Fetch sensors from server when formData.ID changes
  // -------------------------
  useEffect(() => {
    if (formData.ID) getList(formData.ID);
  }, [formData.ID]);

  // Merge server sensors into combined list
  useEffect(() => {
    const saved = sensorList.map((item) => ({ ...item, status: "saved" }));
    setCombinedSensors(saved);
  }, [sensorList]);

  // -------------------------
  // Add or edit sensor manually
  // -------------------------
  const handleAddSensor = () => {
    const sensor = { ...sensorData, node: formData.ID, status: "pending" };

    if (editingIndex !== null) {
      setCombinedSensors((prev) =>
        prev.map((item, i) => (i === editingIndex ? sensor : item)),
      );
      setEditingIndex(null);
    } else {
      setCombinedSensors((prev) => [...prev, sensor]);
    }

    setSensorData(initialSensorData);
  };

  // -------------------------
  // Edit sensor selection
  // -------------------------
  const handleSelectSensorForEdit = (index) => {
    setSensorData(combinedSensors[index]);
    setEditingIndex(index);
  };

  // -------------------------
  // MQTT sensor scan
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
          const scanned = JSON.parse(result).map((item) => ({
            ...item,
            status: "scanned",
          }));

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
  // Save all sensors to backend
  // -------------------------
  const handleSaveAllSensors = async () => {
    if (!combinedSensors.length) return;
    await createMultipleSensor(formData.ID, combinedSensors);
  };

  // -------------------------
  // Steps content
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
        isEditing={editingIndex !== null}
        handleChange={(e) =>
          setSensorData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    ),
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D0D0D26]" onClick={handleClose} />

      {/* Modal container */}
      <div className="relative flex w-[90%] h-[90%] rounded-md bg-white shadow-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full border"
        >
          <X size={16} />
        </button>

        {/* Left section */}
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

        {/* Right section */}
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
