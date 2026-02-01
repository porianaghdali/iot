import { Trash } from "lucide-react";
import { DeleteSensor } from "../../../api/fetchSensor";
import { getTokenFromCookie } from "@/utils/functions/auth.js";

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
    <div className="w-2/5 p-4 flex flex-col gap-2">
      {sensorList.map((item) => {
        return (
          <div
            key={item.ID}
            className="grid grid-cols-6 justify-between border p-2 rounded-2xl "
          >
            <div className="col-span-3">
              {item.sensorName} {item.ID}
            </div>
            <div className="col-span-1 text-center">مقدار</div>
            <div className="col-span-1 text-center">active</div>
            <button
              id={item.ID}
              onClick={handleDeleteSensor}
              className="col-span-1 flex justify-end"
            >
              <Trash />
            </button>
          </div>
        );
      })}
    </div>
  );
}
