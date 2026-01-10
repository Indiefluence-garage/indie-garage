"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import IntroPanel from "@/components/desktopSections/scroll/IntroPanel";
import BannerPanel from "@/components/desktopSections/scroll/BannerPanel";
import ServicesPanel from "@/components/desktopSections/scroll/ServicesPanel";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const topDesignRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const topDesign = topDesignRef.current;

      const getMoveDistance = () =>
        track.scrollWidth - window.innerWidth;

      // Calculate and set the exact width for top design
      const setTopDesignWidth = () => {
        if (topDesign && track.children.length >= 3) {
          // Get the first 2 panels (IntroPanel + BannerPanel)
          const introPanel = track.children[1]; // index 0 is the topDesign itself
          const bannerPanel = track.children[2];
          
          const totalWidth = introPanel.offsetWidth + bannerPanel.offsetWidth;
          topDesign.style.width = `${totalWidth}px`;
        }
      };

      // Set width initially and on resize
      setTopDesignWidth();

      let slowZone = false;

      const tween = gsap.to(track, {
        x: () => -getMoveDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top-=80 top",
          end: () => "+=" + getMoveDistance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: setTopDesignWidth,
          onUpdate(self) {
            // last 12% → slow scroll
            if (self.progress > 0.88 && !slowZone) {
              slowZone = true;
              self.scrub = 4.5; // 👈 slow down
            }

            // restore normal speed if user scrolls back
            if (self.progress < 0.85 && slowZone) {
              slowZone = false;
              self.scrub = 1;
            }
          },
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex h-full relative"
      >
        {/* ✅ TOP DESIGN - POSITIONED INSIDE TRACK, SPANS FIRST TWO PANELS */}
        <div
          ref={topDesignRef}
          className="absolute top-0 left-0 h-[109px] bg-repeat-x z-50 pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/hero-section/intro-section/intro-top-design.png')",
            backgroundSize: "790px auto",
            width: "100vw", // Will be updated by JavaScript to exact width
          }}
        />
        
        <IntroPanel />
        <BannerPanel />
        <ServicesPanel />
      </div>
    </section>
  );
}