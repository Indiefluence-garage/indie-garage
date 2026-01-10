"use client";

import { useEffect } from "react";
import { preloadImage, preloadVideo } from "@/utils/preloadAssets";

export default function BannerPanel() {
  useEffect(() => {
    // preload assets used in this panel
    preloadImage("/assets/hero-section/banner-panel.png");
    preloadVideo("/assets/hero-section/intro-section/truck-animation.webm");
  }, []);

  return (
    <div className="panel min-w-[420px] h-screen relative bg-[#fffbe3] flex items-center justify-center">
      <img
        src="/assets/hero-section/banner-panel.png"
        alt="Banner"
        className="h-[450px] 2xl:h-[450px] object-contain z-10"
      />

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
