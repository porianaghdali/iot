"use client";
import { useEffect, useState } from "react";
import DevicesHeader from "./devicesHeader";
import { Delete, Edit, ListFilter } from "lucide-react";
import { DeleteNodes, getNodes, setNodes } from "../../api/fetchNode";
import { getTokenFromCookie } from "@/utils/functions/auth.js";
import AddDeviceModal from "./addNode/modal";
import { getZone } from "../../api/fetchZone";
const initialFormData = {
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
export default function Systems() {
  const [isOpen, setIsOpen] = useState(false);
  const token = getTokenFromCookie("token");
  const [step, setStep] = useState(1);

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
  const [formData, setFormData] = useState({
    // ID: "ID",
    deviceName: "",
    active: "",
    ip: "",
    mac: "",
    zone: "",
    protocol: "",
    interval: "",
    config: {
      version: " ",
      port: "",
      slaveID: "",
      authProtocol: "",
      authUser: "",
      authPass: "",
      privProtocol: "",
      privPass: "",
      community: "",
    },
  });
  const [sensorList, setSensorList] = useState([]);
  const [sensorTypeList, setSensorTypeList] = useState([]);
  const [zoneList, setZoneList] = useState([]);

  const [sensorData, setSensorData] = useState({
    ID: "",
    type: "",
    node: "",
    sensorName: "",
    dataType: "",
    dataAddress: "",
    oid: "",
    historySave: false,
    active: false,
  });
  const [nodesList, setNodesList] = useState([]);
  // nodes actions
  const handleGetNodes = async () => {
    const token = getTokenFromCookie("token");

    try {
      const response = await getNodes({ token });

      if (response?.errorCode === 0) {
        setNodesList(response.data);
      }
    } catch (error) {
      console.error("Get nodes failed:", error);
    } finally {
    }
  };
  const handleSetNodes = async () => {
    try {
      const response = await setNodes({ formData, token });

      if (response?.errorCode === 0) {
        console.log(response, "test node");
        setSensorData((prev) => ({
          ...prev,
          node: response.ID,
        }));
        handleGetNodes();
      } else {
      }
    } catch (error) {}
  };
  const handleDeleteNodes = async (e) => {
    const token = getTokenFromCookie("token");

    const ID = e.currentTarget.id;

    console.log("Deleting node with ID:", ID);

    try {
      const response = await DeleteNodes({ token, ID });

      if (response?.errorCode === 0) {
        console.log("Deleted successfully:", response.data);
        handleGetNodes();
      } else {
        console.error("Error deleting node:", response);
      }
    } catch (error) {
      console.error("API call failed:", error);
    }
  };
  //handle formData
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
  //sensors actions
  const handleSensorChange = (e) => {
    const { name, value } = e.target;

    setSensorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleGetSensorType = async () => {
    try {
      const response = await getSensorType({ token });

      if (response?.errorCode === 0) {
        setSensorTypeList(response.data);
      } else {
      }
    } catch (error) {}
  };
  const handleGetSensorList = async () => {
    console.log("test sens");
    try {
      const response = await getSensorList({ token });

      if (response?.errorCode === 0) {
        setSensorList(response.data);
      } else {
      }
    } catch (error) {}
  };
  const handleSetSensor = async () => {
    try {
      const token = getTokenFromCookie("token"); // اسم کوکی توکنت

      const response = await setSensor({ formData: sensorData, token });

      if (response?.errorCode === 0) {
        handleGetSensorList();
      } else {
      }
    } catch (error) {}
  };
  //handle zone actions
  const handleGetZone = async () => {
    try {
      const response = await getZone({ token });

      if (response?.errorCode === 0) {
        setZoneList(response.data);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleGetSensorType();
    handleGetZone();
    handleGetSensorList();
  }, []);
  useEffect(() => {
    handleGetNodes();
  }, []);
  const handleClose = () => {
    setFormData(initialFormData);
    setStep(1);
    setIsOpen(false);
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
            {nodesList.map((item, key) => (
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
                <td className="border-b border-border-main px-4 flex gap-1 py-3 text-center text-text-tertiary text-xs  font-normal">
                  <button>
                    <Edit size={14} className="mx-auto cursor-pointer" />
                  </button>
                  <button id={item.ID} onClick={handleDeleteNodes}>
                    <Delete size={14} className="mx-auto cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddDeviceModal
        formData={formData}
        open={isOpen}
        step={step}
        sensorList={sensorList}
        setSensorList={setSensorList}
        setStep={setStep}
        sensorTypeList={sensorTypeList}
        setSensorTypeList={setSensorTypeList}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSetNodes={handleSetNodes}
        handleSetSensor={handleSetSensor}
        handleSensorChange={handleSensorChange}
        zoneList={zoneList}
        setZoneList={setZoneList}
        sensorData={sensorData}
        setSensorData={setSensorData}
      />
    </div>
  );
}
