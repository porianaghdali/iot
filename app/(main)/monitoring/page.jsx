import Card from "./components/card";
import Alert from "./components/alerts"
import MonitoringHeader from "./monitoringHeader";
export default function Monitoring() {
  const data = [1, 2, 3, 4];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <MonitoringHeader />

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-1.5 p-4">
        <div className="lg:col-span-4 grid gap-1.5">
          {data.map((item) => {
            return (
              <div key={item} className="">
                <Card />
              </div>
            );
          })}
        </div>
        <div className="col-span-1 ">
          <Alert />
        </div>
      </div>
    </div>
  );
}
