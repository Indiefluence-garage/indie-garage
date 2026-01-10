"use client";

import { useState, useEffect } from "react";
import DesktopHome from "@/components/home/DesktopHome";
import MobileHome from "@/components/home/MobileHome";
import HomeLoader from "@/components/shared/HomeLoader";

export default function Page() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // 1000ms slide + 500ms buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HOME LOADER - Shows until fully loaded */}
      {showLoader && <HomeLoader />}

      {/* MOBILE */}
      <div className="block md:hidden">
        <MobileHome />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </>
  );
}