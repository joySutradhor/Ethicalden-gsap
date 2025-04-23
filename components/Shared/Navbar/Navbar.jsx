'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import gsap from 'gsap';

const Navbar = ({ textColor = 'text-black', bgColor = 'bg-white' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const buttonBgRef = useRef(null);
  const buttonStaticTextRef = useRef(null);
  const buttonScrollingTextRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const textWrapper = buttonTextRef.current;
    const bg = buttonBgRef.current;
    const staticText = buttonStaticTextRef.current;
    const scrollingText = buttonScrollingTextRef.current;

    gsap.set(button, { opacity: 1, y: 0 });
    gsap.set(bg, {
      scaleX: 0,
      transformOrigin: "center center",
      backgroundColor: "#9EFCF1"
    });
    gsap.set(scrollingText, { opacity: 0, x: 0 });
    gsap.set(staticText, { opacity: 1 });

    const hoverTL = gsap.timeline({ paused: true });

    hoverTL
      .to(bg, { scaleX: 1, duration: 0.5, ease: "power2.out" })
      .to(staticText, { opacity: 0, duration: 0.2 }, "-=0.2")
      .to(scrollingText, { opacity: 1, duration: 0.2 })
      .to(textWrapper, { color: "black", duration: 0.3 }, "-=0.3");

    let scrollTween;

    const handleMouseEnter = () => {
      hoverTL.play().then(() => {
        if (!scrollTween) {
          const contentWidth = scrollingText.scrollWidth;
          const buttonWidth = button.offsetWidth;
          const duration = contentWidth / 50;

          scrollTween = gsap.to(scrollingText, {
            x: `-=${contentWidth - buttonWidth}`,
            duration: duration,
            ease: "linear",
            repeat: -1
          });
        } else {
          scrollTween.play();
        }
      });
    };

    const handleMouseLeave = () => {
      hoverTL.reverse();
      if (scrollTween) {
        scrollTween.pause();
        gsap.set(scrollingText, { x: 0 });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    gsap.from(button, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: button,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      hoverTL.kill();
      if (scrollTween) scrollTween.kill();
    };
  }, []);

  return (
    <>
      <nav className={`top-0 left-0 w-full flex items-center justify-between px-6 py-6 ${textColor} ${bgColor}`}>
      <a
        href="/"
        className={`text-3xl font-rota tracking-wide bg-gradient-to-r from-[#09E5E5] via-[#2BEAC5] to-[#A8FF57] bg-clip-text text-transparent`}
      >
        Ethicalden
      </a>


        <div className={`hidden md:flex items-center gap-8 font-medium ${textColor} relative`}>
          <a href="about-den">About Den</a>
          <a href="services">Services</a>
          <a href="products">Products</a>

          <div className="relative">
            <button
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className="flex items-center gap-1 hover:text-[#003b49]"
            >
              Sub brands
              <HiChevronDown
                className={`transform transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {subMenuOpen && (
              <div className={`absolute left-0 mt-2 py-2 w-40 z-50 ${bgColor} shadow-lg rounded`}>
                <a
                  href="https://eduden.example.com"
                  className="block px-4 py-2 hover:bg-gray-100"
                  target="_blank" rel="noopener noreferrer"
                >
                  Eduden
                </a>
                <a
                  href="https://hivyr.example.com"
                  className="block px-4 py-2 hover:bg-gray-100"
                  target="_blank" rel="noopener noreferrer"
                >
                  Hivyr
                </a>
              </div>
            )}
          </div>

          <Link
            ref={buttonRef}
            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg bg-[#003b49] overflow-hidden inline-flex items-center justify-center group"
            href={"#"}
            style={{ opacity: 1 }}
          >
            <span ref={buttonBgRef} className="absolute inset-0 z-0" />
            <span
              ref={buttonTextRef}
              className="relative z-10 font-medium text-white overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
            >
              <span ref={buttonStaticTextRef} className="static-text">
                Let's Talk
              </span>
              <span
                ref={buttonScrollingTextRef}
                className="scrolling-text absolute left-0"
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="inline-block mr-8">
                    Let's Talk
                  </span>
                ))}
              </span>
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`md:hidden px-6 pb-6 ${bgColor} z-50`}>
          <div className={`hidden md:flex items-center gap-8 font-medium ${textColor} relative`}>
            <a href="about-den" onClick={() => setIsMenuOpen(false)}>About Den</a>
            <a href="services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="https://eduden.example.com" target="_blank" rel="noopener noreferrer">Eduden</a>
            <a href="https://hivyr.example.com" target="_blank" rel="noopener noreferrer">Hivyr</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
