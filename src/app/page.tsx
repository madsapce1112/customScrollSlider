"use client";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState<string>("");
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.to("#customScrollbar", {
      scrollTrigger: {
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setMaxScroll(self.end);
          setScrollProgress(self.progress.toFixed(2));
        },
      },
    });
  }, []);

  const handleStepClick = (progress: number) => {
    gsap.to(window, { duration: 1, scrollTo: { y: progress * maxScroll } });
  };

  return (
    <main className="min-h-screen relative bg-white">
      <div style={{ height: "15000px" }} id="allTags"></div>

      <div
        id="customScroll"
        className="fixed left-10 top-10 h-96 flex flex-col justify-between after:absolute after:top-0 after:bottom-0  after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300"
      >
        <hr
          className="bg-blue-700 w-0.5 start-[13px] absolute transition-all duration-500"
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
      </div>
    </main>
  );
}
