"use client";
import Card from "./components/card";
import AreasHeader from "./areasHeader";
import { useEffect, useMemo, useState } from "react";
import { getTokenFromCookie } from "@/utils/functions/auth.js";
import { useZones } from "@/hooks/useZones";
import { getZone } from "../../api/fetchZone";
import AddZoneModal from "./addZone/modal";
const initialZoneFormData = {
  ID: "",
  zoneName: "",
  active: 1,
  // type: "",
};
export default function Areas() {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [zoneFormData, setZoneFormData] = useState(initialZoneFormData);
  const { zones, getZonesList, createZone, loading, error } = useZones(token);
  const handleZoneChange = (e) => {
    const { name, value } = e.target;

    setZoneFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (token) getZonesList();
  }, [token]);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  const handleCreateZone = async () => {
    await createZone(zoneFormData);

    setZoneFormData(initialZoneFormData);
    closeCreateModal();
  };

  if (loading) return <div>loading...</div>;
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <AreasHeader openCreateModal={openCreateModal} />
      <AddZoneModal
        onSubmit={handleCreateZone}
        open={isCreateModalOpen}
        handleChange={handleZoneChange}
        closeCreateModal={closeCreateModal}
        formData={zoneFormData}
      />

      <div className="p-4 flex gap-1.5 w-full ">
        <div className="grid grid-cols-3 gap-1.5 w-full">
          {zones.length ? (
            zones.map((zone) => <Card key={zone.ID} zone={zone} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              هیچ منطقه‌ای موجود نیست
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
