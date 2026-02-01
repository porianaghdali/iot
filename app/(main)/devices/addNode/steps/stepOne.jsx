import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";

export default function StepOne({ formData, handleChange, zoneList }) {
  const zoneOptions = zoneList.map((item) => ({
    label: item.zoneName,
    value: item.zoneName,
  }));
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          نام دستگاه
        </label>

        <CustomInput
          placeholder="نام دستگاه را وارد کنید"
          id="deviceName"
          name="deviceName"
          value={formData.deviceName}
          onChange={(e) => handleChange(["deviceName"], e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal"> IP</label>

        <CustomInput
          id="ip"
          placeholder="IP دستگاه را وارد کنید"
          name="ip"
          textAlign="left"dir="ltr"
          value={formData.ip}
          onChange={(e) => handleChange(["ip"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
        <label className="text-text-title text-sm font-normal"> MAC</label>
        <div className="flex gap-1 w-full max-w-[372px]">
          <CustomInput
            id="mac"
            name="mac"
            placeholder="آدرس MAC خود را وارد کنید"
            value={formData.mac}
            onChange={(e) => handleChange(["mac"], e.target.value)}
          />
          <button className="border border-border-muted p-2.5 rounded bg-[#C1C1C133]">
            MAC
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal"> ناحیه</label>
       
        <CustomSelect
          options={zoneOptions}
          value={formData.zone}
          onChange={(e) => handleChange(["zone"], e.target.value)}
          placeholder=" ناحیه را انتخاب کنید"
        />{" "}
      </div>
    </div>
  );
}
