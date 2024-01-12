"use client";

import { SliderByScroll } from "@/component/SliderByScroll";

export default function Home() {
  const scrollData = [
    { subTitle: "Step 1" },
    { subTitle: "Step 2" },
    { subTitle: "Step 3" },
    { subTitle: "Step 4" },
    { subTitle: "Step 5" },
    { subTitle: "Step 6" },
    { subTitle: "Step 7" },
  ];
  return (
    <main className="min-h-screen bg-white">
      <div style={{ height: "25000px" }}></div>
      <SliderByScroll
        data={scrollData}
        textColor="text-blue-900"
        sliderDefaultColor="bg-red-300"
        sliderActiveColor="bg-yellow-400"
      />
      {/* <div
        id="customScroll"
        className="fixed left-10 top-10 h-96 flex flex-col justify-between after:absolute after:top-0 after:bottom-0  after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300"
      >
        <hr
          className="bg-blue-700 w-0.5 start-[13px] absolute transition-all duration-300"
          style={{ height: `${Number(scrollProgress) * 100}%` }}
        />
        <div className="flex gap-x-3" onClick={() => handleStepClick(0)}>
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full bg-white border-2  group-hover:border-gray-600 ${
                Number(scrollProgress) >= 0
                  ? "border-blue-700"
                  : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Created "Preline in React" task
            </h3>
          </div>
        </div>
        <div className="flex gap-x-3" onClick={() => handleStepClick(0.25)}>
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full bg-white border-2  group-hover:border-gray-600 ${
                Number(scrollProgress) >= 0.25
                  ? "border-blue-700"
                  : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Release v5.2.0 quick bug fix
            </h3>
          </div>
        </div>
        <div className="flex gap-x-3" onClick={() => handleStepClick(0.5)}>
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full bg-white border-2  group-hover:border-gray-600 ${
                Number(scrollProgress) >= 0.5
                  ? "border-blue-700"
                  : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Release v5.2.0 quick bug fix
            </h3>
          </div>
        </div>
        <div className="flex gap-x-3" onClick={() => handleStepClick(0.75)}>
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full bg-white border-2  group-hover:border-gray-600 ${
                Number(scrollProgress) >= 0.75
                  ? "border-blue-700"
                  : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Release v5.2.0 quick bug fix
            </h3>
          </div>
        </div>
        <div className="flex gap-x-3" onClick={() => handleStepClick(1)}>
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full bg-white border-2  group-hover:border-gray-600 ${
                Number(scrollProgress) >= 1
                  ? "border-blue-700"
                  : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Release v5.2.0 quick bug fix
            </h3>
          </div>
        </div>
      </div> */}
    </main>
  );
}
