"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function SensorList({
  sensorList = [],
  pendingSensors = [],
  setPendingSensors,
}) {
  const handleDeletePending = (indexToDelete) => {
    setPendingSensors((prev) =>
      prev.filter((_, i) => i !== indexToDelete),
    );
  };

  // Render single item
  const renderSensorItem = (item, index, isPending = false) => (
    <div
      key={`${isPending ? "pending" : "saved"}-${item.ID || index}`}
      className="flex justify-between items-center p-2 rounded shadow-[0px_0px_4px_0px_#0000001A]"
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
        {/* Example ID / Code */}
        <p className="text-text-title text-xs font-normal py-1 px-2 rounded bg-[#599DE81A] w-fit">
          {item.mqttValue || "—"}
        </p>

        {/* Status */}
        <p
          className={`text-text-title text-xs font-normal py-1 px-2 rounded w-fit ${
            isPending
              ? "bg-[#20E0801A]"
              : "bg-[#20E0801A]"
          }`}
        >
          {isPending ? "ثبت نشده" : "ثبت شد"}
        </p>

        {/* Delete only for pending */}
        {isPending && (
          <button onClick={() => handleDeletePending(index)}>
            <Trash2 size={18} color="#606060" strokeWidth={1.25} />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-2/5 p-1 flex flex-col gap-2 border-r border-[#E0E0E2]">
      {/* Header */}
      <div className="bg-background-modal-header flex items-center gap-2 px-3 py-6 rounded">
        <Image
          src="/images/icons/nodes/sensor.png"
          alt="sensor"
          width={36}
          height={36}
        />
        <p className="text-text-title text-lg font-normal">
          سنسورهای ثبت شده
        </p>
      </div>

      {/* Pending Sensors (local) */}
      {pendingSensors.map((item, index) =>
        renderSensorItem(item, index, true),
      )}

      {/* Saved Sensors (server) */}
      {sensorList.map((item, index) =>
        renderSensorItem(item, index, false),
      )}
    </div>
  );
}
