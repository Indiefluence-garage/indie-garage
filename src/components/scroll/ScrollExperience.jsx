"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import IntroPanel from "@/components/scroll/IntroPanel";
import BannerPanel from "@/components/scroll/BannerPanel";
import TeamPanel from "@/components/scroll/TeamPanel";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const track = trackRef.current;

    const getMoveDistance = () =>
      track.scrollWidth - window.innerWidth;

    let slowZone = false;

    const tween = gsap.to(track, {
      x: () => -getMoveDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: () => "+=" + getMoveDistance(),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
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
        className="flex h-full"
      >
        <IntroPanel />
        <BannerPanel />
        <TeamPanel />
      </div>
    </section>
  );
}
