"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { preloadImage } from "@/utils/preloadAssets";

const MobileFooter = () => {
  const navItems = [
    { icon: "/assets/navbar/home.png", fruit: "/assets/footer/mango.svg" },
    { icon: "/assets/navbar/about.png", fruit: "/assets/footer/cherry.svg" },
    { icon: "/assets/navbar/services.png", fruit: "/assets/footer/grapes.svg" },
    { icon: "/assets/navbar/work.png", fruit: "/assets/footer/orange.svg" },
  ];

  const socialIcons = [
    { name: "LinkedIn", icon: "/assets/footer/linkedin.png", url: "#" },
    { name: "YouTube", icon: "/assets/footer/youtube.png", url: "#" },
    { name: "Instagram", icon: "/assets/footer/insta.png", url: "#" },
  ];

  /* ================= PRELOAD LOGIC ================= */
  useEffect(() => {
    // Decorative SVGs
    preloadImage("/assets/footer/mobile-footer-top-design.svg");
    preloadImage("/assets/footer/mobile-bottom-footer-design.svg");

    // Logo
    preloadImage("/assets/navbar/inide-grage-logo.svg");

    // Nav icons + fruit images (IMPORTANT)
    navItems.forEach(({ icon, fruit }) => {
      preloadImage(icon);
      preloadImage(fruit);
    });

    // Social icons
    socialIcons.forEach(({ icon }) => {
      preloadImage(icon);
    });
  }, []);

  return (
    <footer className="w-full bg-[#FFFDF1]">
      {/* Top decorative SVG */}
      <div className="w-full">
        <Image
          src="/assets/footer/mobile-footer-top-design.svg"
          alt="Footer top decoration"
          width={1000}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Main footer content */}
      <div className="p-4">
        {/* Logo */}
        <div className="w-full mb-6 pt-10">
          <Image
            src="/assets/navbar/inide-grage-logo.svg"
            alt="Indiefluence Garage Logo"
            width={300}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Navigation */}
        <div>
          <div className="border-t border-[#7D7D7D] opacity-35" />

          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between py-7 px-3">
                {/* Nav icon */}
                <div className="h-12 flex items-center">
                  <Image
                    src={item.icon}
                    alt="Navigation icon"
                    width={100}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Fruit icon */}
                <div className="w-15 h-14 flex items-center justify-end flex-shrink-0">
                  <Image
                    src={item.fruit}
                    alt="Fruit decoration"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="border-t border-[#7D7D7D] opacity-35" />
            </React.Fragment>
          ))}

          {/* Social icons */}
          <div className="flex items-center justify-between py-6 px-3 gap-10">
            {socialIcons.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center transition-transform hover:scale-110"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={64}
                  height={64}
                  className="w-20 h-20 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative SVG */}
      <div className="w-full">
        <Image
          src="/assets/footer/mobile-bottom-footer-design.svg"
          alt="Footer bottom decoration"
          width={1000}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
};

export default MobileFooter;
