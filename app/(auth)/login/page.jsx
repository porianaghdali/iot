"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  fetchPreRequest,
  fetchLogin,
  fetchUserProfile,
} from "../../api/fetchLogin";
import Checkbox from "../../../components/ui/checkBox";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
    uuid: "",
  });

  async function handleCaptcha() {
    const result = await fetchPreRequest();

    setShowCaptcha(result.captcha);
    setFormData((prev) => ({ ...prev, uuid: result.uuid }));
  }

  useEffect(() => {
    handleCaptcha();
  }, []);

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  async function submitLogin() {
    setLoading(true);

    try {
      const loginResult = await fetchLogin(formData);

      if (loginResult.errorCode === 0) {
        document.cookie = `token=${loginResult.jwt}; path=/;`;
        document.cookie = `auth=${loginResult.auth}; path=/;`;

        const profileResult = await fetchUserProfile({
          token: loginResult.jwt,
        });

        localStorage.setItem("userProfile", JSON.stringify(profileResult));

        router.push("/dashboard");
      } else {
        alert(loginResult.message || "Login failed");
        setFormData({
          username: "",
          password: "",
          captcha: "",
          uuid: "",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("خطا در ارتباط با سرور");
      setLoading(false);
    }
  }

  const stepOne = (
    <div className="col-span-1">
      <div className=" flex flex-col justify-center items-center max-w-[300px] mx-auto h-full">
        <div className="flex flex-col gap-5 items-center mb-8">
          <Image
            src="/images/login/loginLogo.png"
            width={120}
            height={120}
            alt="login"
            className="w-40 h-40"
          />
          <p className="text-[22px] font-normal text-text-title">سامانه پایش محیط سپهر</p>
        </div>

        <div className="flex flex-col gap-2 items-center w-full mb-3">
          <div className="w-full relative ">
            {" "}
            <input
              className="bg-[#F5F7F9] rounded-lg w-full   p-2.5 focus:outline-none focus:ring-0 placeholder:text-border-muted"
              type="text"
              name="username"
              placeholder="نام کاربری خود را وارد کنید"
              id="username"
              value={formData.username ? formData.username : ""}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
          </div>
          <div className="w-full relative ">
            <input
              className="bg-[#F5F7F9] rounded-lg w-full  placeholder:text-border-muted p-2.5   focus:outline-none  focus:ring-0"
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="رمز عبور خود را وارد کنید"
              id="password"
              value={formData.password ? formData.password : ""}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
              className={
                !showPass
                  ? "absolute top-[50%] left-2 -translate-y-[50%] text-gray-400"
                  : "absolute top-[50%] left-2 -translate-y-[50%] "
              }
            >
              {!showPass ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {formData.uuid && showCaptcha && (
            <div className="grid grid-cols-7 items-center gap-2">
              {" "}
              <input
                type="text"
                className="bg-gray-100 rounded-lg w-full col-span-3  px-2 py-2.5"
                name="captcha"
                id="captcha"
                value={formData.captcha ? formData.captcha : ""}
                onChange={(e) => handleInputChange("captcha", e.target.value)}
              />
              <img
                className="col-span-3 h-full rounded-lg"
                src={`https://192.168.30.20/ems3/captcha?uuid=${formData.uuid}`}
                alt=""
              />
              <button
                className="bg-gray-100 rounded-lg w-full col-span-1 hover:rotate-180 flex justify-center items-center h-full "
                onClick={handleCaptcha}
              >
                <RefreshCcw
                  size={20}
                  className="hover:rotate-180 transform duration-300"
                />
              </button>
            </div>
          )}
        </div>
        
        <button
          onClick={submitLogin}
          className="bg-black text-white rounded-lg p-2.5 w-full mb-2 text-sm "
        >
          ورود به سامانه
        </button>
        <div className="flex items-center gap-2 justify-start w-full">
          <Checkbox setChecked={setRemember} checked={remember} />
          <p className={!remember ? "text-xs text-border-muted" : "text-xs"}>
            مرا به خاطر بسپار
          </p>
        </div>
      </div>
    </div>
  );
  const stepTwo = (
    <div className="col-span-1">
      <div className=" flex flex-col justify-center items-center max-w-[300px] mx-auto h-full">
        <div className="flex flex-col gap-4 items-center mb-6">
          <Image
            src="/images/loginLogo.png"
            width={1200}
            height={1200}
            alt="login"
            className=""
          />
          <p className="text-2xl"> ورود دو مرحله ای</p>
          <p>لطفا کد دو مرحله خود را وارد کنید</p>
        </div>

        <div className="grid grid-cols-6 gap-2 items-center w-full mb-3">
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="1"
            id=""
          />
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="2"
            id=""
          />
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="3"
            id=""
          />
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="4"
            id=""
          />
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="5"
            id=""
          />
          <input
            className="bg-gray-100 rounded-lg   px-2 py-2.5"
            type="text"
            name="6"
            id=""
          />
        </div>
        <button className="bg-blue text-white rounded-lg py-2 w-full mb-2 ">
          تایید{" "}
        </button>
        <div className="flex items-center gap-2 justify-start w-full">
          <p className="text-sm text-gray-300">ارسال مجدد کد ۱۴ ثانیه دیگر</p>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="w-full h-screen p-2 ">
      <div className="grid grid-cols-2 w-full max-w-[1500px] mx-auto h-full my-auto rounded-xl overflow-hidden ">
        {step == 1 ? stepOne : stepTwo}

        <div
          className="col-span-1  flex items-end p-8"
          style={{
            backgroundImage: "url(/images/login/login.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="grid gap-16">
            <p className="text-white text-xl">
              Lorem ipsum dolor sit amet consectetur adantium enim a animi
              inventore dicta soluta delectus accusantium!
            </p>
            <p className="text-white text-xl text-end">V2.4.42</p>
          </div>
        </div>
      </div>
    </div>
  );
}
