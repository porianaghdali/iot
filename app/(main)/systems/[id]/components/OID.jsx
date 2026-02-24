"use client";
import { Edit, ListFilter } from "lucide-react";

export default function OID() {
  const headers = [
    "ردیف",
    "نام دستگاه",
    "OID",
    "تایپ",
    "مقدار",
    "وضعیت",
    "عملیات",
  ];

  const userList = [
    {
      systemName: "Router-01",
      OID: "1.3.6.1.2.1",
      type: "Integer",
      value: "45",
      status: "فعال",
    },
    {
      systemName: "Router-01",
      OID: "1.3.6.1.2.1",
      type: "Integer",
      value: "45",
      status: "فعال",
    },
  ];

  const columns = ["systemName", "OID", "type", "value", "status"];

  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto">
      {/* فیلتر */}
      <div className="bg-background-box border-b  border-border-main">
      <button className=" p-3 w-fit   text-xs font-normal flex items-center gap-2">
        <ListFilter size={18} />
        <p className="text-[#0000004D]">فیلتر</p>
      </button></div>

      {/* جدول */}
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead>
            <tr>
              {headers.map((title, i) => (
                <th
                  key={i}
                  className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {userList.map((item, index) => (
              <tr key={index}>
                {/* ردیف */}
                <td className="border-b border-border-main px-4 py-3 text-center text-sx text-text-tertiary">
                  {index + 1}
                </td>

                {/* داده‌ها */}
                {columns.map((col) => (
                  <td
                    key={col}
                    className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal"
                  >
                    {item[col]}
                  </td>
                ))}

                {/* عملیات */}
                <td className="border-b border-border-main px-4 py-3 text-center">
                  <button>
                    <Edit size={18} />
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
