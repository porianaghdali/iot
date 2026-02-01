import SystemsHeader from "./components/dataBaseHeader";
import { Trash2, ListFilter, Volume, Download, Database } from "lucide-react";
export default function DataBase() {
  const list = [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام" },
    { id: 3, title: " تاریخ " },
    { id: 4, title: "حجم" },
  ];
  const data = [
    {
      id: 1,

      name: "1764351495-manual.sql.gz",
      date: "1404/04/07 - 14:33",
      Volume: "54.00 MB",
    },
    {
      id: 2,

      name: "1764351495-manual.sql.gz",
      date: "1404/04/07 - 14:33",
      Volume: "54.00 MB",
    },
  ];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <SystemsHeader />
      <div className="flex items-center justify-between bg-background-box border-b border-border-main p-3 w-full">
        <button className="   text-xs font-normal flex items-center gap-2">
          <ListFilter size={18} />
          <p className="text-[#0000004D]">جستجو</p>
        </button>
      </div>
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead className="">
            <tr className="grid grid-cols-5">
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
            {/* مثال ردیف داده */}
            {data.map((item) => (
              <tr key={item.id} className="grid grid-cols-5 ">
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.id}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.name}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.date}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.Volume}
                </td>

                <td className="border-b border-border-main flex items-center gap-4 px-4 py-3 text-center text-text-tertiary text-xs  font-normal">
                  <button>
                    {" "}
                    <Download size={18} />{" "}
                  </button>
                  <button>
                    {" "}
                    <Database size={18} />
                  </button>
                  <button>
                    {" "}
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
