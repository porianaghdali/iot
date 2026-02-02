"use client";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import StepFour from "./steps/stepFour";

export default function AddUserModal({ open, handleClose, step, setStep }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    role: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  if (!open) return null;

  const steps = {
    1: <StepOne handleChange={handleChange} formData={formData} />,
    2: <StepTwo handleChange={handleChange} />,
    3: <StepThree handleChange={handleChange} formData={formData} />,
    4: <StepFour handleChange={handleChange} formData={formData} />,
  };
  console.log(formData, "testtt");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  ">
      <div
        className="w-full h-full z-0 absolute bg-[#0D0D0D26]"
        onClick={handleClose}
      ></div>
      <div className="bg-white shadow-[0px_0px_12px_2px_#00000014] relative z-10 rounded-md w-[90%] h-[90%] overflow-hidden flex max-w-xl p-1.5 ">
        <div className="w-full  h-full  overflow-auto relative ">
          {/* Header */}
          <Header step={step} />
          {/* Body */}
          <div className="space-y-2 text-xs  h-[78%] ">{steps[step]}</div>

          {/* Footer */}
          <Footer step={step} setStep={setStep} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
