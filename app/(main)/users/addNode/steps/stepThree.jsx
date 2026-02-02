import { Trash } from "lucide-react";
import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";

export default function StepThree({ formData, handleChange }) {
  const ip = [
    { title: "168.12.1.1", id: 1 },
    { title: "168.12.1.1", id: 2 },
    { title: "168.12.1.1", id: 3 },
    { title: "168.12.1.1", id: 4 },
  ];
  return (
    <div className="border border-border-muted h-full bg=">
      <div className="bg-background-modal-header text-center font-normal p-4 text-sm text-text-tertiary">
        IP های مجاز ورود به سیستم{" "}
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">IP</label>
        <div className="flex gap-1 w-full max-w-[372px]">
          <CustomInput
            placeholder="IP را وارد کنید"
            id="acceptIp"
            name="acceptIp"
            value={formData.IP}
            onChange={(e) => handleChange(["acceptIp "], e.target.value)}
          />{" "}
          <button
            className="border 
              py-2.5 rounded w-24 text-text-title font-normal text-sm
               bg-[#20E0800D] border-green"
          >
            ثبت
          </button>
        </div>
      </div>
      <div className="grid gap-1 px-[6%] py-[4%]">
        {ip.map((item) => {
          return (
            <div key={item.id} className="flex gap-1">
              <div className="bg-background-modal-header text-text-tertiary text-sm font-normal w-15 flex justify-center items-center rounded">
                {item.id}
              </div>
              <div className="bg-background-modal-header text-text-tertiary text-sm font-normal p-3 rounded w-full flex justify-between">
                <p>{item.title}</p>
                <button className="p-1 rounded-xl border border-[text-tertiary]">
                  <Trash size={18} strokeWidth={1.25} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
