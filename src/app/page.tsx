export default function Home() {
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
