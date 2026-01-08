// MobileTestimonial.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonialData";
import { preloadImage } from "@/utils/preloadAssets";
import "@/components/css/MobileTestimonial.css";

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
    const newIndex = index + dir;
    
    // Check boundaries: don't go below 0 or above last index
    if (newIndex < 0 || newIndex >= testimonials.length) {
      return; // Stop pagination at boundaries
    }
    
    setIndex([newIndex, dir]);
  };

  /* ================= PRELOAD ================= */
  useEffect(() => {
    preloadImage(TOP_SVG);
    preloadImage(BADGE_SVG);
    preloadImage(CARD_BG);
  }, []);

  const data = testimonials[index];

  return (
    <section className="mobile-testimonial-section">
      {/* TOP SVG */}
      <Image
        src={TOP_SVG}
        alt="top design"
        width={1440}
        height={240}
        priority
        className="mobile-testimonial-top-svg"
      />

      {/* BADGE */}
      <div className="mobile-testimonial-badge-container">
        <Image
          src={BADGE_SVG}
          alt="testimonial badge"
          width={180}
          height={60}
          priority
          className="mobile-testimonial-badge"
        />
      </div>

      {/* CARD SLIDER */}
      <div className="mobile-testimonial-slider-wrapper">
        <div className="mobile-testimonial-slider-container">
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
              className="mobile-testimonial-card"
            >
              {/* CARD BG */}
              <Image
                src={CARD_BG}
                alt="testimonial card"
                width={360}
                height={560}
                priority
                className="mobile-testimonial-card-bg"
              />

              {/* CARD CONTENT */}
              <div className="mobile-testimonial-card-content">
                <div className="mobile-testimonial-card-inner">
                  <p className="mobile-testimonial-text">
                    {data.text}
                  </p>

                  <div className="mobile-testimonial-author">
                    <p className="mobile-testimonial-name">
                      {data.name}
                    </p>
                    <p className="mobile-testimonial-company">
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


