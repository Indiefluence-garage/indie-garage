export default function BannerPanel() {
  return (
    <div className="panel min-w-[420px] h-[750px] 2xl:h-[800px] relative bg-[#fffbe3] flex items-center justify-center">
      

      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-[450px] 2xl:h-[450px]  object-contain z-10 "
      />

      <img
        src="/assets/hero-section/intro-section/truck.png"
        alt="Truck"
        className="absolute bottom-8 2xl:bottom-3 left-10 z-20 w-[100px]"
      />
    </div>
  );
}
