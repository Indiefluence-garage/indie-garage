'use client';
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import '@/components/css/clients-banner.css';

const ClientsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const clients = [
    {
      id: 1,
      image: "/assets/client-banner/myro-test.png",
      website: "https://myro.bot"
    },
    {
      id: 2,
      image: "/assets/client-banner/goldstar-banner.png",
      website: "https://goldstar.com"
    },
    {
      id: 3,
      image: "/assets/client-banner/rabbit-banner.png",
      website: "https://rabbitautocare.com"
    }
  ];

  const slideWidth = 968;

  const animateSlide = (index) => {
    gsap.to(slidesRef.current, {
      x: -index * slideWidth,
      duration: 0.8,
      ease: "power2.inOut"
    });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < clients.length - 1) {
      animateSlide(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      animateSlide(currentIndex - 1);
    }
  };

  const handleBannerClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    gsap.set(slidesRef.current, { x: 0 });
  }, []);

  return (
    <section className="clients-section">
      {/* HEADER BADGE */}
      <img
        src="/assets/client-banner/header-badge.png"
        alt="Kaam jo chhaap chhode"
        className="header-badge-blend print-blend"
      />

      {/* SLIDER */}
      <div className="slider-wrapper">
        <div ref={slidesRef} className="slides-track">
          {clients.map((client) => (
            <div
              key={client.id}
              className="slide"
              onClick={() => handleBannerClick(client.website)}
            >
              <Image
                src={client.image}
                alt={`Client ${client.id}`}
                width={968}
                height={508}
                className="print-blend"
                priority={client.id === 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="nav-buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          <Image
            src="/assets/client-banner/pre-test.png"
            alt="Previous"
            width={110}
            height={48}
            className="print-blend"
          />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === clients.length - 1}
        >
          <Image
            src="/assets/client-banner/next-test.png"
            alt="Next"
            width={110}
            height={48}
            className="print-blend"
          />
        </button>
      </div>
    </section>
  );
};

export default ClientsBanner;
