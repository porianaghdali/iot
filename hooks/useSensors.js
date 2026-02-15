import { useState } from "react";
import { getSensorList, getSensorType, setSensor } from "../app/api/fetchSensor";

export function useSensors(token, nodeId) {
  const [sensorList, setSensorList] = useState([]);
  const [sensorTypes, setSensorTypes] = useState([]);

  const getTypes = async () => {
    const res = await getSensorType({ token });
    if (res?.errorCode === 0) setSensorTypes(res.data);
    console.log(res.data,"res.data")
  };

  const getList = async () => {
    if (!nodeId) return;
    const res = await getSensorList({ token, ID: nodeId });
    if (res?.errorCode === 0) setSensorList(res.data);
  };

  const createSensors = async (sensors) => {
    for (const s of sensors) {
      await setSensor({ formData: { ...s, node: nodeId }, token });
    }
    await getList();
  };

  return { sensorList, sensorTypes, getTypes, getList, createSensors };
}
