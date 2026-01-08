"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "@/components/css/clients-banner.css";
import { preloadImage } from "@/utils/preloadAssets"; // Update with correct path

const ClientsBanner = () => {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  /* ================= REFS (SEPARATE!) ================= */
  const desktopSlidesRef = useRef(null);
  const desktopContainerRef = useRef(null);
  const desktopWidthRef = useRef(0);

  const mobileSlidesRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const mobileWidthRef = useRef(0);

  /* ================= DATA ================= */
  const desktopClients = [
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

  const mobileClients = [
    {
      id: 1,
      image: "/assets/client-banner/mobile-myro.png",
      website: "https://myro.bot",
    },
    {
      id: 2,
      image: "/assets/client-banner/mobile-goldstar.png",
      website: "https://goldstar.com",
    },
    {
      id: 3,
      image: "/assets/client-banner/mobile-rabbit.png",
      website: "https://rabbitautocare.com",
    },
  ];

  /* ================= PRELOAD IMAGES ================= */
  useEffect(() => {
    // Preload header badge
    preloadImage("/assets/client-banner/header-badge.png");
    
    // Preload background images
    preloadImage("/assets/client-banner/client-bg.png");
    preloadImage("/assets/client-banner/client-mobile-bg.png");
    
    // Preload desktop client images
    desktopClients.forEach((client) => {
      preloadImage(client.image);
    });
    
    // Preload mobile client images
    mobileClients.forEach((client) => {
      preloadImage(client.image);
    });
    
    // Preload navigation buttons
    preloadImage("/assets/client-banner/pre-test.png");
    preloadImage("/assets/client-banner/next-test.png");
    preloadImage("/assets/client-banner/mobile-previous-btn.png");
    preloadImage("/assets/client-banner/mobile-next-btn.png");
  }, []);

  /* ================= DESKTOP SLIDE ================= */
  const animateDesktop = (index) => {
    gsap.to(desktopSlidesRef.current, {
      x: -index * desktopWidthRef.current,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setDesktopIndex(index);
  };

  /* ================= MOBILE SLIDE ================= */
  const animateMobile = (index) => {
    gsap.to(mobileSlidesRef.current, {
      x: -index * mobileWidthRef.current,
      duration: 0.6,
      ease: "power2.out",
    });
    setMobileIndex(index);
  };

  /* ================= WIDTH CALC ================= */
  useEffect(() => {
    const update = () => {
      if (desktopContainerRef.current) {
        desktopWidthRef.current = desktopContainerRef.current.offsetWidth;
        gsap.set(desktopSlidesRef.current, {
          x: -desktopIndex * desktopWidthRef.current,
        });
      }

      if (mobileContainerRef.current) {
        mobileWidthRef.current = mobileContainerRef.current.offsetWidth;
        gsap.set(mobileSlidesRef.current, {
          x: -mobileIndex * mobileWidthRef.current,
        });
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ================= MOBILE SWIPE ================= */
  useEffect(() => {
    const el = mobileContainerRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let isHorizontalSwipe = false;

    const start = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isHorizontalSwipe = false;
    };

    const move = (e) => {
      const moveX = e.touches[0].clientX;
      const moveY = e.touches[0].clientY;

      const diffX = Math.abs(moveX - startX);
      const diffY = Math.abs(moveY - startY);

      // ✅ Mark as swipe only if horizontal intent is clear
      if (diffX > 10 && diffX > diffY) {
        isHorizontalSwipe = true;
      }
    };

    const end = (e) => {
      if (!isHorizontalSwipe) return; // ✅ ignore scroll-end touches

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (diffX > 60 && mobileIndex < mobileClients.length - 1) {
        animateMobile(mobileIndex + 1);
      }

      if (diffX < -60 && mobileIndex > 0) {
        animateMobile(mobileIndex - 1);
      }
    };

    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", end, { passive: true });

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
    };
  }, [mobileIndex]);

  const openSite = (url) => window.open(url, "_blank");

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="hidden md:block relative w-full pt-10 pb-20 bg-[url('/assets/client-banner/client-bg.png')] bg-cover bg-center">
        <img
          src="/assets/client-banner/header-badge.png"
          className="client-blend-badge mx-auto mb-6 w-[394px]"
        />

        <div
          ref={desktopContainerRef}
          className="max-w-[968px] mx-auto overflow-hidden"
        >
          <div ref={desktopSlidesRef} className="flex">
            {desktopClients.map((c) => (
              <div
                key={c.id}
                className="w-full shrink-0 cursor-pointer"
                onClick={() => openSite(c.website)}
              >
                <Image
                  src={c.image}
                  width={968}
                  height={508}
                  className="client-blend-banner w-full h-[508px] object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button
            disabled={desktopIndex === 0}
            onClick={() => animateDesktop(desktopIndex - 1)}
          >
            <Image
              src="/assets/client-banner/pre-test.png"
              width={110}
              height={48}
              alt=""
              className="client-blend-nav w-44 h-16"
            />
          </button>
          <button
            disabled={desktopIndex === desktopClients.length - 1}
            onClick={() => animateDesktop(desktopIndex + 1)}
          >
            <Image
              src="/assets/client-banner/next-test.png"
              width={110}
              height={48}
              alt=""
              className="client-blend-nav w-44 h-16"
            />
          </button>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="md:hidden min-h-screen bg-[url('/assets/client-banner/client-mobile-bg.png')] bg-cover bg-center flex flex-col pt-6 px-4 pb-16">
        <img
          src="/assets/client-banner/header-badge.png"
          className="client-blend-badge mx-auto mb-4 w-[300px] shrink-0"
        />

        <div
          ref={mobileContainerRef}
          className="flex-1 overflow-hidden flex items-center"
        >
          <div ref={mobileSlidesRef} className="flex w-full">
            {mobileClients.map((c) => (
              <div
                key={c.id}
                className="w-full shrink-0 flex items-center justify-center px-2"
                onClick={() => openSite(c.website)}
              >
                <Image
                  src={c.image}
                  width={360}
                  height={520}
                  className="mobile-client-blend-banner w-full h-auto object-contain"
                  alt=""
                  style={{ maxHeight: "calc(100vh - 235px)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8 shrink-0">
          <button
            className="w-1/2"
            disabled={mobileIndex === 0}
            onClick={() => animateMobile(mobileIndex - 1)}
          >
            <Image
              src="/assets/client-banner/mobile-previous-btn.png"
              width={180}
              height={44}
              alt=""
              className="client-blend-nav h-[50px] mx-auto"
            />
          </button>
          <button
            className="w-1/2"
            disabled={mobileIndex === mobileClients.length - 1}
            onClick={() => animateMobile(mobileIndex + 1)}
          >
            <Image
              src="/assets/client-banner/mobile-next-btn.png"
              width={180}
              height={44}
              alt=""
              className="client-blend-nav h-[50px] mx-auto"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default ClientsBanner;