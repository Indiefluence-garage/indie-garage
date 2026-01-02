"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "@/components/css/clients-banner.css";

const ClientsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef(null);
  const containerRef = useRef(null);
  const slideWidthRef = useRef(0);

  const clients = [
    {
      id: 1,
      image: "/assets/client-banner/myro-test.png",
      website: "https://myro.bot",
    },
    {
      id: 2,
      image: "/assets/client-banner/goldstar-banner.png",
      website: "https://goldstar.com",
    },
    {
      id: 3,
      image: "/assets/client-banner/rabbit-banner.png",
      website: "https://rabbitautocare.com",
    },
  ];

  /* ================= SLIDE ANIMATION (ORIGINAL FEEL) ================= */
  const animateSlide = (index) => {
    gsap.to(slidesRef.current, {
      x: -index * slideWidthRef.current,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < clients.length - 1) {
      animateSlide(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      animateSlide(currentIndex - 1);
    }
  };

  const handleBannerClick = (website) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  /* ================= WIDTH CALCULATION (SAFE) ================= */
  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      slideWidthRef.current = containerRef.current.offsetWidth;

      // keep current slide aligned (NO animation here)
      gsap.set(slidesRef.current, {
        x: -currentIndex * slideWidthRef.current,
      });
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []); // 👈 DO NOT depend on currentIndex

  return (
    <section
      className="
        relative w-full overflow-hidden
        pt-10 pb-20
        bg-[url('/assets/client-banner/client-bg.png')]
        bg-cover bg-center bg-no-repeat
        isolate
      "
    >
      {/* ================= HEADER BADGE ================= */}
      <img
        src="/assets/client-banner/header-badge.png"
        alt="Kaam jo chhaap chhode"
        className="
          client-blend-badge
          relative z-10
          block mx-auto mb-6
          w-[394px] h-auto
        "
      />

      {/* ================= SLIDER ================= */}
      <div
        ref={containerRef}
        className="
          relative z-10
          w-full
          max-w-[720px] lg:max-w-[760px] xl:max-w-[968px]
          mx-auto overflow-hidden
        "
      >
        <div ref={slidesRef} className="flex will-change-transform">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => handleBannerClick(client.website)}
              className="shrink-0 w-full cursor-pointer"
            >
              <Image
                src={client.image}
                alt={`Client ${client.id}`}
                width={968}
                height={508}
                priority={client.id === 1}
                className="
                  client-blend-banner
                  w-full h-[508px] object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className="relative z-10 flex justify-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`h-[48px] flex items-center justify-center ${
            currentIndex === 0 ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <Image
            src="/assets/client-banner/pre-test.png"
            alt="Previous"
            width={110}
            height={48}
            className="client-blend-nav h-full w-auto"
          />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === clients.length - 1}
          className={`h-[48px] flex items-center justify-center ${
            currentIndex === clients.length - 1
              ? "pointer-events-none"
              : "cursor-pointer"
          }`}
        >
          <Image
            src="/assets/client-banner/next-test.png"
            alt="Next"
            width={110}
            height={48}
            className="client-blend-nav h-full w-auto"
          />
        </button>
      </div>
    </section>
  );
};

export default ClientsBanner;
