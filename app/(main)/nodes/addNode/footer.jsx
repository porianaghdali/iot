"use client";

export default function Footer({
  setStep,
  step,

  handleSaveNode,
  handleSaveAllSensors,
}) {
  const handleSubmit = async () => {
    const newId = await handleSaveNode();

    if (newId) {
      // حالا می‌تونی مستقیماً از newId استفاده کنی
    }
    setStep(step + 1); // بعد از اینکه ID مطمئناً آماده شد
  };

  return (
    <div className="flex justify-between items-center mt-6 ">
      <button
        disabled={step === 1}
        onClick={() => setStep(step - 1)}
        className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
      >
        قبلی
      </button>

      <div className="flex gap-2">
        {step == 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            بعدی
          </button>
        ) : step == 2 ? (
          <button
            onClick={handleSubmit}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            ثبت و ادامه
          </button>
        ) : (
          <button
            onClick={handleSaveAllSensors}
            className="text-xs px-3 py-1 bg-black text-white rounded"
          >
            ثبت
          </button>
        )}
      </div>
    </div>
  );
}
