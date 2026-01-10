"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { preloadImage } from "@/utils/preloadAssets";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const navItemsRef = useRef([]);

  /* ================= PRELOAD ================= */
  useEffect(() => {
    preloadImage("/assets/navbar/inide-grage-logo.svg");
    preloadImage("/assets/navbar/hamburger.svg");
    preloadImage("/assets/navbar/cross.svg");
    preloadImage("/assets/navbar/home.png");
    preloadImage("/assets/navbar/review.png");
    preloadImage("/assets/navbar/services.png");
    preloadImage("/assets/navbar/work.png");
    preloadImage("/assets/navbar/contact.png");
  }, []);

  /* ================= OPEN MENU ================= */
  useEffect(() => {
    if (!isOpen) return;

    gsap.killTweensOf([
      menuRef.current,
      overlayRef.current,
      navItemsRef.current,
    ]);

    gsap.set(menuRef.current, { x: "100%" });
    gsap.set(overlayRef.current, { opacity: 0, display: "block" });
    gsap.set(navItemsRef.current, { opacity: 0, x: -100 });

    gsap
      .timeline()
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(
        menuRef.current,
        {
          x: "0%",
          duration: 0.35,
          ease: "power3.out",
        },
        "-=0.1"
      )
      .to(
        navItemsRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, [isOpen]);

  /* ================= FAST CLOSE + SCROLL ================= */
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // ⛔ stop instant anchor scroll

    gsap.killTweensOf([
      menuRef.current,
      overlayRef.current,
      navItemsRef.current,
    ]);

    gsap.timeline({
      onComplete: () => {
        gsap.set(overlayRef.current, { display: "none" });
        setIsOpen(false);

        // ✅ scroll AFTER menu closes
        if (targetId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(targetId);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
    })
      .to(menuRef.current, {
        x: "100%",
        duration: 0.18, // ⚡ very fast
        ease: "power3.in",
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.15,
          ease: "power2.in",
        },
        "-=0.1"
      );
  };

  const toggleMenu = () => {
    if (isOpen) {
      handleNavClick(new Event("click"), null);
    } else {
      setIsOpen(true);
    }
  };

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { name: "HOME", image: "/assets/navbar/home.png", targetId: "home" },
    {
      name: "REVIEW",
      image: "/assets/navbar/review.png",
      targetId: "testimonials",
    },
    {
      name: "SERVICES",
      image: "/assets/navbar/services.png",
      targetId: "services",
    },
    { name: "WORK", image: "/assets/navbar/work.png", targetId: "clients" },
    {
      name: "CONTACT US",
      image: "/assets/navbar/contact.png",
      targetId: "contact",
    },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <nav className="w-full bg-[#FFFDF1] px-6 py-3 flex items-center justify-between fixed top-0 left-0 z-40">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center h-14 cursor-pointer"
        >
          <img
            src="/assets/navbar/inide-grage-logo.svg"
            alt="Indie Garage Logo"
            className="h-14 w-auto block"
          />
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <img
            src="/assets/navbar/hamburger.svg"
            alt="Menu"
            className="w-9 h-9"
          />
        </button>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/20 z-50 hidden"
        onClick={(e) => handleNavClick(e, "home")}
      />

      {/* ================= SLIDE MENU ================= */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[80%] bg-[#FFFDF1] z-50 overflow-y-auto shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div>
          <div className="flex justify-end p-5">
            <button
              onClick={(e) => handleNavClick(e, "home")}
              aria-label="Close menu"
              ref={(el) => (navItemsRef.current[navItems.length] = el)}
            >
              <img
                src="/assets/navbar/cross.svg"
                alt="Close"
                className="w-9 h-9"
              />
            </button>
          </div>

          <div className="w-full h-[1px] bg-gray-200" />

          <div className="p-5">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <div
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className="py-6 flex justify-end"
                >
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-auto h-11 object-contain"
                    />
                  </a>
                </div>

                {index < navItems.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
