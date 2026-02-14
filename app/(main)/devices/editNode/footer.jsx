export default function Footer({ setStep, step, onClose, submit,handleSetSensor }) {
  const handleSubmit=()=>{
    submit()
    setStep(step + 1)
  }
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
        <button
          onClick={onClose}
          className="text-sm border rounded disabled:opacity-40 text-text-title border-red w-24 h-9 bg-[#FF46460D]"
        >
          انصراف
        </button>

        {step ==1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            بعدی
          </button>
        ) :step==2?(
          <button
            onClick={handleSubmit}
            className="text-sm border rounded disabled:opacity-40 text-text-title border-[#C1c1c1] w-24 h-9"
          >
            ثبت و ادامه
          </button>
        ) : (
          <button
          onClick={handleSetSensor}
            className="text-xs px-3 py-1 bg-black text-white rounded"
          >
            ثبت
          </button>
        )}
      </div>
    </div>
  );
}
