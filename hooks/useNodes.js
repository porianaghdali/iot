"use client"
import { useState } from "react";
import { DeleteNodes, getNodes, setNodes } from "../app/api/fetchNode"; // setNodes اضافه شد

export function useNodes(token) {
  const [nodes, setNodesState] = useState([]); // تغییر اسم به setNodesState برای جلوگیری از تداخل

  const getNodesList = async () => {
    const res = await getNodes({ token });
    if (res?.errorCode === 0) setNodesState(res.data);
  };

  const createNode = async (formData) => {
    const res = await setNodes({ formData, token });
    if (res?.errorCode === 0) {
      await getNodesList();
      return res.ID;
    }
  };

  const deleteNode = async (ID) => {
    const res = await DeleteNodes({ ID,  token});
    if (res?.errorCode === 0) await getNodesList();
  };

  return { nodes, getNodesList, createNode, deleteNode };
}
