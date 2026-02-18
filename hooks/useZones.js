"use client";
import { useState } from "react";
import { getZone, setZone } from "../app/api/fetchZone";

export function useZones(token) {
  const [zones, setZonesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getZonesList = async () => {
        setLoading(true);
            setError(null);


    try {
      const res = await getZone({ token });
      if (res?.errorCode === 0) setZonesState(res.data);
    } catch (error) {
      console.error("Failed to fetch zones:", error);
    }finally {
      setLoading(false);
    }
  };

  const createZone = async (formData) => {
        setLoading(true);
            setError(null);


    try {
      const res = await setZone({ formData, token });

      if (res?.errorCode === 0) {
        await getZonesList(); // لیست جدید بگیر
      }
    } catch (error) {
      console.error("Failed to create zone:", error);
    }finally {
      setLoading(false);
    }
  };

  return { zones, getZonesList, createZone ,loading,
error};
}
