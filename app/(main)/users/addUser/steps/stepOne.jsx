import CustomInput from "../../../../../components/ui/customInput";
import CustomSelect from "../../../../../components/ui/customSelect";

export default function StepOne({ formData, handleChange }) {
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">نام</label>

        <CustomInput
          placeholder="نام را وارد کنید"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(["name"], e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal">
          {" "}
          نام کاربری
        </label>

        <CustomInput
          id="username"
          placeholder=" نام کاربری را وارد کنید"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(["username"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
        <label className="text-text-title text-sm font-normal"> رمز عبور</label>
        <CustomInput
          id="password"
          name="password"
          placeholder="رمز عبور خود را وارد کنید"
          value={formData.password}
          onChange={(e) => handleChange(["password"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
        <label className="text-text-title text-sm font-normal"> ایمیل</label>
        <CustomInput
          id="email"
          name="email"
          placeholder="ایمیل  خود را وارد کنید"
          value={formData.email}
          onChange={(e) => handleChange(["email"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2] ">
        <label className="text-text-title text-sm font-normal">
          {" "}
          تلفن همراه
        </label>
        <CustomInput
          id="mobile"
          name="mobile"
          placeholder="شماره همراه را وارد کنید"
          value={formData.mobile}
          onChange={(e) => handleChange(["mobile"], e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between px-3 py-3.5 border-b border-[#E0E0E2]">
        <label className="text-text-title text-sm font-normal"> نقش</label>
        <CustomSelect
          options={[]}
          value={3}
          onChange={(e) => handleChange(["role"], e.target.value)}
          placeholder=" نقش را انتخاب کنید"
        />{" "}
      </div>
    </div>
  );
}
