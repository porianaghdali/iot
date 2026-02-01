"use client";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import LeftImage from "./leftImage";
import Footer from "./footer";
import Header from "./header";

import SensorList from "./sensorList";

export default function AddDeviceModal({
  open,
  handleChange,
  formData,
  handleClose,
  handleSetNodes,
  step,
  setStep,
  sensorList,
  setSensorList,
  sensorTypeList,
  setSensorTypeList,
  handleSetSensor,
  handleSensorChange,
  zoneList,
  setZoneList,
  sensorData,
  setSensorData,
}) {
  if (!open) return null;

  const steps = {
    1: (
      <StepOne
        formData={formData}
        handleChange={handleChange}
        zoneList={zoneList}
      />
    ),
    2: <StepTwo formData={formData} handleChange={handleChange} />,
    3: (
      <StepThree
        formData={formData}
        handleChange={handleSensorChange}
        sensorTypeList={sensorTypeList}
        sensorData={sensorData}
        setSensorData={setSensorData}
        handleSetSensor={handleSetSensor}
      />
    ),
  };
  console.log(formData,"test form")
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  ">
      <div
        className="w-full h-full z-0 absolute bg-[#0D0D0D26]"
        onClick={handleClose}
      ></div>
      <div className="bg-white shadow-[0px_0px_12px_2px_#00000014] relative z-10 rounded-md w-[90%] h-[90%] overflow-hidden flex ">
        <div className="w-full xl:w-3/5 h-full px-[6%] py-[5%] overflow-auto ">
          {/* Header */}
          <Header step={step} />
          {/* Body */}
          <div className="space-y-2 text-xs ">{steps[step]}</div>

          {/* Footer */}
          <Footer
            step={step}
            setStep={setStep}
            onClose={handleClose}
            submit={handleSetNodes}
            handleSetSensor={handleSetSensor}
          />
        </div>
        {step == 3 ? (
          <SensorList
            sensorList={sensorList}
            handleGetSensorList={handleGetSensorList}
          />
        ) : (
          <LeftImage />
        )}
      </div>
    </div>
  );
}
