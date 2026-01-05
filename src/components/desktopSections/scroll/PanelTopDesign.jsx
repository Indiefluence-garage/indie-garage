"use client";

import Image from "next/image";
import { forwardRef } from "react";

const PanelTopDesign = forwardRef(function PanelTopDesign(_, ref) {
  return (
    <div
      ref={ref}
      className="absolute top-0 -left-2 w-full h-[109px] z-40 pointer-events-none"
    >
      <Image
        src="/assets/hero-section/pane-1-2-top-design.svg"
        alt="Panel top design"
        fill
        priority
        className="object-repeat-x"
      />
    </div>
  );
});

export default PanelTopDesign;
