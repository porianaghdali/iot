"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell, Copy, Delete, Edit, ListFilter, Trash } from "lucide-react";

import DevicesHeader from "./devicesHeader";
import AddNodeModal from "./addNode/modal";
import EditNodeModal from "./editNode/modal";
import Dialog from "@/components/ui/dialog";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { useNodes } from "@/hooks/useNodes";
import { initialNodeFormData, tableHeaders } from "./dummy";

export default function Systems() {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Form steps
  const [createStep, setCreateStep] = useState(1);
  const [editStep, setEditStep] = useState(1);

  // Form data
  const [nodeFormData, setNodeFormData] = useState(initialNodeFormData);

  const { nodes, loading, fetchNodes, createNode, deleteNode } =
    useNodes(token);

  useEffect(() => {
    fetchNodes();
  }, []);

  // Handle form input changes
  const handleChange = (path, value) => {
    setNodeFormData((prev) => {
      const updated = { ...prev };
      let current = updated;

      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] };
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;
      return updated;
    });
  };

  // Modal handlers
  const openCreateModal = () => setIsCreateModalOpen(true);
  const openEditModal = (node) => {
    setNodeFormData(node);
    setIsEditModalOpen(true);
  };

  const closeCreateModal = () => {
    setNodeFormData(initialNodeFormData);
    setCreateStep(1);
    setIsCreateModalOpen(false);
  };

  const closeEditModal = () => {
    setNodeFormData(initialNodeFormData);
    setEditStep(1);
    setIsEditModalOpen(false);
  };

  // Save node
  const saveNode = async () => {
    const newId = await createNode(nodeFormData);
    if (newId) {
      setNodeFormData((prev) => ({ ...prev, ID: newId }));
    }
    return newId;
  };
  // اضافه کردن تابع کپی نود
  const copyNode = (node) => {
    const copiedNode = { ...node, ID: "", deviceName: "" }; // پاک کردن ID و اسم
    setNodeFormData(copiedNode);
    setCreateStep(1); // اگر فرم چندمرحله‌ایه، مرحله اول باشه
    setIsCreateModalOpen(true); // باز کردن مودال ساخت
  };
  if (loading) return <div>loading...</div>;
    return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto">
      <DevicesHeader openCreateModal={openCreateModal} />

      {/* Filter Section */}
      <div className="flex items-center justify-between bg-background-box p-3 w-full">
        <div className="flex items-center gap-2.5">
          <select
            name="zone"
            className="border border-border-muted rounded-sm w-[114px] text-text-tertiary text-xs font-normal"
          >
            <option value="ناحیه">ناحیه</option>
          </select>
          <button className="text-xs font-normal flex items-center gap-2">
            <ListFilter size={18} />
            <p className="text-[#0000004D]">فیلتر</p>
          </button>
        </div>
      </div>

      {/* Nodes Table */}
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead>
            <tr>
              <th className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal">
                <div className="w-4 h-4 rounded-xs border mx-auto border-[#9E9E9E]"></div>
              </th>
              {tableHeaders.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal"
                >
                  {header.title}
                </th>
              ))}
              <th className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal"></th>
            </tr>
          </thead>

          <tbody>
            {nodes.map((node, index) => (
              <tr key={node.ID}>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  <div className="w-4 h-4 rounded-xs border border-[#9E9E9E] mx-auto"></div>
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {index + 1}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.deviceName}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.zone.zoneName}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.ip}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.protocol}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node?.sensors.length || "-"}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.lastLogin}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.active}
                </td>
                <td className="border-b border-border-main text-center text-text-tertiary text-xs font-normal">
                  <div className="flex  justify-between px-4 py-3 ">
                    <button>
                      <Bell size={18} className="mx-auto cursor-pointer" />
                    </button>
                    <button onClick={() => openEditModal(node)}>
                      <Edit size={18} className="mx-auto cursor-pointer" />
                    </button>
                    <button onClick={() => copyNode(node)}>
                      <Copy size={18} className="mx-auto cursor-pointer" />
                    </button>
                    <button onClick={() => deleteNode(node.ID)}>
                      <Trash size={18} className="mx-auto cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddNodeModal
        open={isCreateModalOpen}
        formData={nodeFormData}
        step={createStep}
        handleSaveNode={saveNode}
        setStep={setCreateStep}
        handleClose={closeCreateModal}
        handleChange={handleChange}
        setFormData={setNodeFormData}
      />

      <EditNodeModal
        open={isEditModalOpen}
        formData={nodeFormData}
        step={editStep}
        setStep={setEditStep}
        handleClose={closeEditModal}
        handleSaveNode={saveNode}
        handleChange={handleChange}
        setFormData={setNodeFormData}
      />
    </div>
  );
}
