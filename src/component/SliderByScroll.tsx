import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useState } from "react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type SliderByScrollProps = {
  data: { subTitle: string }[];
  textColor?: string;
  sliderDefaultColor?: string;
  sliderActiveColor?: string;
};

export const SliderByScroll = ({
  data,
  textColor,
  sliderDefaultColor,
  sliderActiveColor,
}: SliderByScrollProps) => {
  const [scrollProgress, setScrollProgress] = useState<string>("");
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.to("#customScroll", {
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
    <div
      id="customScroll"
      className={`fixed left-10 top-10 h-96 flex flex-col justify-between after:absolute after:top-0 after:bottom-0  after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
        sliderDefaultColor ? 'after:' + sliderDefaultColor : "after:bg-gray-300"
      }`}
    >
      <hr
        className={`${
          sliderActiveColor ? sliderActiveColor : "bg-blue-700"
        } w-0.5 start-[13px] absolute transition-all duration-300`}
        style={{ height: `${Number(scrollProgress) * 100}%` }}
      />
      {data.map((item, index: number) => (
        <div
          className="flex gap-x-3 cursor-pointer"
          onClick={() =>
            handleStepClick(index === 0 ? 0 : index / (data.length - 1))
          }
          key={index}
        >
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`w-2 h-2 rounded-full border-2 border-white ${
                Number(scrollProgress) >= index / (data.length - 1)
                  ? sliderActiveColor
                    ? sliderActiveColor
                    : "bg-blue-700"
                  : sliderDefaultColor
                  ? sliderDefaultColor
                  : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div className="grow pt-0.5">
            <h3
              className={`flex gap-x-1.5 font-semibold ${
                textColor ? textColor : "text-gray-800"
              }`}
            >
              {item.subTitle}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
