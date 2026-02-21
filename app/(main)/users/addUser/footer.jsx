export default function Footer({ setStep, step, onClose }) {
  const handleSubmit = () => {
    setStep(step + 1);
  };
  return (
    <div className=" absolute bottom-0 w-full">
      <div className="flex justify-between items-center  w-full">
        <div className="flex gap-2">
          {step == 1 || step == 2 || step == 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
            >
              بعدی
            </button>
          ) : step == 4 ? (
            <button
              onClick={handleSubmit}
              className="text-sm border bg-[#20E0800D] rounded disabled:opacity-40 text-text-title border-[#20E080] w-24 h-9"
            >
              ایجاد کاربر{" "}
            </button>
          ) : (
            <button className="text-xs px-3 py-1 bg-black text-white rounded">
              ثبت
            </button>
          )}
        </div>
        {step != 1 && (
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            قبلی
          </button>
        )}
      </div>
    </div>
  );
}
