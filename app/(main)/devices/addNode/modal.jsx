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

const initialSensorData = {
  ID: "",
  type: "",
  node: "",
  sensorName: "",
  dataType: "",
  dataAddress: "",
  oid: "",
  historySave: 0,
  active: 0,
  mqttValue: "",
};
export default function AddDeviceModal({
  open,
  formData,
  setFormData,
  handleClose,
  step,
  setStep,
  handleSaveNode,
  onSaveSensors,
  handleChange,
}) {
  const token = useMemo(() => getTokenFromCookie("token"), []);
  const { publish, subscribe, onMessage, offMessage, connected } = useMqtt();

  const { getList, sensorList, createSensors, deleteSensorById } =
    useSensors(token);

  // Current sensor form
  const [sensorData, setSensorData] = useState(initialSensorData);

  // Sensors waiting to be saved
  const [pendingSensors, setPendingSensors] = useState([]);
  const [scanResult, setScanResult] = useState(null);
  const [scanStatus, setScanStatus] = useState("idle");

  const scanStatusRef = useRef("idle");

  const setScanStatusSafe = (status) => {
    scanStatusRef.current = status;
    setScanStatus(status);
  };
  const handleSensorScan = () => {
    if (!connected) {
      return;
    }

    setScanStatusSafe("loading");

    // 🔹 topic ثابت
    const pullTopic = `web/{department}/user/1/sensor-scan/${formData.ID}/pull`;
    const responseTopic = `web/{department}/user/1/sensor-scan/${formData.ID}/get`;

    // subscribe به جواب
    subscribe(responseTopic);

    const handleMessage = (msg) => {


      if (msg.destinationName !== responseTopic) return;

      const result = msg.payloadString;
      if (result) {
        setScanStatusSafe("success");
        try {
          setScanResult(JSON.parse(result));
        } catch {
          setScanResult(result);
        }
      } else {
        setScanStatusSafe("fail");
        setScanResult(null);
      }

      offMessage(handleMessage); // cleanup بعد از دریافت پیام
    };

    onMessage(handleMessage);

    // 🔹 publish درخواست scan
    publish(pullTopic, JSON.stringify({}), { qos: 2 });

    // 🔹 timeout برای جلوگیری از گیر کردن
    setTimeout(() => {
      if (scanStatusRef.current === "loading") {
        setScanStatusSafe("fail");
        offMessage(handleMessage);
      }
    }, 7000);
  };

  // Fetch sensors when node ID exists
  useEffect(() => {
    if (!formData.ID) return;
    getList(formData.ID);
  }, [formData.ID]);

  // Handle sensor input change
  const handleSensorChange = (e) => {
    const { name, value } = e.target;

    setSensorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add sensor to pending list
  const handleAddSensor = () => {
    const sensor = {
      ...sensorData,
      node: formData.ID, // attach node id
    };

    setPendingSensors((prev) => [...prev, sensor]);
    setSensorData(initialSensorData);
  };

  // Save all sensors to server
  const handleSaveAllSensors = async () => {
    if (!formData.ID || !pendingSensors.length) return;

    await createSensors(pendingSensors, formData.ID);
    await getList(formData.ID);

    setPendingSensors([]);
    // handleClose();
  };
  const handleDeletSensors = async (ID) => {
    if (!formData.ID) return;

    await deleteSensorById(ID, formData.ID);
    await getList(formData.ID);

    setPendingSensors([]);
    // handleClose();
  };
  const steps = {
    1: <StepOne formData={formData} handleChange={handleChange} />,
    2: <StepTwo formData={formData} handleChange={handleChange} />,
    3: (
      <StepThree
        sensorData={sensorData}
        setSensorData={setSensorData}
        formData={formData}
        handleAddSensors={handleAddSensor}
        handleChange={handleSensorChange}
      />
    ),
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#0D0D0D26] z-0"
        onClick={handleClose}
      />
      <div className="relative z-10 flex w-[90%] h-[90%] overflow-hidden rounded-md bg-white shadow-[0px_0px_12px_2px_#00000014]">
        <button
          onClick={handleSensorScan}
          className=" absolute top-4 right-4 p-1 rounded-full border
      "
        >
          <X size={16} />
        </button>{" "}
        <div className="w-full xl:w-3/5 h-full px-[6%] py-[5%] overflow-auto">
          <Header step={step} />
          <div className="space-y-2 text-xs">{steps[step]}</div>
          <Footer
            step={step}
            setStep={setStep}
            handleSaveNode={handleSaveNode}
            handleSaveAllSensors={handleSaveAllSensors}
          />
        </div>
        {step === 3 ? (
          <SensorList
            sensorList={sensorList}
            formData={formData}
            pendingSensors={pendingSensors}
            setPendingSensors={setPendingSensors}
            handleSensorScan={handleSensorScan}
            scanResult={scanResult}
            handleDeletSensors={handleDeletSensors}
          />
        ) : (
          <LeftImage />
        )}
      </div>
    </div>
  );
}
