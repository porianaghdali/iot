"use client";
import Card from "./components/card";
import Alert from "./components/alerts";
import MonitoringHeader from "./monitoringHeader";
import { useEffect, useState } from "react";
import { getTokenFromCookie } from "@/utils/functions/auth.js";

import { getZone } from "../../api/fetchZone";
export default function Monitoring() {
  const [zoneList, setZoneList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetZone = async () => {
    setLoading(true);
    setError("");
    const token = getTokenFromCookie("token");

    try {
      const response = await getZone({ token });

      if (response?.errorCode === 0) {
        setZoneList(response.data);
      } else {
        setError(response?.message || "خطایی رخ داده است");
      }
    } catch (err) {
      setError("ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetZone();
  }, []);
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <MonitoringHeader />

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-1.5 p-4">
        <div className="lg:col-span-4 grid gap-1.5">
          {zoneList.map((item) => {
            return (
              <div key={item.ID} className="">
                <Card item={item}/>
              </div>
            );
          })}
        </div>
        <div className="col-span-1 ">
          <Alert />
        </div>
      </div>
    </div>
  );
}
