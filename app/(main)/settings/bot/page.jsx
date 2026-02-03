import BotHeader from "./botHeader";
import { Trash2, ListFilter } from "lucide-react";
export default function Bot() {
  const list = [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام" },
    { id: 3, title: "نام کاربری " },
    { id: 4, title: "پلتفرم" },
    { id: 5, title: "چت آیدی" },

    { id: 6, title: "وضعیت" },
  ];
  const data = [
    {
      id: 1,

      name: "محمد",
      username: "mohammad",
      platform: "تلگرام",
      chatId: "1449001266",

      status: "مجاز",
    },
    {
      id: 2,

      name: "محمد",
      username: "mohammad",
      platform: "تلگرام",
      chatId: "1449001266",

      status: "غیر مجاز",
    },
  ];
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <BotHeader />
      <div className="flex items-center justify-between bg-background-box border-b border-border-main p-3 w-full">
        <button className="   text-xs font-normal flex items-center gap-2">
          <ListFilter size={18} />
          <p className="text-[#0000004D]">جستجو</p>
        </button>
      </div>
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead className="">
            <tr>
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
              <tr key={item.id}>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.id}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.name}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.username}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.platform}
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  {item.chatId}
                </td>

                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal">
                  <select
                    className={`border rounded text-text-title text-[10px] font-normal w-[58px] ${
                      item.status === "مجاز" ? "bg-[#20E0801A] border-green" : "bg-[#FF46461A] border-red"
                    }`}
                    name={item.status}
                    id={item.status}
                  >
                    <option value={item.status}>{item.status}</option>
                  </select>
                </td>
                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs  font-normal">
                  <Trash2 size={14} className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
