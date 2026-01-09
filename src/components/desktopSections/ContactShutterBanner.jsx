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

/* ================= MAP JSON ================= */
const MAP_DATA = [
  { id: 1, src: "/assets/contact-shutter/sector-2.png", z: "z-10" },
  { id: 2, src: "/assets/contact-shutter/pipli.png", z: "z-20" },
  { id: 3, src: "/assets/contact-shutter/haryana.png", z: "z-30" },
  { id: 4, src: "/assets/contact-shutter/india.png", z: "z-40" },
];

/* ================= ISOMORPHIC EFFECT ================= */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ContactShutterBanner = () => {
  const mapContainerRef = useRef(null);

  /* ================= MAP PEEL ANIMATION (UNCHANGED) ================= */
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const maps = gsap.utils.toArray(".map-layer");
      const mapsFromTop = [...maps].reverse();

      gsap.set(mapsFromTop, { xPercent: 0, autoAlpha: 0 });
      gsap.set(mapsFromTop[0], { autoAlpha: 1 });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to({}, { duration: 2 });

      mapsFromTop.forEach((current, index) => {
        const next = mapsFromTop[index + 1] || mapsFromTop[0];

        tl.set(next, { autoAlpha: 1, xPercent: 0 });
        tl.to(current, { xPercent: -100, duration: 0.8 });
        tl.set(current, { autoAlpha: 0, xPercent: 0 });

        if (index < mapsFromTop.length - 1) {
          tl.to({}, { duration: 2 });
        }
      });
    }, mapContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[650px] xl:h-[800px] 2xl:h-screen overflow-hidden lg-mid-section">
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/assets/contact-shutter/bg-test.png"
        alt="Metal shutter background"
        fill
        priority
        className="object-fill bg-dim"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full h-full p-[20px] xl:p-[30px] ">
        <div className="w-full h-full flex justify-between">

          {/* ================= LEFT ================= */}
          <div className="relative h-full w-[36%] lg:w-[60%] xl:w-[32%] lg-mid-left">
            <div className="absolute inset-0 red-panel" />

            <div className="relative z-10 h-full px-[20px] pt-[20px] xl:pt-[30px] 2xl:px-[50px] 2xl:pt-[50px] text-[#FFBE05] space-y-6 2xl:space-y-8 lg-mid-content">
              {/* CALL */}
              <div>
                <h3
                  className={`${roadRage.className} text-[64px] lg:text-[52px] xl:text-[64px]`}
                >
                  CALL KARO:
                </h3>
                <a
                  href="https://wa.me/919817742069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${roadRage.className} text-[34px] lg:text-[28px] xl:text-[34px] text-[#FFDAA4] block hover:underline cursor-pointer`}
                >
                  +91 98177 42069
                </a>
              </div>

              {/* MAIL */}
              <div>
                <h3
                  className={`${roadRage.className} text-[64px] lg:text-[52px] xl:text-[64px]`}
                >
                  MAIL ID:
                </h3>
                <a
                  href="mailto:venu@indiefluence.in"
                  className={`${roadRage.className} text-[34px] lg:text-[28px] xl:text-[34px] text-[#FFDAA4] block hover:underline cursor-pointer`}
                >
                  venu@indiefluence.in
                </a>
              </div>

              {/* ADDRESS */}
              <div>
                <h3
                  className={`${roadRage.className} text-[64px] lg:text-[52px] xl:text-[64px]`}
                >
                  PATA:
                </h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+151+Sector+2+Industrial+Area+Kurukshetra+Haryana+136118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${roadRage.className} text-[34px] lg:text-[28px] xl:text-[34px] text-[#FFDAA4] leading-tight block hover:underline cursor-pointer`}
                >
                  PLOT NO. 151, SECTOR-2, INDUSTRIAL
                  <br />
                  AREA, KURUKSHETRA, HARYANA
                  <br />
                  136118
                </a>
              </div>

              {/* TIME */}
              <div>
                <h3
                  className={`${roadRage.className} text-[64px] lg:text-[52px] xl:text-[64px]`}
                >
                  KAAM KA TIME:
                </h3>
                <p
                  className={`${roadRage.className} text-[34px] lg:text-[28px] xl:text-[34px] text-[#FFDAA4]`}
                >
                  9 AM – 5 PM
                  <br />
                  MON TO SAT
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER ================= */}
          <div
            className="green-board relative h-full w-[36%] lg-mid-center flex items-center justify-center mt-24 invisible xl:visible hidden lg:flex"
          >
            <Image
              src="/assets/contact-shutter/green-direction.png"
              alt="Office direction signboard"
              fill
              className="object-contain blend-item lg-mid-green"
            />
          </div>

          {/* ================= RIGHT ================= */}
          <div
            ref={mapContainerRef}
            className="relative h-full w-[36%] lg:w-[60%] xl:w-[32%] overflow-hidden lg-mid-right"
          >
            {MAP_DATA.map((map) => (
              <div
                key={map.id}
                className={`map-layer absolute inset-0 ${map.z}`}
              >
                <Image
                  src={map.src}
                  alt=""
                  fill
                  className="object-fill blend-item-map"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactShutterBanner;
