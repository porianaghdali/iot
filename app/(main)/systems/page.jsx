import Alert from "./components/alert";
import Section from "./components/section";
import SystemsHeader from "./systemsHeader";
import { Edit, ListFilter } from "lucide-react";
export default function Systems() {
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
    const data = [1, 2, 3, 4];

  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <SystemsHeader />
      
       <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-1.5 p-4">
              <div className="lg:col-span-4 grid gap-1.5">
                {data.map((item) => {
                  return (
                    <div key={item} className="">
                      <Section />
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
