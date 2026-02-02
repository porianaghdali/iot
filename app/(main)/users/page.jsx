"use client";
import { useState } from "react";
import AddUserModal from "./addNode/modal";
import UsersHeader from "./usersHeader";
import { Edit, ListFilter } from "lucide-react";

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

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
      name: "ali",
      username: "mohammad",
      role: "مدیر",
      phone: "09123456789",
      email: "mohammad@",
      lastLogin: "2023-01-01",
      status: "فعال",
    },
  ];
  const columns = [
    { key: "row" },
    { key: "name" },
    { key: "username" },
    { key: "role" },
    { key: "phone" },
    { key: "email" },
    { key: "lastLogin" },
    { key: "status" },
  ];
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <UsersHeader setIsOpen={setIsOpen} />

      <button className="border-b border-border-main p-3 w-full bg-background-box text-xs font-normal flex items-center gap-2">
        <ListFilter size={18} />
        <p className="text-[#0000004D]">فیلتر</p>
      </button>
      <div>
        <table className="min-w-full border border-gray-300 bg-background-box">
          <thead className="">
            <tr>
              <th className="border-b border-border-main px-4 py-3 text-center text-text-title text-xs font-normal">
                <div className="w-4 h-4 rounded-xs border mx-auto border-[#9E9E9E]"></div>
              </th>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-border-main px-4 py-3 text-center">
                  <div className="w-4 h-4 rounded-xs border border-[#9E9E9E] mx-auto" />
                </td>

                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs font-normal"
                  >
                    {item[col.key]}
                  </td>
                ))}

                <td className="border-b border-border-main px-4 py-3 text-center text-text-tertiary text-xs  font-normal">
                  <button>
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUserModal
        handleClose={handleClose}
        open={isOpen}
        step={step}
        setStep={setStep}
      />
    </div>
  );
}
