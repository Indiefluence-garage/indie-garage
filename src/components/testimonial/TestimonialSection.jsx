"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import TestimonialCard from "@/components/testimonial/TestimonialCard";
import { testimonials } from "@/data/testimonialData";

const TestimonialSection = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const cards = track.children;

    const totalWidth = Array.from(cards).reduce(
      (acc, card) => acc + card.offsetWidth + 32,
      0
    );

    // duplicate cards
    track.innerHTML += track.innerHTML;

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => tweenRef.current?.kill();
  }, []);

  return (
    <section className="relative w-full 2xl:min-h-screen bg-[#FFFDF1] overflow-hidden pb-10 2xl:pb-20">
      {/* TOP DECORATIONS */}
      <div className="absolute top-0 left-0 w-full flex justify-between z-10 pointer-events-none">
        <Image
          src="/assets/testimonial/testi-left-top-design.svg"
          alt="left design"
          width={1000}
          height={200}
          className="lg:w-[552px] lg:h-[128px] xl:w-[752px] xl:h-[150px] 2xl:w-[852px] 2xl:h-[183.43px] -mt-3 -ml-5"
        />

        <Image
          src="/assets/testimonial/testi-right-top-design.svg"
          alt="right design"
          width={800}
          height={200}
          className="lg:w-[485px] lg:h-[128px] xl:w-[752px] xl:h-[150px] 2xl:w-[852px] 2xl:h-[183.43px] -mt-3 xl:-mr-14 2xl:-mr-12"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 pt-40">
        {/* BADGE */}
        <div className="flex justify-center mb-10">
          <Image
            src="/assets/testimonial/testi-badge.svg"
            alt="testimonial badge"
            width={220}
            height={80}
            className="w-[662px] 2xl:w-[762px] h-[193.43px]"
          />
        </div>

        {/* CARD CONTAINER */}
        <div className="mx-auto max-w-[1340px] 2xl:max-w-[1720px] overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8"
            onMouseEnter={() => tweenRef.current?.pause()}
            onMouseLeave={() => tweenRef.current?.play()}
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
