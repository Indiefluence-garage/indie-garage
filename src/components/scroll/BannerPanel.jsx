export default function BannerPanel() {
  return (
    <div className="panel min-w-[420px] h-screen relative bg-[#FFFDF1] flex items-center justify-center">
      {/* TOP DESIGN */}
      <div
        className="absolute top-0 left-0 w-full h-[109px] bg-repeat-x z-40 pointer-events-none"
        style={{
          backgroundImage:
            "url('/assets/hero-section/intro-section/intro-top-design.png')",
          backgroundSize: "790px auto",
        }}
      />

      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-full object-contain z-10"
      />

      <img
        src="/assets/hero-section/intro-section/truck.png"
        alt="Truck"
        className="absolute bottom-6 left-10 z-20 w-[100px]"
      />
    </div>
  );
}
