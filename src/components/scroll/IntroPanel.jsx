"use client";

export default function IntroPanel() {
  return (
    /* FULL WIDTH PANEL (BACKGROUND) */
    <div
      className="panel flex-shrink-0 w-screen h-[750px] 2xl:h-[800px] flex items-center overflow-hidden relative"
      style={{ backgroundColor: "#FFFDF1" }}
    >
      {/* CONTAINER */}
      <div className="max-w-[1340px] 2xl:max-w-[1440px] w-full mx-auto flex h-full relative">
        
        {/* LEFT CONTENT */}
        <div className="w-1/2 flex items-center px-16 pt-20 relative">
          <div className="relative max-w-md 2xl:max-w-lg">
            <img
              src="/assets/hero-section/intro-section/left-ladi.png"
              className="absolute -left-16 top-1/2 -translate-y-1/2"
              alt=""
            />
            <img
              src="/assets/hero-section/intro-section/right-ladi.png"
              className="absolute -right-16 top-1/2 -translate-y-1/2"
              alt=""
            />

            <img
              src="/assets/hero-section/intro-section/truck.png"
              className="mb-6 w-[152px] h-[152px]"
              alt=""
            />

            <h1 className="text-[64px] leading-tight">
              Indian at <em>heart.</em>
              <br />
              Digital by <em>design.</em>
            </h1>

            <p className="mt-6 text-[20px] text-black font-light text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-1/2 flex items-center justify-end">
          <div className="h-full w-[600px]">
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
    </div>
  );
}
