"use client";

import { useEffect } from "react";
import Image from "next/image";
import { preloadImage } from "@/utils/preloadAssets";

const navItems = [
  { src: "/assets/navbar/home.png", alt: "Home" },
  { src: "/assets/navbar/review.png", alt: "Review" },
  { src: "/assets/navbar/services.png", alt: "Services" },
  { src: "/assets/navbar/work.png", alt: "Work" },
  { src: "/assets/navbar/contact.png", alt: "Contact Us" },
];

const Navbar = () => {
  useEffect(() => {
    // Preload logo SVG
    preloadImage("/assets/navbar/inide-grage-logo.svg");

    // Preload nav item SVGs
    navItems.forEach((item) => {
      preloadImage(item.src);
    });
  }, []);

  return (
    <header className="w-full bg-[#FFFDF1] border-b border-[#7D7D7D] fixed top-0 left-0 right-0 z-50">
      <div className="grid grid-cols-[1.5fr_repeat(5,1fr)] h-[80px]">

        {/* Logo */}
        <div className="flex items-center px-6 border-r border-[#7D7D7D]">
          <Image
            src="/assets/navbar/inide-grage-logo.svg"
            alt="Indiefluence Garage"
            width={160}
            height={80}
            priority
          />
        </div>

        {/* Nav Items */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center border-r border-[#7D7D7D] last:border-r-0 cursor-pointer hover:bg-[#efe9d8] transition-colors"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={140}
              height={40}
              className="lg:max-h-[30px] xl:max-h-[40px] w-auto"
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
