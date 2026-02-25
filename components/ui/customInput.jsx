"use client";
import { useEffect, useState } from "react";

export default function CustomInput({
  type = "text",
  id = "",
  name = "",
  value = "",
  onChange = () => {},
  readOnly = false,
  dir = "rtl",
  textAlign = "right",
  placeholder = "",
  format = null, // 'number' | 'email' | 'phone'
}) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let val = e.target.value;

    if (format === "number") {
      // فقط اعداد مجازند
      if (/\D/.test(val)) {
        setError("لطفا فقط عدد وارد کنید");
        val = val.replace(/\D/g, ""); // غیر عددی‌ها حذف شوند
      } else {
        setError("");
      }
      e.target.value = val;
    } else if (format === "email") {
      val = val.trim().toLowerCase();
      // اعتبارسنجی اولیه ایمیل ساده
      if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setError("ایمیل معتبر نیست");
      } else {
        setError("");
      }
      e.target.value = val;
    } else if (format === "phone") {
      val = val.replace(/\D/g, "");
      if (/\D/.test(e.target.value)) {
        setError("شماره معتبر نیست");
      } else {
        setError("");
      }
      e.target.value = val;
    }

    onChange(e); // event واقعی را پاس بده
  };
  
  return (
    <div className="w-full max-w-[372px]   relative">
    <input
      className={`border p-2.5 rounded w-full max-w-[372px] focus:outline-none focus:ring-0
          ${error ? "border-red-500" : "border-border-muted"} text-${textAlign}`}
      type={type}
      id={id}
      dir={dir}
      name={name}
      value={value}
      readOnly={readOnly}
      onChange={handleChange}
      placeholder={placeholder}
    />
          {error && <p className="text-red-500 text-xs  absolute w-fit bottom-0 translate-y-[50%] right-4 bg-white">{error}</p>}</div>
  );
}
