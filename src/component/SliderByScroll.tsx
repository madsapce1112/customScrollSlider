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
    const timeline = gsap.timeline({
      repeat: 0,
      yoyo: true,
      defaults: { ease: "easeInOut", duration: 1 },
    });

    // timeline
    //   .to("#step_1", { opacity: 1, x: 20, duration: 0.5 })
    //   .to("#step_2", { opacity: 1, duration: 0.5, x: 20 })
    //   .to("#step_3", { opacity: 1, duration: 0.5, x: 20 })
    //   .to("#step_4", { opacity: 1, duration: 0.5, x: 20 })
    //   .to("#step_5", { opacity: 1, duration: 0.5, x: 20 });

    data.forEach((item, index) => {
      timeline.to(`#step_${index + 1}`, { opacity: 1, x: 20, duration: 0.2 });
    });
  }, []);

  const handleStepClick = (progress: number) => {
    gsap.to(window, { duration: 1, scrollTo: { y: progress * maxScroll } });
  };

  return (
    <div
      id="customScroll"
      className={`absolute left-10 top-10 h-96 flex flex-col justify-between after:absolute after:top-0 after:bottom-0  after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300`}
    >
      <hr
        className={`bg-blue-700 w-0.5 start-[13px] absolute transition-all duration-300`}
        style={{ height: `${Number(scrollProgress) * 100}%` }}
      />
      {data.map((item, index: number) => (
        <div
          id={`step_${index + 1}`}
          className="flex gap-x-3 cursor-pointer"
          style={{ opacity: 0 }}
          onClick={() =>
            handleStepClick(index === 0 ? 0 : index / (data.length - 1))
          }
          key={index}
        >
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div
              className={`rounded-full border-2 outline-dashed outline-2 outline-offset-2 
                  border-blue-700 bg-white`}
              style={{
                width: "12px",
                height: "12px",
                outline: "dashed",
                outlineWidth:
                  Number(scrollProgress) >= index / (data.length - 1)
                    ? "2px"
                    : "0px",
                outlineColor: "blue",
                outlineOffset: "2px",
              }}
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
