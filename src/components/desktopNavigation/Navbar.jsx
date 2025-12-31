"use client";
import Image from "next/image";

const navItems = [
  { src: "/assets/navbar/home-text.png", alt: "Home" },
  { src: "/assets/navbar/about-text.png", alt: "About" },
  { src: "/assets/navbar/services-text.png", alt: "Services" },
  { src: "/assets/navbar/work-text.png", alt: "Work" },
  { src: "/assets/navbar/contact-text.png", alt: "Contact Us" },
];

const Navbar = () => {
  return (
    <header className="w-full bg-[#FFFDF1] border-b border-[#7D7D7D] fixed top-0 left-0 right-0 z-50 hidden xl:block">
      <div className="grid grid-cols-[1.5fr_repeat(5,1fr)] h-[80px]">
        {/* Logo */}
        <div className="flex items-center px-6 border-r border-[#7D7D7D] overflow-hidden">
          <Image
            src="/assets/navbar/inide-grage-logo.svg"
            alt="Indiefluence Garage"
            width={160}
            height={80}
            priority
            className=""
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
              className="max-h-[40px] w-auto"
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;