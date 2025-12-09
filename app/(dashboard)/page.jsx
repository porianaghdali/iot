import Areas from "./components/areas";
import DashboardHeader from "./dashboardHeader";
import SoftwareRoom from "./components/softwareRoom";
import Store from "./components/store";
import ServerRoom from "./components/serverRoom";
import Systems from "./components/systems";
import Card from "./components/card";
import Create from "./components/create";
export default function Home() {
  return (
    <div className="w-full bg-[#F5F5F7] ">
      <DashboardHeader />
      <div className="p-4 flex gap-1.5 w-full">
        <div className="flex flex-col gap-1.5">
          <Areas />
          <ServerRoom />
        </div>
        <div className="flex flex-col gap-1.5">
          <SoftwareRoom />
          <Systems />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col gap-1.5">
          <Store /> <Card />
          <Card />
          <Create/>
        </div>
      </div>
    </div>
  );
}