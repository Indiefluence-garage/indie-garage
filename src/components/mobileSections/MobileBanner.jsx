"use client";

import { useEffect } from "react";
import Image from "next/image";
import { preloadImage } from "@/utils/preloadAssets";

const BANNER_SRC = "/assets/hero-section/banner-panel.png";

const MobileBanner = () => {
  useEffect(() => {
    preloadImage(BANNER_SRC);
  }, []);

  return (
    <section className="w-full bg-[#FFFDF1]">
      {/* Padding wrapper */}
      <div className="p-10">
        <Image
          src={BANNER_SRC}
          alt="Mobile Banner"
          width={1080}
          height={1920}
          priority
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default MobileBanner;
