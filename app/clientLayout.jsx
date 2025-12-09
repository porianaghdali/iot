"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sideBar";

export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar");

    if (saved !== null) {
      setIsOpen(saved === "true");
    } else {
      setIsOpen(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("sidebar", isOpen);
  }, [isOpen]);

  if (isOpen === null) {
    return null;
  }

  return (
    <div>
      <Header toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex">
        <Sidebar isOpen={isOpen} />
        <div className=" w-full h-[calc(100vh-64px)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
