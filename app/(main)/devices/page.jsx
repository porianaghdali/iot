"use client";
import DevicesHeader from "./devicesHeader";
import { Bell, Copy, Delete, Edit, ListFilter } from "lucide-react";
import AddNodeModal from "./addNode/modal";
import EditNodeModal from "./editNode/modal";
import { getTokenFromCookie } from "@/utils/functions/auth";
import { useNodes } from "@/hooks/useNodes";
import { useEffect, useMemo, useState } from "react";

const initialNodeFormData = {
  ID: "",
  deviceName: "",
  active: "",
  ip: "",
  mac: "",
  zone: "",
  protocol: "",
  interval: "",
  config: {
    version: "",
    port: "",
    slaveID: "",
    authProtocol: "",
    authUser: "",
    authPass: "",
    privProtocol: "",
    privPass: "",
    community: "",
  },
};

const tableHeaders = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, title: "ناحیه" },
  { id: 4, title: "IP" },
  { id: 5, title: "نوع" },
  { id: 6, title: "Community" },
  { id: 7, title: "آخرین اتصال" },
  { id: 8, title: "وضعیت" },
];

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

  const { nodes, loading, error, fetchNodes, createNode, deleteNode } =
    useNodes(token);

  useEffect(() => {
    fetchNodes();
  }, []);

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
  //Modal handler
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
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
  //Save Node
  const saveNode = async () => {
    const newId = await createNode(nodeFormData);
    if (newId) {
      setNodeFormData((prev) => ({ ...prev, ID: newId }));
    }
    return newId;
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
                  {node.zone}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.ip}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.protocol}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.config?.community || "-"}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.lastLogin}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {node.active}
                </td>
                <td className="border-b border-border-main text-center text-text-tertiary text-xs font-normal">
                  <div className="flex gap-4 px-4 py-3">
                    <button onClick={() => deleteNode(node.ID)}>
                      <Bell size={16} className="mx-auto cursor-pointer" />
                    </button>
                    <button onClick={() => openEditModal(node)}>
                      <Edit size={16} className="mx-auto cursor-pointer" />
                    </button>

                    <button onClick={() => deleteNode(node.ID)}>
                      <Copy size={16} className="mx-auto cursor-pointer" />
                    </button>
                    <button onClick={() => deleteNode(node.ID)}>
                      <Delete size={16} className="mx-auto cursor-pointer" />
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
        formData={nodeFormData}
        open={isEditModalOpen}
        step={editStep}
        setStep={setEditStep}
        handleClose={closeEditModal}
        handleChange={handleChange}
      />
    </div>
  );
}
