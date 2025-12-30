"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "@/components/css/contactShutter.css";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

/* ===============================
   MAP SLIDES JSON
================================ */
const mapSlides = [
  { id: 1, src: "/assets/contact/images-for-website/India.png" },
  { id: 2, src: "/assets/contact/images-for-website/Haryana.png" },
  { id: 3, src: "/assets/contact/images-for-website/Pipli.png" },
  { id: 4, src: "/assets/contact/images-for-website/Sector-2.png" },
];

const ContactShutterBannerFinal = () => {
  const trackRef = useRef(null);

  /* ===============================
     GSAP SEAMLESS LOOP SLIDER
  ================================ */
  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.offsetWidth;

    let index = 0;

    const animate = () => {
      index++;

      gsap.to(track, {
        x: -slideWidth * index,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // when last (clone) slide is reached
          if (index === mapSlides.length) {
            gsap.set(track, { x: 0 });
            index = 0;
          }

          // pause before next slide
          gsap.delayedCall(1, animate);
        },
      });
    };

    // initial pause
    gsap.delayedCall(1, animate);

    return () => gsap.killTweensOf(track);
  }, []);

  return (
    <section className="contact-shutter-section relative w-full h-screen overflow-hidden">
      
      {/* BACKGROUND */}
      <Image
        src="/assets/contact/shutter-bg-1.png"
        alt="Shutter Background"
        fill
        priority
        className="object-fill"
      />

      {/* LEFT CONTENT (UNTOUCHED) */}
      <div className="absolute left-[80px] xl:top-[70px] 2xl:top-[90px] z-10 text-[#FFBE05] space-y-3 contact-shutter-text">
        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>CALL KARO:</h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            +91 12345 67890
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>MAIL ID:</h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            VENU@INDIEFLUENCE.IN
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>PATA:</h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] leading-tight -mt-2`}>
            PLOT NO. 151, SECTOR-2, INDUSTRIAL <br />
            AREA, KURUKSHETRA, HARYANA <br />
            136118
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>KAAM KA TIME:</h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            9 AM – 5 PM
          </p>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-3`}>
            MON TO SAT
          </p>
        </div>
      </div>

      {/* RIGHT MAP SLIDER */}
      {/* RIGHT MAP SLIDER */}
<div className="absolute right-10 top-0 h-full w-[580px] z-10 overflow-hidden py-5">
  
  {/* RELATIVE WRAPPER (IMPORTANT) */}
  <div className="relative h-full w-full overflow-hidden">

    {/* WHITE BG WITH OPACITY (ONLY THIS IS FADED) */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/assets/contact/images-for-website/white-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.1,
      }}
    />

    {/* SLIDER TRACK (UNCHANGED) */}
    <div ref={trackRef} className="absolute inset-0 flex">
      
      {/* real slides */}
      {mapSlides.map((map) => (
        <div
          key={map.id}
          className="min-w-full h-full flex items-center justify-center p-5"
        >
          <Image
            src={map.src}
            alt="Map"
            width={580}
            height={700}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      ))}

      {/* clone of first slide */}
      <div className="min-w-full h-full flex items-center justify-center p-5">
        <Image
          src={mapSlides[0].src}
          alt="Map"
          width={580}
          height={700}
          className="object-cover w-full h-full"
          priority
        />
      </div>

    </div>
  </div>
</div>

    </section>
  );
};

export default ContactShutterBannerFinal;
