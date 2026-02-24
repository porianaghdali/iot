"use client";
import Card from "./components/card";
import Alert from "./components/alerts";
import MonitoringHeader from "./monitoringHeader";
import { useEffect, useMemo, useRef, useState } from "react";
import { getTokenFromCookie } from "@/utils/functions/auth.js";
import { useMonitoring } from "@/hooks/useMonitoring";

import { getZone } from "../../api/fetchZone";
export default function Monitoring() {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  const { zoneList, getList, loading, error } = useMonitoring(token);

  useEffect(() => {
    if (token) getList();
  }, [token]);

  console.log(zoneList);

  
  if (loading) return <div>loading...</div>;
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <MonitoringHeader />

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-1.5 p-4">
        <div className="lg:col-span-4 grid gap-1.5">
          {zoneList.map((item) => {
            return (
              <div key={item.ID} className="">
                <Card item={item} />
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
