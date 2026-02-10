"use client"
import Card from "./components/card";
import AreasHeader from "./areasHeader";
import { useEffect, useState, } from "react";
import { getTokenFromCookie } from "@/utils/functions/auth.js";

import { getZone } from "../../api/fetchZone";
export default function Areas() {
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
      <AreasHeader />
      <div className="p-4 flex gap-1.5 w-full ">
       <div className="grid grid-cols-3 gap-1.5 w-full">
  {zoneList.length ? (
    zoneList.map((zone) => (
      <Card key={zone.ID} zone={zone} />
    ))
  ) : (
    <p className="col-span-3 text-center text-gray-500">هیچ منطقه‌ای موجود نیست</p>
  )}
</div>

      </div>
    </div>
  );
}
