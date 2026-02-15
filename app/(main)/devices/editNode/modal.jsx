export default function EditNodeModal({
  open,
  formData,
  handleClose,
  step,
  setStep,
  sensorList,
  handleGetSensorList,
  sensorTypeList,
  sensorData,
  setSensorData,
  onSaveNode,
  onSaveSensors,
}) {
  if (!open) return null;

  const steps = {
    1: <StepOne formData={formData} />,
    2: <StepTwo formData={formData} />,
    3: (
      <StepThree
        sensorTypeList={sensorTypeList}
        sensorData={sensorData}
        setSensorData={setSensorData}
        handleSetSensor={onSaveSensors}
      />
    ),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 bg-[#0D0D0D26]"
        onClick={handleClose}
      />
      <div className="relative z-10 flex w-[90%] h-[90%] overflow-hidden rounded-md bg-white shadow-[0px_0px_12px_2px_#00000014]">
        <div className="w-full xl:w-3/5 h-full px-[4%] py-[2%] overflow-auto">
          <Header step={step} setStep={setStep} />
          <div className="space-y-2 text-xs">{steps[step]}</div>
          <Footer
            step={step}
            setStep={setStep}
            onClose={handleClose}
            onSaveNode={onSaveNode}
            onSaveSensors={onSaveSensors}
          />
        </div>

        {step === 3 ? (
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
