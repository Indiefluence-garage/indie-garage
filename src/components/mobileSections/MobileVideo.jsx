"use client";

import { useEffect } from "react";
import { preloadVideo } from "@/utils/preloadAssets";

const VIDEO_SRC = "/assets/hero-section/intro-section/intro-video.mp4";

const MobileVideo = () => {
  useEffect(() => {
    preloadVideo(VIDEO_SRC, "video/mp4");
  }, []);

  return (
    <section className="w-full h-screen  overflow-visible">
      <video
        className="w-full h-full object-fill"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default MobileVideo;
