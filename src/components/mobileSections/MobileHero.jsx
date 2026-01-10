"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "@/components/css/mobile-hero.css";
import { preloadImage, preloadVideo } from "@/utils/preloadAssets";

const MobileHero = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [truckLoaded, setTruckLoaded] = useState(false);

  /* 🔥 PRELOAD LOGIC */
  useEffect(() => {
    preloadImage("/assets/hero-section/intro-section/mobile-hero-top-design.png");
    preloadImage("/assets/hero-section/intro-section/mobile-left-ladi.png");
    preloadImage("/assets/hero-section/intro-section/mobile-right-ladi.png");
    preloadImage("/assets/hero-section/intro-section/truck-animation.gif");

    preloadVideo(
      "/assets/hero-section/intro-section/truck-animation.webm",
      "video/webm"
    );
  }, []);

  /* ✅ iOS DETECTION */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = window.navigator.userAgent.toLowerCase();
    const ios =
      /iphone|ipad|ipod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIsIOS(ios);
  }, []);

  /* 🚚 WAIT FOR TRUCK ASSET TO LOAD */
  useEffect(() => {
    const truckAsset = isIOS
      ? "/assets/hero-section/intro-section/truck-animation.gif"
      : "/assets/hero-section/intro-section/truck-animation.webm";

    if (isIOS) {
      const img = new window.Image();
      img.onload = () => setTruckLoaded(true);
      img.onerror = () => setTruckLoaded(true); // Show anyway on error
      img.src = truckAsset;
    } else {
      const video = document.createElement("video");
      video.onloadeddata = () => setTruckLoaded(true);
      video.onerror = () => setTruckLoaded(true);
      video.src = truckAsset;
    }
  }, [isIOS]);

  return (
    <section className="mobile-hero relative w-full min-h-screen bg-[#FFF8E9] overflow-hidden flex flex-col" id="home">
      
      {/* 🔶 TOP DESIGN */}
      <div className="w-full shrink-0 mt-20 mb-0">
        <Image
          src="/assets/hero-section/intro-section/mobile-hero-top-design.png"
          alt="Top design"
          width={750}
          height={140}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* 🔶 HERO BODY */}
      <div className="hero-body relative flex-1 flex flex-col items-center justify-start px-14 py-20">

        {/* LEFT LADI */}
        <Image
          src="/assets/hero-section/intro-section/mobile-left-ladi.png"
          alt="Left decoration"
          width={40}
          height={280}
          className="left-ladi absolute left-4 top-1/2 -translate-y-1/2 w-[20px]"
        />

        {/* RIGHT LADI */}
        <Image
          src="/assets/hero-section/intro-section/mobile-right-ladi.png"
          alt="Right decoration"
          width={40}
          height={280}
          className="right-ladi absolute right-4 top-1/2 -translate-y-1/2 w-[20px]"
        />

        {/* 🚚 TRUCK - Only show when loaded */}
        <div className="truck relative z-10 w-[120px] h-[120px] mb-8">
          {!truckLoaded && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <div className={`transition-opacity duration-300 ${truckLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {isIOS ? (
              <Image
                src="/assets/hero-section/intro-section/truck-animation.gif"
                alt="Truck animation"
                width={120}
                height={120}
                priority
                className="w-full h-auto"
              />
            ) : (
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source
                  src="/assets/hero-section/intro-section/truck-animation.webm"
                  type="video/webm"
                />
              </video>
            )}
          </div>
        </div>

        {/* ✍️ TEXT */}
        <div className="relative z-10 text-left w-full text-block">
          <h1 className="hero-heading font-serif text-[45px] leading-tight text-black">
            Indian at <span className="italic">heart.</span>
            <br />
            Digital by <span className="italic">design.</span>
          </h1>

          <p className="hero-desc mt-4 text-[16px] tracking-wide text-black font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MobileHero;