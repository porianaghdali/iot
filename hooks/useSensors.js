import { useState, useCallback } from "react";
import { getSensorList, getSensorType, setSensor, DeleteSensor } from "../app/api/fetchSensor";

export function useSensors(token) {
  const [sensorList, setSensorList] = useState([]);
  const [sensorTypes, setSensorTypes] = useState([]);

  // دریافت نوع سنسورها
  const getTypes = useCallback(async () => {
    try {
      const res = await getSensorType({ token });
      if (res?.errorCode === 0) setSensorTypes(res.data || []);
    } catch (err) {
      console.error("Failed to fetch sensor types:", err);
    }
  }, [token]);

  // دریافت لیست سنسورها برای نود مشخص
  const getList = useCallback(
    async (nodeId) => {
      try {
        const res = await getSensorList({ token, node: nodeId });
        if (res?.errorCode === 0) {
          setSensorList(res.data || []);
        } else {
          setSensorList([]);
        }
      } catch (err) {
        console.error("Failed to fetch sensor list:", err);
        setSensorList([]);
      }
    },
    [token]
  );

  // حذف یک سنسور مشخص با ID
  const deleteSensorById = useCallback(
    async (ID, nodeId) => {
      if (!ID) return;
      try {
        const res = await DeleteSensor({ token, ID });
        if (res?.errorCode === 0) {
          // بعد از حذف، لیست رو رفرش کن
          await getList(nodeId);
        }
      } catch (err) {
        console.error("Failed to delete sensor:", err);
      }
    },
    [token, getList]
  );

  // ایجاد سنسورهای جدید
  const createSensors = useCallback(
    async (sensors, nodeId) => {
      try {
        for (const s of sensors) {
          await setSensor({
            formData: { ...s, node: nodeId },
            token,
          });
        }
        // بعد از ایجاد، لیست رو رفرش کن
        await getList(nodeId);
      } catch (err) {
        console.error("Failed to create sensors:", err);
      }
    },
    [token, getList]
  );

  return {
    sensorList,
    sensorTypes,
    getTypes,
    getList,
    createSensors,
    deleteSensorById,
  };
}
