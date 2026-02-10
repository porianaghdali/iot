import { Trash2 } from "lucide-react";
import { DeleteSensor } from "../../../api/fetchSensor";
import { getTokenFromCookie } from "@/utils/functions/auth.js";
import Image from "next/image";

export default function SensorList({ sensorList, handleGetSensorList }) {
  
  const handleDeleteSensor = async (e) => {
    const token = getTokenFromCookie("token");

    const ID = e.currentTarget.id;

    console.log("Deleting node with ID:", ID);

    try {
      const response = await DeleteSensor({ token, ID });

      if (response?.errorCode === 0) {
        console.log("Deleted successfully:", response.data);
        handleGetSensorList();
      } else {
        console.error("Error deleting node:", response);
      }
    } catch (error) {
      console.error("API call failed:", error);
    }
  };
  return (
    <div className="w-2/5 p-1 flex flex-col gap-2 border-r border-[#E0E0E2]">
      <div className="bg-background-modal-header flex items-center gap-2 px-3 py-6 rounded">
        <Image
          src="/images/icons/nodes/sensor.png"
          alt="sensor"
          width={36}
          height={36}
        />
        <p className="text-text-title text-lg font-normal">سنسورهای ثبت شده</p>
      </div>
      {sensorList.map((item) => {
        return (
          <div
            key={item.ID}
            className="flex justify-between items-center p-2 rounded shadow-[0px_0px_4px_0px_#0000001A]"
          >
            <div className="col-span-3 text-xs text-text-title flex items-center gap-2">
              <div className="p-1.5 bg-background-modal-header shadow-[0px_0px_4px_0px_#0000000D] w-fit rounded">
                <Image
                  src="/images/icons/nodes/img.png"
                  alt="sensor"
                  width={26}
                  height={26}
                  className=""
                />
              </div>
              <p>{item.sensorName} </p>
            </div>
            <div className="flex items-center gap-1">
              <p className=" text-center text-text-tertiary text-xs font-normal">
                مقدار
              </p>
              <div className="flex items-center gap-3">
              <p className="text-text-title text-xs font-normal py-1 px-2 rounded bg-[#599DE81A] w-fit">
                123022{" "}
              </p>
              <div className=" text-center">
                {item.active ? (
                  <p className="text-text-title text-xs font-normal py-1 px-2 rounded bg-[#20E0801A] w-fit">
                    ثبت شد
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button
                id={item.ID}
                onClick={handleDeleteSensor}
                className="w-fit"
              >
                <Trash2 size={18} color="#606060" strokeWidth={1.25} />
              </button></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
