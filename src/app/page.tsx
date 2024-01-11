"use client";
import gsap from "gsap";
import { Draggable, ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, Draggable);
export default function Home() {
  useEffect(() => {
    // const smoother = ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    //   smoothTouch: 0.1,
    // });

    gsap.to("#customScrollbar", {
      y: 320,
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
        // let scrollBarHeight = 250; // 300-circle
        // let allSections = 2000; // 2 sections of 1000
        // let percent = (this.endY / scrollBarHeight) * 100; // path percentage
        // let to = (allSections / 100) * percent; // page coordinate at the same percentage
        // smoother.scrollTo(to);
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
