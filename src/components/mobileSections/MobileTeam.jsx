"use client";

import { useEffect } from "react";
import Image from "next/image";
import teamData from "@/data/teamData";
import { preloadImage } from "@/utils/preloadAssets";
import "@/components/css/mobileTeam.css";

const TEAM_BG = "/assets/hero-section/mobile-bg.png";
const CARD_BG = "/assets/hero-section/card-bg.svg";

const MobileTeam = () => {
  /* ================= PRELOAD ASSETS ================= */
  useEffect(() => {
    preloadImage(TEAM_BG);
    preloadImage(CARD_BG);
  }, []);

  return (
    <section className="w-full flex flex-col">
      {teamData.map((item) => (
        <div key={item.id} className="relative w-full">
          {/* ================= BACKGROUND ================= */}
          <div
            className="relative w-full"
            style={{
              backgroundImage: `url(${TEAM_BG})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% auto",
              backgroundPosition: "top center",
            }}
          >
            {/* ================= CARD WRAPPER ================= */}
            <div className="relative flex justify-center py-10">
              {/* Card Background */}
              <Image
                src={CARD_BG}
                alt="Team Card Background"
                width={320}
                height={520}
                className="team-card-bg object-contain"
              />

              {/* ================= CONTENT ================= */}
              <div className="absolute inset-0 flex flex-col items-center text-center mobile-team-card">
                <h2 className="mobile-team-id text-black">
                  {item.id}
                </h2>

                <h2 className="mobile-team-title font-medium tracking-wide">
                  {item.title}
                </h2>

                <p className="mobile-team-desc font-light text-black">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileTeam;
