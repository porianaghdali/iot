"use client"
import { ArrowDown, ArrowUp } from "lucide-react";
import ChartsHeader from "./chartsHeader";
import Image from "next/image";
import Filter from "./components/filter";
import LineChart from "../../../components/utils/charts/line";
export default function Charts() {
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <ChartsHeader />

      <div className="p-4 flex flex-col gap-1.5 w-full ">
        <div className="flex justify-between w-full bg-background-box p-3">
          <p className="text-text-secondary text-sm font-normal">
            نمودار وضعیت سنسور
          </p>
          <div>
            <div className="flex items-center gap-7 text-text-tertiary text-sm font-normal">
              <div className="flex gap-2">
                <div className="flex">
                  {" "}
                  <p>22</p>
                  <ArrowDown size={18} />
                </div>
                <div className="flex">
                  {" "}
                  <p>88</p>
                  <ArrowUp size={18} />
                </div>
              </div>
              <p>1404/08/01 - 1404/03/01</p>
            </div>
          </div>
        </div>

        <div className=" w-full bg-background-box p-3 flex flex-col gap-8">
          <div className="flex justify-between">
            <button className="border border-border-muted text-text-tertiary items-center text-xs font-normal rounded p-1 flex gap-1">
              <Image
                src="/images/icons/charts/compare.svg"
                alt="compare"
                width={18}
                height={18}
                className=""
              />
              مقایسه
            </button>
            <Filter />
          </div>
          <div className="w-4/5 mx-auto max-h-[372px] ">
          <LineChart/></div>
        </div>
      </div>
    </div>
  );
}
