"use client";
import gsap from "gsap";
import { Draggable, ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(Draggable, ScrollTrigger);
export default function Home() {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let scrollTween = gsap.to("#customScrollbar", {
      y: 300,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
      },
    });

    Draggable.create("#customScrollbar", {
      type: "y",
      bounds: "#customScroll",
      throwProps: true,
      onPress() {
        scrollTween.scrollTrigger.disable(false);
      },
      onDrag() {
        let progress = gsap.utils.normalize(this.minY, this.maxY, this.y);
        let to = 15000 * progress;
        scrollTo(0, to);
      },
      onRelease() {
        let progress = gsap.utils.normalize(this.minY, this.maxY, this.y);
        scrollTween.scrollTrigger.enable();
        scrollTween.progress(progress);
      },
    });
  }, []);

  return (
    <main className="min-h-screen relative">
      <div style={{ height: "15000px" }}></div>

      <div
        id="customScroll"
        className="fixed right-10 top-0 z-[99999999px] h-80 w-12 bg-orange-400"
      >
        <div id="customScrollbar" className="h-12 w-12 bg-red-600"></div>
      </div>
    </main>
  );
}
