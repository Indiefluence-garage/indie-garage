export default function BannerPanel() {
  return (
    <div className="panel min-w-[420px]  h-screen relative bg-[#fffbe3] flex items-center justify-center">
      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-[450px] 2xl:h-[450px]  object-contain z-10"
      />

      {/* <img
        src="/assets/hero-section/truck-animation.gif"
        alt="Truck"
        className="absolute bottom-8 2xl:bottom-21 left-10 z-20 w-[100px] "
      /> */}

      <video
        src="/assets/hero-section/intro-section/truck-animation.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute bottom-20 2xl:bottom-21 left-10 z-20 w-[100px]"
      />
    </div>
  );
}
