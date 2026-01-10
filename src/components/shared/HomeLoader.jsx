"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { preloadImage } from "@/utils/preloadAssets";

const HomeLoader = () => {
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Preload loader SVG
    preloadImage("/assets/homeLoader/home-loader.svg");

    let progressInterval;
    let loadComplete = false;

    // Track all images and resources
    const trackPageLoad = () => {
      // Get all images on the page
      const images = Array.from(document.images);
      const totalImages = images.length;
      let loadedImages = 0;

      // If no images, complete immediately
      if (totalImages === 0) {
        handleLoadComplete();
        return;
      }

      // Track each image
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
          updateProgress(loadedImages, totalImages);
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            updateProgress(loadedImages, totalImages);
          });
          img.addEventListener("error", () => {
            loadedImages++;
            updateProgress(loadedImages, totalImages);
          });
        }
      });
    };

    const updateProgress = (loaded, total) => {
      const percentage = Math.round((loaded / total) * 100);
      setProgress(percentage);

      if (percentage >= 100 && !loadComplete) {
        loadComplete = true;
        handleLoadComplete();
      }
    };

    const handleLoadComplete = () => {
      setProgress(100);
      setIsComplete(true);
      
      // Wait a brief moment at 100% before sliding away
      setTimeout(() => {
        setHide(true);
      }, 500);
    };

    // Simulate progress for initial load
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 10;
      });
    }, 300);

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setTimeout(trackPageLoad, 100);
    } else {
      window.addEventListener("load", trackPageLoad);
    }

    // Fallback: force hide after 10 seconds
    const fallbackTimer = setTimeout(() => {
      if (!loadComplete) {
        handleLoadComplete();
      }
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fallbackTimer);
      window.removeEventListener("load", trackPageLoad);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF1] transition-transform duration-1000 ease-in-out
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Loader SVG */}
      <Image
        src="/assets/homeLoader/home-loader.svg"
        alt="Home Loader"
        width={400}
        height={400}
        priority
        className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[550px] lg:h-[550px] mb-0 object-contain"
      />

      {/* Progress Bar Container */}
      <div className="w-64 md:w-96">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-[#D4A574] to-[#B8935E] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-center">
          <span className="text-sm font-lato text-gray-600">
            {Math.round(progress)}%
          </span>
          {!isComplete && (
            <p className="text-xs text-gray-500 mt-1">Loading content...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;