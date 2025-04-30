'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NewBanner = () => {
  const titleRef = useRef(null);
  const charRefs = useRef([]);
  const statsRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);

  const stats = [
    { number: "500", label: "Satisfied Customers" },
    { number: "15", label: "Website Awards" },
    { number: "20", label: "years on the market" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate title color on scroll
  useEffect(() => {
    if (!charRefs.current.length) return;
    gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: 'black',
        stagger: { from: 'random', each: 0.05 },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  // Cycle stats every 4 seconds with GSAP animation
  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();

      tl.to([numberRef.current, textRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex(prev => (prev + 1) % stats.length);
        }
      });

      tl.fromTo(
        [numberRef.current, textRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Button animation setup
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

      // Initial setup
      gsap.set(button, { opacity: 1, y: 0 });
      gsap.set(bg, {
          scaleX: 0,
          transformOrigin: "center center",
          backgroundColor: "#4DEFA7"
      });
      gsap.set(scrollingText, { opacity: 0, x: 0 });
      gsap.set(staticText, { opacity: 1 });

      const hoverTL = gsap.timeline({ paused: true });

      hoverTL
          .to(bg, {
              scaleX: 1,
              duration: 0.5,
              ease: "power2.out"
          })
          .to(staticText, {
              opacity: 0,
              duration: 0.2
          }, "-=0.2")
          .to(scrollingText, {
              opacity: 1,
              duration: 0.2
          })
          .to(textWrapper, {
              color: "black",
              duration: 0.3
          }, "-=0.3");

      let scrollTween;

      const handleMouseEnter = () => {
          hoverTL.play().then(() => {
              // Start scrolling animation only after the hover animation completes
              if (!scrollTween) {
                  const contentWidth = scrollingText.scrollWidth;
                  const buttonWidth = button.offsetWidth;
                  const duration = contentWidth / 50; // Adjust speed here (lower number = faster)

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
              // Reset position when mouse leaves
              gsap.set(scrollingText, { x: 0 });
          }
      };

      button?.addEventListener("mouseenter", handleMouseEnter);
      button?.addEventListener("mouseleave", handleMouseLeave);

      gsap.from(button, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
          scrollTrigger: {
              trigger: button,
              start: "top 85%",
              toggleActions: "play none none none"
          }
      });

      return () => {
          button?.removeEventListener("mouseenter", handleMouseEnter);
          button?.removeEventListener("mouseleave", handleMouseLeave);
          hoverTL.kill();
          if (scrollTween) scrollTween.kill();
      };
  }, []);

  const titleText = "Extraordinary\nDigital Experiences";

  return (
    <section className="bg-white py-16 px-5  md:px-10 lg:px-10 xl:px-40 2xl:px-50">
      <div className="">
        <div className="mb-12">
          <h1
            ref={titleRef}
            className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1]"
          >
            {
              titleText.split("").map((char, index) =>
                char === "\n" ? (
                  <br key={index} />
                ) : (
                  <span
                    key={index}
                    ref={el => charRefs.current[index] = el}
                    className={`inline-block text-gray-400 ${char === " " ? "w-2 lg:w-4" : ""}`}
                    style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                )
              )
            }
          </h1>
        </div>

        <div className="xl:flex md:flex-row items-center justify-between gap-8 mt-12 md:mt-20 lg:mt-28">
          {/* Animated Number & Label */}
          <div ref={statsRef} className="flex-1 text-center flex gap-5 md:gap-8 items-center overflow-hidden">
            <p
              
              className="text-2xl font-bold text-white bg-black w-14 h-14 lg:w-20 lg:h-20 mb-5 lg:mb-10 flex items-center justify-center rounded-full"
            >
              <span ref={numberRef}>{stats[currentIndex].number}</span>
            </p>
            <p
              ref={textRef}
              className="text-xl text-gray-600"
            >
              {stats[currentIndex].label}
            </p>
          </div>

          <div className="flex-1 md:flex gap-18 xl:gap-10 md:justify-between md:items-center">
            <p className="text-2xl text-black mb-8">
              We craft extraordinary websites and e-commerce that deliver real results.
            </p>
            <div className="">
                        <Link
                            ref={buttonRef}
                            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#09E5E5] overflow-hidden inline-flex items-center justify-center group"
                            href={"/contact"}
                            style={{ opacity: 1 }}
                        >
                            <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                            <span
                                ref={buttonTextRef}
                                className="relative z-10 font-bold text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                            >
                                <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                                    Our Work
                                </span>
                                <span
                                    ref={buttonScrollingTextRef}
                                    className="scrolling-text absolute left-0"
                                >
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className="inline-block mr-8 font-helvetica">
                                            Our Work
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </Link>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
