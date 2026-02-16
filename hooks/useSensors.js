import { useState } from "react";
import {
  getSensorList,
  getSensorType,
  setSensor,
} from "../app/api/fetchSensor";

export function useSensors(token) {
  const [sensorList, setSensorList] = useState([]);
  const [sensorTypes, setSensorTypes] = useState([]);
  const getTypes = async () => {
    const res = await getSensorType({ token });
    if (res?.errorCode === 0) setSensorTypes(res.data);
  };

  const getList = async (node) => {
    

    const res = await getSensorList({ token, node });

    if (res?.errorCode === 0){
      setSensorList(res.data || []);} // 🔥 مهم
    else setSensorList([]);
  };

  const createSensors = async (sensors, nodeId) => {
    for (const s of sensors) {
      await setSensor({ formData: { ...s, node: nodeId }, token });
    }

    await getList(nodeId); // 🔥 با ID درست
  };

  return { sensorList, sensorTypes, getTypes, getList, createSensors };
}
