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

// ================= MAP JSON =================
const MAP_DATA = [
  {
    id: 1,
    src: "/assets/contact-shutter/sector-2.png",
    z: "z-10",
    alt: "India map illustration 1",
  },
  {
    id: 2,
    src: "/assets/contact-shutter/pipli.png",
    z: "z-20",
    alt: "India map illustration 2",
  },
  {
    id: 3,
    src: "/assets/contact-shutter/haryana.png",
    z: "z-30",
    alt: "India map illustration 3",
  },
  {
    id: 4,
    src: "/assets/contact-shutter/india.png",
    z: "z-40",
    alt: "India map illustration 4",
  },
];

// ================= ISOMORPHIC EFFECT =================
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ContactShutterBanner = () => {
  const mapContainerRef = useRef(null);

  /* ================= MAP ANIMATION ================= */
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const maps = gsap.utils.toArray(".map-layer");
      const mapsFromTop = [...maps].reverse();

      // 🔒 Base state: all maps subtle & hidden
      gsap.set(mapsFromTop, {
        xPercent: 0,
        autoAlpha: 0,
        opacity: 0.25, // 👈 stack visibility
      });

      // 🔝 First visible map
      gsap.set(mapsFromTop[0], {
        autoAlpha: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to({}, { duration: 2 });

      mapsFromTop.forEach((current, index) => {
        const next = mapsFromTop[index + 1] || mapsFromTop[0];

        // Prepare next map (behind stack, subtle)
        tl.set(next, {
          autoAlpha: 1,
          xPercent: 0,
          opacity: 0.25,
        });

        // Slide current map out
        tl.to(current, {
          xPercent: -100,
          duration: 0.8,
        });

        // Reset old map
        tl.set(current, {
          autoAlpha: 0,
          xPercent: 0,
          opacity: 0.25,
        });

        // Bring next map fully into focus
        tl.set(next, {
          opacity: 1,
        });

        if (index < mapsFromTop.length - 1) {
          tl.to({}, { duration: 2 });
        }
      });
    }, mapContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[800px] 2xl:h-screen overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/assets/contact-shutter/bg-test.png"
        alt="Metal shutter background"
        fill
        priority
        className="object-fill bg-dim"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full h-full p-[30px]">
        <div className="w-full h-full flex">
          
          {/* ================= LEFT ================= */}
          <div className="relative h-full w-[32%]">
            <div className="absolute inset-0 red-panel" />

            <div className="relative z-10 h-full px-[50px] pt-[40px] text-[#FFBE05] space-y-6">
              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  CALL KARO:
                </h3>
                <a
                  href="https://wa.me/919817742069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4 block hover:underline`}
                >
                  +91 98177 42069
                </a>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  MAIL ID:
                </h3>
                <a
                  href="mailto:venu@indiefluence.in"
                  className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4 block hover:underline`}
                >
                  venu@indiefluence.in
                </a>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  PATA:
                </h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+151+Sector+2+Industrial+Area+Kurukshetra+Haryana+136118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${roadRage.className} text-[34px] text-[#FFDAA4] leading-tight block hover:underline`}
                >
                  PLOT NO. 151, SECTOR-2, INDUSTRIAL <br />
                  AREA, KURUKSHETRA, HARYANA <br />
                  136118
                </a>
              </div>

              <div>
                <h3 className={`${roadRage.className} text-[64px]`}>
                  KAAM KA TIME:
                </h3>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4]`}>
                  9 AM – 5 PM
                </p>
                <p className={`${roadRage.className} text-[34px] text-[#FFDAA4]`}>
                  MON TO SAT
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER ================= */}
          <div className="relative h-full w-[36%] flex items-center justify-center mt-24">
            <Image
              src="/assets/contact-shutter/green-direction.png"
              alt="Office direction signboard"
              fill
              className="object-contain blend-item"
            />
          </div>

          {/* ================= RIGHT (MAP STACK) ================= */}
          <div
            ref={mapContainerRef}
            className="relative h-full w-[32%] overflow-hidden"
          >
            {MAP_DATA.map((map) => (
              <div
                key={map.id}
                className={`map-layer absolute inset-0 ${map.z}`}
              >
                <Image
                  src={map.src}
                  alt={map.alt}
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
