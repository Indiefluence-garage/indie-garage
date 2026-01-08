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

const ContactShutterMobile = () => {
  const mapContainerRef = useRef(null);

  /* ================= MAP PEEL ANIMATION ================= */
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
    <section className="relative w-full overflow-hidden py-10">
      {/* ================= MOBILE BACKGROUND ================= */}
      <Image
        src="/assets/contact-shutter/contactshutter-bg-mobile.png"
        alt="Mobile shutter background"
        fill
        priority
        className="object-fill bg-dim opacity-60"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full p-4 sm:p-5">
        <div className="w-full flex flex-col gap-10">

          {/* ================= LEFT (CONTACT INFO) ================= */}
          <div className="relative w-full mobile-left-height">
            <div className="absolute inset-0 red-panel" />

            <div
              className="
                relative z-10
                h-full
                px-4 pt-6 pb-6
                sm:px-6 sm:pt-8 sm:pb-8
                text-[#FFBE05]
                space-y-12
                lg-mid-content
              "
            >
              {/* CALL */}
              <div>
                <h3 className={`${roadRage.className} text-[48px]`}>
                  CALL KARO:
                </h3>
                <a
                  href="https://wa.me/919817742069"
                  className={`${roadRage.className} text-[28px] text-[#FFDAA4] block`}
                >
                  +91 98177 42069
                </a>
              </div>

              {/* MAIL */}
              <div>
                <h3 className={`${roadRage.className} text-[48px]`}>
                  MAIL ID:
                </h3>
                <a
                  href="mailto:venu@indiefluence.in"
                  className={`${roadRage.className} text-[28px] text-[#FFDAA4] block`}
                >
                  venu@indiefluence.in
                </a>
              </div>

              {/* ADDRESS */}
              <div>
                <h3 className={`${roadRage.className} text-[48px]`}>
                  PATA:
                </h3>
                <p
                  className={`${roadRage.className} text-[28px] text-[#FFDAA4] leading-tight`}
                >
                  PLOT NO. 151, SECTOR-2, INDUSTRIAL
                  <br />
                  AREA, KURUKSHETRA, HARYANA
                  <br />
                  136118
                </p>
              </div>

              {/* TIME */}
              <div>
                <h3 className={`${roadRage.className} text-[48px]`}>
                  KAAM KA TIME:
                </h3>
                <p
                  className={`${roadRage.className} text-[28px] text-[#FFDAA4]`}
                >
                  9 AM – 5 PM
                  <br />
                  MON TO SAT
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT (MAP) ================= */}
          <div
            ref={mapContainerRef}
            className="relative w-full mobile-map-height overflow-hidden"
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

export default ContactShutterMobile;
