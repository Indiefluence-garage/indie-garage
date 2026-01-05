"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const HomeLoader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Loader visible for 2.5 seconds
    const timer = setTimeout(() => {
      setHide(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#FFFDF1] transition-transform duration-1000 ease-in-out
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <Image
        src="/assets/homeLoader/home-loader.svg"
        alt="Home Loader"
        width={320}
        height={320}
        priority
        className="w-85 md:w-173.5 md:h-78.75"
      />
    </div>
  );
};

export default HomeLoader;
