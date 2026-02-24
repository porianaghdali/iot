import { CircleQuestionMark, Cpu, FileQuestion, Share2 } from "lucide-react";

export default function Resource() {
  const list = [
    { title: "cpu ", value: "%13 (5 Cores)", id: 1 },
    { title: "cpu", value: "%13 (5 Cores)", id: 2 },
    { title: "cpu  ", value: "%13 (5 Cores)", id: 3 },
  ];
  const list2 = [
    {
      title:
        " Intel_83844223_gigabite_network_Native_mac_filter_LightWeight_000",
      value: "%13 (5 Cores)",
      id: 1,
    },
    {
      title:
        " Intel_83844223_gigabite_network_Native_mac_filter_LightWeight_000",
      value: "%13 (5 Cores)",
      id: 2,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-1.5 p-4">
      <div className="bg-white rounded p-3 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-text-title text-sm font-normal">
            {" "}
            میزان مصرف منابع{" "}
          </p>{" "}
          <div className="flex gap-1.5 items-center">
            <CircleQuestionMark strokeWidth={1.25} />
            <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
              نمودار
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {list.map((item) => {
            return (
              <div
                className="border border-border-muted rounded grid grid-cols-4 p-1"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-background-modal-header shadow-[0px_0px_4px_0px_#0000000D]">
                    <Cpu strokeWidth={1} />
                  </div>
                  <p className="tex-xs text-text-title">{item.title}</p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <button className="border border-border-muted bg-[#C1C1C10D] rounded-[50px] px-2 py-1 h-fit text-text-tertiary text-sm">
                    مانیتورینگ
                  </button>
                  <button className="border border-border-muted bg-[#C1C1C10D] rounded-[50px] px-2 py-1 h-fit text-text-tertiary text-sm">
                    ذخیره لاگ
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <p className=" text-text-title text-xs">{item.value}</p>
                  <div className="w-[140px] h-1.5 bg-[#C1C1C180] rounded-xl flex justify-end">
                    <div className="w-[30px] h-1.5 bg-green rounded-xl"></div>
                  </div>
                </div>
                <div className="flex justify-end p-2">
                  <button className="font-normal w-fit text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
                    هشدارها
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded p-3 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-text-title text-sm font-normal">میزان مصرف شبکه</p>
          <div className="flex gap-1.5 items-center">
            <CircleQuestionMark strokeWidth={1.25} />
            <button className="font-normal text-sm text-text-title  bg-background-button px-5 py-1.5 rounded-[50px] flex items-center">
              نمودار
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {list2.map((item) => {
            return (
              <div
                className="border border-border-muted rounded flex justify-between p-1"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-background-modal-header shadow-[0px_0px_4px_0px_#0000000D]">
                    <Share2  strokeWidth={1} />
                  </div>
                  <p className="tex-xs text-text-title">{item.title}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="flex items-center gap-2">
                    <p className=" text-text-title text-xs">{item.value}</p>
                    <div className="w-[140px] h-1.5 bg-[#C1C1C180] rounded-xl flex justify-end">
                      <div className="w-[30px] h-1.5 bg-green rounded-xl"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className=" text-text-title text-xs">{item.value}</p>
                    <div className="w-[140px] h-1.5 bg-[#C1C1C180] rounded-xl flex justify-end">
                      <div className="w-[30px] h-1.5 bg-green rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <button className="border border-border-muted bg-[#C1C1C10D] rounded-[50px] px-2 py-1 h-fit text-text-tertiary text-sm">
                    مانیتورینگ
                  </button>
                  <button className="border border-border-muted bg-[#C1C1C10D] rounded-[50px] px-2 py-1 h-fit text-text-tertiary text-sm">
                    ذخیره لاگ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
