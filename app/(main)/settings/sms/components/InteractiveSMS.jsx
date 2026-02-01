import Image from "next/image";
import CustomInput from "../../../../../components/ui/customInput";

export default function InteractiveSMS() {
  const list = [
    {
      title: "شماره",
      id: 1,
    },
    {
      title: "کلید",
      id: 2,
    },
    {
      title: "وضعیت",
      id: 3,
    },
    {
      title: "اتصال",
      id: 4,
    },
  ];
  const data = [
    {
      id: 1,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: true,
    },
    {
      id: 2,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: false,
    },
    {
      id: 3,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: true,
    },
    {
      id: 4,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: false,
    },
    {
      id: 5,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: true,
    },
    {
      id: 6,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: false,
    },
    {
      id: 7,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: true,
    },
    {
      id: 8,
      number: "Sepehr",
      key: "09124561818",
      status: "ایران پیامک",
      connect: false,
    },
  ];
  return (
    <div className="flex gap-2 ">
      <div className=" bg-background-box w-full max-w-[600px] p-4 flex flex-col gap-4">
        <p className="text-text-secondary text-base font-normal ">
          پیامک تعاملی{" "}
        </p>
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="number"
                className="text-text-title text-sm font-normal"
              >
                شماره{" "}
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="number"
                  placeholder=" شماره را وارد کنید"
                  name="number"
                  // value={formData.ip}
                  // onChange={(e) => handleChange(["ip"], e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="key"
                className="text-text-title text-sm font-normal"
              >
                کلید{" "}
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="key"
                  placeholder=" کلید را وارد کنید"
                  name="key"
                  // value={formData.ip}
                  // onChange={(e) => handleChange(["ip"], e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-[#E0E0E2] ">
              <label
                htmlFor="status"
                className="text-text-title text-sm font-normal"
              >
                وضعیت{" "}
              </label>

              <div className="w-1/2">
                <CustomInput
                  id="status"
                  placeholder="وضعیت  را وارد کنید"
                  name="status"
                  // value={formData.ip}
                  // onChange={(e) => handleChange(["ip"], e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 ">
              <button className="text-text-title text-sm font-normal py-2 px-3 rounded border border-border-muted ">
                ثبت{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-background-box w-full max-w-[453px] p-4  flex flex-col gap-4">
        <p className="text-text-secondary text-base font-normal ">
          پیامک تعاملی{" "}
        </p>
        <div>
          <div className="grid grid-cols-4 justify-between bg-background-table-header text-text-tertiary text-xs font-normal py-2 px-3 rounded">
            {list.map((item) => {
              return (
                <div className=" text-center" key={item.id}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="max-h-80 overflow-auto">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid text-center grid-cols-4 justify-between  border-b border-background-table-header text-text-secondary text-xs font-normal py-2 px-3 rounded"
                >
                  <p>{item.number}</p>
                  <p>{item.key}</p>
                  <p>{item.status}</p>
                  <div className="flex justify-center">
                    <Image
                      width={14}
                      height={14}
                      src={
                        item.connect
                          ? "/images/icons/check.svg"
                          : "/images/icons/xmark.svg"
                      }
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
