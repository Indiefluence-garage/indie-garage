"use client";
import { useEffect } from "react";
import Image from "next/image";
import { preloadImage } from "@/utils/preloadAssets";

const navItems = [
  {
    src: "/assets/navbar/home.png",
    alt: "Home",
    targetId: "home",
  },
  {
    src: "/assets/navbar/review.png",
    alt: "Review",
    targetId: "testimonials",
  },
  {
    src: "/assets/navbar/services.png",
    alt: "Services",
    targetId: "services",
  },
  {
    src: "/assets/navbar/work.png",
    alt: "Work",
    targetId: "clients",
  },
  {
    src: "/assets/navbar/contact.png",
    alt: "Contact Us",
    targetId: "contact",
  },
];

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  /* ================= PRELOAD ASSETS ================= */
  useEffect(() => {
    preloadImage("/assets/navbar/inide-grage-logo.svg");
    navItems.forEach((item) => {
      preloadImage(item.src);
    });
  }, []);

  /* ================= SMOOTH SCROLL (FIXED) ================= */
  const handleScroll = (targetId) => {
    // Home → scroll to top
    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Find the target section
    const section = document.getElementById(targetId);
    if (!section) {
      console.error(`Section with id "${targetId}" not found`);
      return;
    }

    // Calculate position accounting for navbar
    const yOffset = -NAVBAR_HEIGHT;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + yOffset;

    // Smooth scroll to position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full bg-[#FFFDF1] border-b border-[#7D7D7D] fixed top-0 left-0 right-0 z-50">
      <div className="grid grid-cols-[1.5fr_repeat(5,1fr)] h-[80px]">
        {/* ================= LOGO ================= */}
        <div
          className="flex items-center px-6 border-r border-[#7D7D7D] cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <Image
            src="/assets/navbar/inide-grage-logo.svg"
            alt="Indiefluence Garage"
            width={160}
            height={80}
            priority
          />
        </div>
        {/* ================= NAV ITEMS ================= */}
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleScroll(item.targetId)}
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