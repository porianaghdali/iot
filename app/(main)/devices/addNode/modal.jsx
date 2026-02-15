import SensorList from "./sensorList";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import Header from "./header";
import Footer from "./footer";
import LeftImage from "./leftImage";
import { useSensors } from "@/hooks/useSensors";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { useEffect, useMemo, useState } from "react";
const initialSensorData = {
  ID: "",
  type: "",
  node: "",
  sensorName: "",
  dataType: "",
  dataAddress: "",
  oid: "",
  historySave: false,
  active: false,
};
export default function AddDeviceModal({
  open,
  formData,setFormData,
  handleClose,
  step,
  setStep,
  
  onSaveSensors,
  handleChange,
}) {
  const token = useMemo(() => getTokenFromCookie("token"), []);
  useEffect(() => {
    getList();
  }, [formData.ID]);
  const { getList } = useSensors(token, formData.ID);
  const [sensorData, setSensorData] = useState(initialSensorData);
  const [sensorsState, setSensorsState] = useState([]);

  if (!open) return null;

  const handleSensorChange = (e) => {
    const { name, value } = e.target;

    setSensorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };const handleAddSensor = () => {
  setSensorsState((prev) => [...prev, sensorData]);

  // اختیاری — ریست فرم برای سنسور بعدی
  setSensorData(initialSensorData);
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
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#0D0D0D26] z-0"
        onClick={handleClose}
      />
      <div className="relative z-10 flex w-[90%] h-[90%] overflow-hidden rounded-md bg-white shadow-[0px_0px_12px_2px_#00000014]">
        <div className="w-full xl:w-3/5 h-full px-[6%] py-[5%] overflow-auto">
          <Header step={step} />
          <div className="space-y-2 text-xs">{steps[step]}</div>
          <Footer
            step={step}
            setStep={setStep}
            onClose={handleClose}
            formData={formData}
            onSaveSensors={onSaveSensors}
            setFormData={setFormData}
          />
        </div>

        {/* {step === 3 ? (
          <SensorList
            sensorList={sensorList}
            sensorsState={sensorsState}
            setSensorsState={setSensorsState}
            handleGetSensorList={handleGetSensorList}
          />
        ) : (
          <LeftImage />
        )} */}
      </div>
    </div>
  );
}
