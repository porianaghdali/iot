"use client"
import { useState } from "react";
import { getZone } from "../app/api/fetchZone";

export function useZones(token) {
  const [zones, setZonesState] = useState([]);

  const getZonesList = async () => {
    try {
      const res = await getZone({ token });
      if (res?.errorCode === 0) setZonesState(res.data);
    } catch (error) {
      console.error("Failed to fetch zones:", error);
    }
  };

  return { zones, getZonesList };
}
