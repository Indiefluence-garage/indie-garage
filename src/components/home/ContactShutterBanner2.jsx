"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import "@/components/css/contactBlend.css";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ContactShutterBanner2 = () => {
  const mapContainerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const maps = gsap.utils.toArray(".map-layer");
    const mapsFromTop = [...maps].reverse();

    // 🔒 Initial state: hide all maps
    gsap.set(mapsFromTop, {
      xPercent: 0,
      autoAlpha: 0,
    });

    // Show first (top) map
    gsap.set(mapsFromTop[0], { autoAlpha: 1 });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    // Initial hold
    tl.to({}, { duration: 2 });

    mapsFromTop.forEach((current, index) => {
      const next = mapsFromTop[index + 1] || mapsFromTop[0];

      // 👉 Ensure next map is visible BEFORE slide
      tl.set(next, { autoAlpha: 1, xPercent: 0 });

      // Slide current map
      tl.to(current, {
        xPercent: -100,
        duration: 0.8,
      });

      // Hide current map AFTER it exits
      tl.set(current, { autoAlpha: 0, xPercent: 0 });

      // Hold (except last)
      if (index < mapsFromTop.length - 1) {
        tl.to({}, { duration: 2 });
      }
    });

  }, mapContainerRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="relative w-full h-[800px] 2xl:h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/assets/contact-shutter/bg-test.png"
        alt="Metal shutter background"
        fill
        priority
        className="object-fill bg-dim"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full p-[30px]">
        <div className="w-full h-full flex">

          {/* ================= LEFT – RED PANEL + CONTACT DETAILS ================= */}
          <div className="relative h-full w-[32%]">

            {/* RED PANEL */}
            <div className="absolute inset-0 red-panel" />

            {/* CONTACT DETAILS (ORIGINAL – UNCHANGED STYLES) */}
            <div className="relative z-10 h-full px-[50px] pt-[40px] text-[#FFBE05] space-y-6">

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  CALL KARO:
                </h3>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
                  +91 12345 67890
                </p>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  MAIL ID:
                </h3>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
                  VENU@INDIEFLUENCE.IN
                </p>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  PATA:
                </h3>
                <p
                  className={`${roadRage.className} text-[34px] text-[#FFDAA4] leading-tight -mt-2`}
                >
                  PLOT NO. 151, SECTOR-2, INDUSTRIAL <br />
                  AREA, KURUKSHETRA, HARYANA <br />
                  136118
                </p>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  KAAM KA TIME:
                </h3>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
                  9 AM – 5 PM
                </p>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-3`}>
                  MON TO SAT
                </p>
              </div>

            </div>
          </div>

          {/* ================= CENTER – GREEN SIGN ================= */}
          <div className="relative h-full w-[36%] flex items-center justify-center mt-24">
            <Image
              src="/assets/contact-shutter/green-direction.png"
              alt="Office direction signboard"
              fill
              className="object-contain blend-item"
            />
          </div>

          {/* ================= RIGHT – MAP WITH PEEL ANIMATION ================= */}
          <div 
            ref={mapContainerRef} 
            className="relative h-full w-[32%] overflow-hidden"
          >
            
            {/* Map 1 - Bottom layer (z-10) - Revealed last */}
            <div className="map-layer absolute inset-0 z-10">
              <Image
                src="/assets/contact-shutter/sector-2.png"
                alt="India map illustration 1"
                fill
                className="object-fill blend-item-map"
              />
            </div>
            
            {/* Map 2 (z-20) */}
            <div className="map-layer absolute inset-0 z-20">
              <Image
                src="/assets/contact-shutter/pipli.png"
                alt="India map illustration 2"
                fill
                className="object-fill blend-item-map"
              />
            </div>
            
            {/* Map 3 (z-30) */}
            <div className="map-layer absolute inset-0 z-30">
              <Image
                src="/assets/contact-shutter/haryana.png"
                alt="India map illustration 3"
                fill
                className="object-fill blend-item-map"
              />
            </div>
            
            {/* Map 4 - Top layer (z-40) - Visible first */}
            <div className="map-layer absolute inset-0 z-40 ">
              <Image
                src="/assets/contact-shutter/india.png"
                alt="India map illustration 4"
                fill
                className="object-fill blend-item-map"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactShutterBanner2;