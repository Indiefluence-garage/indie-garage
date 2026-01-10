"use client";

import React, { useEffect } from "react";
import teamData from "@/data/teamData";
import { preloadImage } from "@/utils/preloadAssets";

/* ===============================
   PER-CARD STYLE OVERRIDES
   =============================== */
const CARD_STYLES = {
  "01": {},
  "02": {},
  "03": {
    numberPt: "pt-28",
    numberMb: "mb-6",
    numberSize: "clamp(32px, 30vw, 128px)",
  },
  "04": {
    numberPt: "pt-28",
    numberMb: "mb-5",
    numberSize: "clamp(32px, 30vw, 128px)",
  },
  "05": {
    numberPt: "pt-32",
    numberMb: "mb-6",
    numberSize: "clamp(32px, 30vw, 128px)",
  },
  "06": {
    numberPt: "pt-34",
    numberMb: "mb-2",
    numberSize: "clamp(30px, 28vw, 120px)",
  },
  "07": {
    numberPt: "pt-29",
    numberMb: "pb-6",
    numberSize: "clamp(32px, 28vw, 128px)",
  },
  "08": {
    numberPt: "pt-32",
    numberMb: "mb-2",
    numberSize: "clamp(30px, 28vw, 120px)",
  },
};

/* ===============================
   DEFAULT STYLES
   =============================== */
const DEFAULTS = {
  numberPt: "pt-28",
  numberMb: "mb-2",
  numberSize: "clamp(36px, 35.2vw, 144px)",
  titleSize: "clamp(18px, 11.1vw, 48px)",
  descSize: "clamp(13px, 4.02vw, 16px)",
};

const MobileServices = () => {
  /* ===============================
     PRELOAD ASSETS (ONCE)
     =============================== */
  useEffect(() => {
    preloadImage("/assets/hero-section/service-imgs/mobile-bg.webp");
    preloadImage("/assets/hero-section/service-imgs/mobile-teamcard-bg.svg");
  }, []);

  return (
    <section
      className="md:hidden w-full "
  style={{
    backgroundImage: "url('/assets/hero-section/mobile-bg.webp')",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center top",
    backgroundSize: "100% auto",
  }}
    >
      {teamData.map((item) => {
        const styles = { ...DEFAULTS, ...CARD_STYLES[item.id] };

        return (
          <div
            key={item.id}
            className="relative w-full py-16 flex items-center justify-center"
          >
            {/* CARD */}
            <div className="w-full flex justify-center">
              <div
                className="relative w-full max-w-[420px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/hero-section/mobile-teamcard-bg.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  aspectRatio: "3 / 5",
                }}
              >
                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8">
                  
                  {/* NUMBER */}
                  <h2
                    className={`font-serif ${styles.numberPt} ${styles.numberMb}`}
                    style={{
                      fontSize: styles.numberSize,
                      lineHeight: "0.95",
                    }}
                  >
                    {item.id}
                  </h2>

                  {/* TITLE */}
                  <h2
                    className="font-medium whitespace-pre-line mb-4"
                    style={{
                      fontSize: styles.titleSize,
                      lineHeight: "1.06",
                      maxWidth: "90%",
                    }}
                  >
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="text-black font-light px-4"
                    style={{
                      fontSize: styles.descSize,
                      lineHeight: "1.6",
                      maxWidth: "95%",
                    }}
                  >
                    {item.desc}
                  </p>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MobileServices;
