"use client";
import { useState } from "react";
import SystemHeader from "./systemHeader";
import Details from "./components/details";
import Resource from "./components/resource";
import OID from "./components/OID";

export default function System() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <SystemHeader setSelected={setSelected} selected={selected} />

      <div className="w-full  ">
        {selected === 1 ? <Details /> : selected === 2 ? <Resource /> : selected===3?<OID/>:""}
      </div>
    </div>
  );
}
