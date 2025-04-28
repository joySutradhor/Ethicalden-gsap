"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ServiceGallery from "./ServiceGallery";

gsap.registerPlugin(ScrollTrigger);

const IndustryServices = () => {
    const titleRef = useRef(null);
    const wordRefs = useRef([]);
    const charRefs = useRef([]);
    const buttonRef = useRef(null);
    const buttonTextRef = useRef(null);
    const buttonBgRef = useRef(null);
    const buttonStaticTextRef = useRef(null);
    const buttonScrollingTextRef = useRef(null);

    wordRefs.current = [];
    charRefs.current = [];

    const addToWordRefs = (el) => {
        if (el && !wordRefs.current.includes(el)) {
            wordRefs.current.push(el);
        }
    };

    const addToCharRefs = (el) => {
        if (el && !charRefs.current.includes(el)) {
            charRefs.current.push(el);
        }
    };

    const splitTextIntoWords = (text, index) => {
        return text.split(" ").map((word, wordIndex) => (
            <span key={`${index}-${wordIndex}`} ref={addToWordRefs} className="inline-block">
                {word}&nbsp;
            </span>
        ));
    };

    const splitTextIntoChars = (text) => {
        return text.split('\n').map((line, lineIndex) => (
            <div key={lineIndex} className="block leading-tight">
                {line.split('').map((char, charIndex) => (
                    <span
                        key={`${lineIndex}-${charIndex}`}
                        ref={addToCharRefs}
                        className="char inline-block text-gray-400"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        ));
    };

    useEffect(() => {
        // Character animation
        gsap.fromTo(charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: {
                    from: 'random',
                    each: 0.03,
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: false,
                    toggleActions: "play none none none"
                }
            }
        );

        // Word animation
        wordRefs.current.forEach((wordEl, i) => {
            gsap.fromTo(
                wordEl,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wordEl,
                        start: "top 95%",
                        end: "top 75%",
                        scrub: true,
                    },
                }
            );
        });


        // Button animation setup
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

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

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
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
        };
    }, []);

    const paragraphs = [
        "From the fast-moving world of Fintech to the dynamic landscapes of telecommunications, from fuelling the spark of startups to navigating the corridors of corporate giants and the ever-evolving world of SaaS — we’ve left our mark in every digital frontier. Everything we do is a reflection of our deep understanding of industries we serve."
    ];

    const titleText = "We adapt to the\nunique demands of\neach industry. ";

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 z-10 mt-[6vh] md:mt-[15vh] lg:mt-[20vh]">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 ref={titleRef} className="font-helvetica font-extrabold text-4xl md:text-6xl xl:text-8xl leading-[1] mb-8">
                    {splitTextIntoChars(titleText)}
                </h2>

                <div className="flex flex-col sm:flex-row pt-8 gap-6 sm:gap-10">
                    <div className="hidden min-[580px]:flex min-[580px]:w-1/3 justify-center items-center">
                        <div className="" />
                    </div>

                    <div className="w-full sm:w-2/3">
                        {paragraphs.map((text, index) => (
                            <p
                                key={index}
                                className="font-helvetica text-xl md:text-2xl text-black pb-4 leading-relaxed reveal-paragraph"
                                ref={(el) => {
                                    if (el && !wordRefs.current.includes(el)) {
                                        wordRefs.current.push(el);
                                    }
                                }}
                            >
                                {splitTextIntoWords(text, index)}
                            </p>
                        ))}

                    </div>
                </div>

            </div>
            <ServiceGallery />
            <div className="mt-6 sm:mt-8 relative flex justify-center">
                <Link
                    ref={buttonRef}
                    className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg bg-[#09E5E5] overflow-hidden inline-flex items-center justify-center group"
                    href={"#"}
                    style={{ opacity: 1 }}
                >
                    <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                    <span
                        ref={buttonTextRef}
                        className="relative z-10 font-medium text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                    >
                        <span ref={buttonStaticTextRef} className="static-text">
                            View our work
                        </span>
                        <span
                            ref={buttonScrollingTextRef}
                            className="scrolling-text absolute left-0"
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <span key={i} className="inline-block mr-8">
                                    View our work
                                </span>
                            ))}
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default IndustryServices;