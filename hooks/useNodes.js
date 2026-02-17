"use client";
import { useState } from "react";
import {
  DeleteNodes as deleteNodeApi,
  getNodes as fetchNodesApi,
  setNodes as createNodeApi,
} from "../app/api/fetchNode";

export function useNodes(token) {
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Fetch all nodes
  const fetchNodes = async (zone) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchNodesApi({ token,zone });

      if (res?.errorCode === 0) {
        setNodes(res.data || []);
      } else {
        setNodes([]);
      }
    } catch (err) {
      setError(err);
      setNodes([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Create new node
  const createNode = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createNodeApi({ formData, token });

      if (res?.errorCode === 0) {
        await fetchNodes(); // refresh list
        return res.ID;
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete node
  const deleteNode = async (ID) => {
    setLoading(true);
    setError(null);

    try {
      const res = await deleteNodeApi({ ID, token });

      if (res?.errorCode === 0) {
        await fetchNodes();
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    nodes,
    loading,
    error,
    fetchNodes,
    createNode,
    deleteNode,
  };
}
