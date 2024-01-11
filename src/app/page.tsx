"use client";
import gsap from "gsap";
import { Draggable, ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(Draggable, ScrollTrigger);
export default function Home() {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.to("#customScrollbar", {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    Draggable.create("#customScrollbar", {
      type: "y",
      bounds: "#customScroll",
      throwProps: true,
      onDrag() {
        let scrollBarHeight = 250; // 300-circle
        let allSections = 15000; // 2 sections of 1000
        let percent = (this.endY / scrollBarHeight) * 100; // path percentage
        let to = (allSections / 100) * percent; // page coordinate at the same percentage
        scrollTo(0, to);
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
