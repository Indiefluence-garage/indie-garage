"use client";

export default function IntroPanel() {
  return (
    <div
      className="panel flex-shrink-0 h-[750px] 2xl:h-[800px] w-screen flex overflow-hidden relative "
      style={{ backgroundColor: "#FFFDF1" }}
    >
      {/* TOP DESIGN */}
      <div
        className="absolute top-0 left-0 w-full h-[109px]  z-20"
        style={{
          backgroundImage:
            "url('/assets/hero-section/intro-section/intro-top-design.png')",
          backgroundSize: "790px 109px",
        }}
      />

      {/* LEFT */}
      <div className="w-1/2 flex items-center justify-center px-16 xl:ml-13 2xl:ml-0 pt-20">
        <div className="relative max-w-xl">
          <img
            src="/assets/hero-section/intro-section/left-ladi.png"
            className="absolute -left-16 top-1/2 -translate-y-1/2"
          />
          <img
            src="/assets/hero-section/intro-section/right-ladi.png"
            className="absolute -right-16 top-1/2 -translate-y-1/2"
          />

          <img
            src="/assets/hero-section/intro-section/truck.png"
            className="mb-6"
          />

          <h1 className="text-[64px] leading-tight">
            Indian at <em>heart.</em>
            <br />
            Digital by <em>design.</em>
          </h1>

          <p className="mt-6 text-[20px] text-black font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>


      {/* RIGHT VIDEO */}
      <div className="flex flex-1 items-center justify-end pr-0">
        <div className="h-full w-[651px]">
          <video
            src="/assets/hero-section/intro-section/intro-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
