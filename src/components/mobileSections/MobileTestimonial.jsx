"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonialData";
import { preloadImage } from "@/utils/preloadAssets";

const TOP_SVG = "/assets/testimonial/testi-mobile-top-design.svg";
const BADGE_SVG = "/assets/testimonial/testi-badge.svg";
const CARD_BG = "/assets/testimonial/testi-bg-mobile.svg";

const swipeThreshold = 50;

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "110%" : "-110%",
    opacity: 1,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-110%" : "110%",
    opacity: 1,
    scale: 0.95,
  }),
};

export default function MobileTestimonial() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex([
      (index + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  /* ================= PRELOAD ================= */
  useEffect(() => {
    preloadImage(TOP_SVG);
    preloadImage(BADGE_SVG);
    preloadImage(CARD_BG);
  }, []);

  const data = testimonials[index];

  return (
    <section className="w-full bg-[#FFFDF1] overflow-hidden">
      {/* TOP SVG */}
      <Image
        src={TOP_SVG}
        alt="top design"
        width={1440}
        height={240}
        priority
        className="w-[800px] -mt-5"
      />

      {/* BADGE */}
      <div className="flex justify-center -mt-4 mb-6 px-4">
        <Image
          src={BADGE_SVG}
          alt="testimonial badge"
          width={180}
          height={60}
          priority
          className="w-[400px]  mt-10"
        />
      </div>

      {/* CARD SLIDER */}
      <div className="relative flex justify-center py-5 px-4">
        <div className="relative w-full max-w-[360px] h-[520px] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={data.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 26,
                  mass: 0.8,
                  velocity: 2
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              dragTransition={{ 
                power: 0.2,
                timeConstant: 200
              }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > swipeThreshold) paginate(-1);
                else if (offset.x < -swipeThreshold) paginate(1);
              }}
              className="absolute top-0 left-0 w-full"
            >
              {/* CARD BG */}
              <Image
                src={CARD_BG}
                alt="testimonial card"
                width={360}
                height={560}
                priority
                className="w-full h-auto"
              />

              {/* CARD CONTENT */}
              <div
                className="
                  absolute inset-0
                  px-14 py-10
                  flex flex-col justify-center items-center

                  /* ===== Small screens manual fix ===== */
                  max-[500px]:px-16
                  max-[500px]:py-6
                  max-[500px]:justify-center 
                  max-[500px]:pt-20

                  max-[380px]:pt-16
                  max-[360px]:pt-14
                  max-[340px]:px-10
                  max-[340px]:text-[10px]
                "
              >
                <div className="w-full">
                  <p className="text-[14px] leading-[22px] text-black font-light text-left">
                    {data.text}
                  </p>

                  <div className="mt-8 text-left">
                    <p className="text-sm text-black font-light">
                      {data.name}
                    </p>
                    <p className="text-xs text-black font-light">
                      {data.company}
                    </p>
                  </div>
                </div>
              </div>
              {/* END CARD CONTENT */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}