"use client";

import { SliderByScroll } from "@/component/SliderByScroll";

export default function Home() {
  const scrollData = [
    { subTitle: "Step 1" },
    { subTitle: "Step 2" },
    { subTitle: "Step 3" },
    { subTitle: "Step 4" },
    { subTitle: "Step 5" },
  ];
  return (
    <main className="min-h-screen bg-white">
      <div style={{ height: "15000px" }}></div>
      <SliderByScroll data={scrollData} />
    </main>
  );
}
