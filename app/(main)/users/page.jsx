import UsersHeader from "./components/usersHeader";
import { Edit, ListFilter } from "lucide-react";
export default function Users() {
  const list = [
    { id: 1, title: "ردیف" },
    { id: 2, title: "نام" },
    { id: 3, title: "نام کاربری" },
    { id: 4, title: "نقش" },
    { id: 5, title: "همراه" },
    { id: 6, title: "ایمیل" },
    { id: 7, title: "آخرین ورود" },
    { id: 8, title: "وضعیت" },
  ];
  const data = [
    {
      id: 1,
      row: 1,
      name: "محمد",
      username: "mohammad",
      role: "مدیر",
      phone: "09123456789",
      email: "mohammad@",
      lastLogin: "2023-01-01", 
      status: "فعال",
    },
    {
      id: 2,
      row: 2,
      name: "محمد",
      username: "mohammad",
      role: "مدیر",
      phone: "09123456789",
      email: "mohammad@",
      lastLogin: "2023-01-01",
      status: "فعال",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F7] h-[calc(100vh-64px)] overflow-auto ">
      <UsersHeader />
      <button className="border-b border-[#00000033] p-3 w-full bg-white   text-xs font-normal flex items-center gap-2">
        <ListFilter size={18} />
        <p className="text-[#0000004D]">فیلتر</p>          
      </button>
      <div>
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="">
            <tr>
              <th className="border-b border-[#00000033] px-4 py-3 text-center text-[#0D0D0D] text-xs font-normal">
               <div className="w-4 h-4 rounded-xs border mx-auto border-[#9E9E9E]"></div>
              </th>
              {list.map((item) => (
                <th
                  key={item.id}
                  className="border-b border-[#00000033] px-4 py-3 text-center text-[#0D0D0D] text-xs font-normal"
                >
                  {item.title}
                </th>
              ))}
              <th className="border-b border-[#00000033] px-4 py-3 text-center text-[#0D0D0D] text-xs font-normal">
                2
              </th>
            </tr>
          </thead>
          <tbody>
            {/* مثال ردیف داده */}
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-[#00000033] px-4 py-3 text-center  text-[#606060] text-xs font-normal">
                  <div className="w-4 h-4 rounded-xs border border-[#9E9E9E] mx-auto"></div>
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.row}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.name}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.username}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.role}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.phone}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.email}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.lastLogin}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs font-normal">
                  {item.status}
                </td>
                <td className="border-b border-[#00000033] px-4 py-3 text-center text-[#606060] text-xs  font-normal">
                  <Edit  size={14} className="mx-auto"/>
                </td>
              </tr>
            ))}
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
