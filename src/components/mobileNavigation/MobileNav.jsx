'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Set initial states - menu slides from RIGHT, items slide from LEFT
      gsap.set(menuRef.current, { x: '100%' });
      gsap.set(overlayRef.current, { opacity: 0, display: 'block' });
      gsap.set(navItemsRef.current, { opacity: 0, x: -100 });

      // Animation timeline
      const tl = gsap.timeline();
      
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      .to(menuRef.current, {
        x: '0%',
        duration: 0.4,
        ease: 'power3.out'
      }, '-=0.1')
      .to(navItemsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      }, '-=0.2');
      
    } else if (menuRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
      
      tl.to(navItemsRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.in'
      })
      .to(menuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in'
      }, '-=0.1')
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      }, '-=0.2');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'HOME', image: '/assets/navbar/home.png' },
    { name: 'ABOUT', image: '/assets/navbar/about.png' },
    { name: 'SERVICES', image: '/assets/navbar/services.png' },
    { name: 'WORK', image: '/assets/navbar/work.png' },
    { name: 'CONTACT US', image: '/assets/navbar/contact.png' }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full bg-[#FFFDF1] px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-40">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/assets/navbar/inide-grage-logo.svg" 
            alt="Indie Garage Logo" 
            className="h-16"
          />
        </div>

        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <img 
            src="/assets/navbar/hamburger.svg" 
            alt="Menu" 
            className="w-10 h-10"
          />
        </button>
      </nav>

      {/* Black Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/20 z-50 hidden"
        onClick={toggleMenu}
      />

      {/* Slide-out Menu - RIGHT SIDE */}
      <div 
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[80%] bg-[#FFFDF1] z-50 overflow-y-auto shadow-2xl"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="">
          {/* Close Button - Right Aligned */}
          <div className="flex justify-end mb-0 p-5">
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
              ref={el => navItemsRef.current[navItems.length] = el}
            >
              <img 
                src="/assets/navbar/cross.svg" 
                alt="Close" 
                className="w-10 h-10"
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-gray-200 opacity-100 p-0" />

          {/* Navigation Items - Right Aligned */}
          <div className="space-y-0 p-5">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <div
                  ref={el => navItemsRef.current[index] = el}
                  className="py-6 flex justify-end"
                >
                  <a 
                    href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleMenu}
                    className="block"
                  >
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-auto h-12 object-contain"
                    />
                  </a>
                </div>
                {index < navItems.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200 opacity-100" />
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