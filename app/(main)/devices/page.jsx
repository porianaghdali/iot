"use client";
import DevicesHeader from "./devicesHeader";
import { Delete, Edit, ListFilter } from "lucide-react";
import AddNodeModal from "./addNode/modal";
import EditNodeModal from "./editNode/modal";

import { getTokenFromCookie } from "@/utils/functions/auth";
import { useNodes } from "@/hooks/useNodes";
import { useEffect, useMemo, useState } from "react";

const initialFormData = {
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

const list = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, title: "ناحیه " },
  { id: 4, title: "IP" },
  { id: 5, title: "نوع" },
  { id: 6, title: "Community" },
  { id: 7, title: " آخرین اتصال" },
  { id: 8, title: "وضعیت" },
];
export default function Systems() {
  const token = useMemo(() => getTokenFromCookie("token"), []);

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  // steps
  const [step, setStep] = useState(1);
  const [editStep, setEditStep] = useState(1);

  // forms
  const [formData, setFormData] = useState(initialFormData);

  const { nodes, getNodesList, deleteNode } = useNodes(token);





  useEffect(() => {
    getNodesList();
  }, []);

  



 const handleChange = (path, value) => {
    setFormData((prev) => {
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
  const handleOpenEdit = (item) => {
    setFormData(item);
    setIsOpenEdit(true);
  };
  const handleClose = () => {
    setFormData(initialFormData);
    setStep(1);
    setIsOpen(false);
  };

  const handleEditClose = () => {
    setFormData(initialFormData);
    setEditStep(1);
    setIsOpenEdit(false);
  };

  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      {/* //header */}
      <DevicesHeader setIsOpen={setIsOpen} />
      {/* //filter section */}
      <div className="flex items-center justify-between bg-background-box  p-3 w-full">
        <div className="flex items-center  gap-2.5 ">
          <select
            name="1"
            id=""
            className="border border-border-muted rounded-sm w-[114px] text-text-tertiary text-xs font-normal"
          >
            <option value="ناحیه">ناحیه</option>
          </select>
          <button className="   text-xs font-normal flex items-center gap-2">
            <ListFilter size={18} />
            <p className="text-[#0000004D]">فیلتر</p>
          </button>
        </div>
        <button className="text-text-title font-normal text-xs border border-border-muted px-3 py-1.5 rounded-sm ">
          تنظیم میانگین
        </button>
      </div>
      {/* //table nodes */}
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead className="">
            <tr>
              <th className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal">
                <div className="w-4 h-4 rounded-xs border mx-auto border-[#9E9E9E]"></div>
              </th>
              {list.map((item) => (
                <th
                  key={item.id}
                  className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal"
                >
                  {item.title}
                </th>
              ))}
              <th className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((item, key) => (
              <tr key={item.ID}>
                <td className="border-b border-border-main px-4 py-3 text-center  text-text-tertiary text-xs font-normal">
                  <div className="w-4 h-4 rounded-xs border border-[#9E9E9E] mx-auto"></div>
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {key + 1}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.deviceName}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.zone}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.ip}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.protocol}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.config?.community ? item.config.community : "-"}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.lastLogin}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.active}
                </td>
                <td className="border-b border-border-main  text-center text-text-tertiary text-xs font-normal">
                  <div className=" flex gap-4  px-4 py-3 ">
                    <button onClick={() => handleOpenEdit(item)}>
                      <Edit size={16} className="mx-auto cursor-pointer" />
                    </button>

                    <button onClick={() => deleteNode(item.ID)}>
                      <Delete size={16} className="mx-auto cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddNodeModal
        formData={formData}
        open={isOpen}
        step={step}
        setStep={setStep}
        handleClose={handleClose}
        handleChange={handleChange}
        setFormData={setFormData}
      />

      <EditNodeModal
        formData={formData}
        open={isOpenEdit}
        step={editStep}
        setStep={setEditStep}
        handleClose={handleEditClose}
        handleChange={handleChange}
      />
    </div>
  );
}
