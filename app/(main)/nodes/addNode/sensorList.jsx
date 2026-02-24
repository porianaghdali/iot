"use client";

import { Search, Trash2 } from "lucide-react";
import Image from "next/image";

export default function SensorList({
  sensorList = [],
  handleSensorScan,
  scanStatus,
  setSensorList,  onEdit, // ⭐ اضافه // مهم: برای حذف و ادیت روی combinedSensors
}) {
  // حذف سنسور از آرایه‌ی ترکیبی
  const handleDeleteSensor = (index) => {
    setSensorList((prev) => prev.filter((_, i) => i !== index));
  };

  const renderSensorItem = (item, index) => (
   <div
  key={item.ID || index}
  onClick={() => onEdit(index)} // ⭐ این خط
  className="flex justify-between items-center p-2 rounded shadow cursor-pointer hover:bg-gray-50"
>
      {/* Left */}
      <div className="text-xs text-text-title flex items-center gap-2">
        <div className="p-1.5 bg-background-modal-header shadow-[0px_0px_4px_0px_#0000000D] w-fit rounded">
          <Image
            src="/images/icons/nodes/img.png"
            alt="sensor"
            width={26}
            height={26}
          />
        </div>
        <p>{item.sensorName || "بدون نام"}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <p className="text-text-title text-xs font-normal py-1 px-2 rounded bg-[#599DE81A] w-fit">
          {item.mqttValue || "—"}
        </p>

        <p
          className={`text-text-title text-xs font-normal py-1 px-2 rounded w-fit ${
            item.status === "pending"
              ? "bg-[#20E0801A]"
              : item.status === "scanned"
              ? "bg-[#FFD70033]"
              : "bg-[#20E0801A]"
          }`}
        >
          {item.status === "pending"
            ? "ثبت نشده"
            : item.status === "scanned"
            ? "اسکن شده"
            : "ثبت شد"}
        </p>

        {/* Delete for all */}
<button
  onClick={(e) => {
    e.stopPropagation();
    handleDeleteSensor(index);
  }}
>          <Trash2 size={18} color="#606060" strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-2/5 p-1 flex flex-col gap-2 border-r border-[#E0E0E2]">
      <div className="bg-background-modal-header flex items-center gap-2 px-3 py-6 rounded">
        <Image
          src="/images/icons/nodes/sensor.png"
          alt="sensor"
          width={36}
          height={36}
        />
        <p className="text-text-title text-lg font-normal">سنسورها</p>
      </div>

      {/* All sensors */}
      {sensorList.map((item, index) => renderSensorItem(item, index))}

      <div className="py-3 px-4 flex flex-col gap-2">
        {scanStatus === "loading" && (
          <p className="text-sm text-blue-500">⏳ در حال اسکن سنسورها...</p>
        )}
        {scanStatus === "success" && (
          <p className="text-sm text-green-500">✅ اسکن سنسورها موفق بود</p>
        )}
        {scanStatus === "fail" && (
          <p className="text-sm text-red-500">❌ اسکن سنسورها ناموفق بود</p>
        )}

        <button
          onClick={handleSensorScan}
          className="bg-[#599DE833] rounded text-sx font-normal text-text-tertiary w-full p-4 flex gap-1.5 items-center justify-center"
        >
          <Search />
          <p> جستجوی خودکار سنسور</p>
        </button>
      </div>
    </div>
  );
}