export default function BannerPanel() {
  return (
    <div className="panel min-w-[420px] 2xl:min-w-[320px] h-screen relative bg-[#FFFDF1] flex items-center justify-center">
      

      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-[450px] 2xl:h-[450px]  object-contain z-10 2xl:-ml-40"
      />

      <img
        src="/assets/hero-section/intro-section/truck.png"
        alt="Truck"
        className="absolute bottom-8 2xl:bottom-21 left-10 z-20 w-[100px] 2xl:-ml-32"
      />
    </div>
  );
}
