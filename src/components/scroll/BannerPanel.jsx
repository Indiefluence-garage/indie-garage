export default function BannerPanel() {
  return (
    <div className="panel min-w-[420px] h-[750px] 2xl:h-[800px] relative bg-[#fffbe3] flex items-center justify-center">
      {/* TOP DESIGN */}
      <div
        className="absolute top-0 left-0 w-full h-[109px] bg-repeat-x z-40 pointer-events-none"
        style={{
          backgroundImage:
            "url('/assets/hero-section/intro-section/Frame 170.png')",
          backgroundSize: "465px auto",
        }}
      />

      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-[450px] 2xl:h-[450px]  object-contain z-10 "
      />

      <img
        src="/assets/hero-section/intro-section/truck.png"
        alt="Truck"
        className="absolute bottom-8 2xl:bottom-11 left-10 z-20 w-[100px]"
      />
    </div>
  );
}
