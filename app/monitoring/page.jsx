import { EllipsisVertical } from "lucide-react";
import Card from "./components/card";
import MonitoringHeader from "./monitoringHeader";
import Alert from "./components/alerts";
export default function Monitoring() {
  return (
    <div className="w-full bg-[#F5F5F7] h-[calc(100vh-64px)] overflow-auto ">
      <MonitoringHeader />
      <div className="p-4 flex gap-1.5 w-full ">
        <div className="grid grid-cols-5 gap-1.5">
          <div className="col-span-4 grid gap-1.5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="fixed left-4 w-1/5 max-w-[283px]">
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
}
