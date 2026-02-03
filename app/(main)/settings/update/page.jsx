"use client";
import Image from "next/image";
import UpdateHeader from "./updateHeader";
import { useState } from "react";

export default function Update() {
  const [section, setSection] = useState(1);
  const [progressPercent, setProgressPercent] = useState(0);

  const progress = [
    { title: "در حال دانلود", img: "/images/update/Download.png", id: 1 },
    { title: "جایگذاری", img: "/images/update/Placement.png", id: 2 },
    { title: "راه اندازی", img: "/images/update/Launch.png", id: 3 },
  ];

  const getActiveStep = (percent) => {
    if (percent < 30) return 1;
    if (percent < 60) return 2;
    return 3;
  };

  const activeStep = getActiveStep(progressPercent);
  const isFinished = progressPercent === 100;

  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto">
      <UpdateHeader />

      {section === 1 ? (
        /* ---------------- SECTION 1 ---------------- */
        <div className="p-4 flex flex-col gap-1.5 w-full">
          <div className="bg-white p-10 rounded-xs">
            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                src="/images/update/update.png"
                height={182}
                width={149}
                alt="update"
              />

              <p className="text-black text-lg font-normal">
                به‌روز رسانی جدید در دسترس است
              </p>

              <button
                onClick={() => {
                  setSection(2);
                  setProgressPercent(0);
                }}
                className="text-white font-normal text-lg p-2 bg-[#FF4A69] rounded-[50px] w-40"
              >
                به‌روز رسانی
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ---------------- SECTION 2 ---------------- */
        <div className="p-4 flex flex-col gap-1.5 w-full">
          <div className="bg-white p-10 rounded-xs grid gap-17">
            {/* مراحل */}
            <div className="flex justify-between w-[80%] mx-auto">
              {progress.map((item) => {
                const isCompleted = isFinished || item.id < activeStep;
                const isDisabled = !isFinished && item.id > activeStep;

                return (
                  <div key={item.id} className="grid gap-6">
                    <div
                      className={`rounded p-13 w-fit relative transition-all
                        ${
                          isCompleted
                            ? "bg-[#20E0801A] border border-[#20E080]"
                            : "bg-background-modal-header border border-transparent"
                        }
                      `}
                    >
                      {isDisabled && (
                        <div className="absolute inset-0 bg-white opacity-50 z-10 rounded"></div>
                      )}

                      <Image
                        src={item.img}
                        alt={item.title}
                        width={94}
                        height={94}
                      />
                    </div>

                    <p className="text-center text-text-title text-lg font-normal">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* نوار پیشرفت یا متن پایان */}
            <div className="w-[80%] mx-auto grid gap-6">
              {!isFinished ? (
                <>
                  <div className="h-3.5 bg-[#D9D9D9] rounded-3xl w-full overflow-hidden flex justify-end">
                    <div
                      className="h-3.5 bg-blue rounded-3xl transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <p className="text-center">{progressPercent} درصد</p>
                </>
              ) : (
                <div  className="flex gap-3 items-end">
                  <Image
                    src="/images/update/updated.png"
                    alt="updated"
                    width={64}
                    height={64}
                  />
                  <p className=" text-text-title text-lg font-normal">
                    نرم افزار با موفقیت به روز رسانی شد{" "}
                  </p>
                </div>
              )}

              {/* دکمه تست */}
              {!isFinished && (
                <button
                  onClick={() =>
                    setProgressPercent((prev) => Math.min(prev + 10, 100))
                  }
                  className="mx-auto text-sm text-white bg-black px-4 py-1.5 rounded"
                >
                  +10%
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
