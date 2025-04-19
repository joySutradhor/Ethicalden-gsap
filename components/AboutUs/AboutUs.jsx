"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutUsMain = () => {
    const titleRef = useRef(null);
    const wordRefs = useRef([]);
    const charRefs = useRef([]);

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

        gsap.fromTo(
            wordRefs.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: wordRefs.current[0],
                    start: "top 80%",
                    end: "top 40%",
                    scrub: false,
                },
            }
        );
    }, []);

    const paragraphs = [
        "We use experience and creativity to break the mold and craft digital experiences that defy the status quo. Harnessing the cutting-edge technologies of today, we disrupt, innovate and shape the behaviors of tomorrow.",
        "Our portfolio is not a simple list of projects. It is a map of digital adventures we shared with our clients, whether they are small family businesses and startups or big players on the corporate scene.",
        "Storytelling is at the core of everything we do. We turn pixels into masterpieces by designing and developing impactful brand identities, websites, mobile apps, marketing strategies and campaigns."
    ];

    const titleText = "We create impactful\ndigital experiences\nand redefine brand\nidentities.";

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 z-10 mt-[20vh]">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center sm:text-left"
                >
                    {splitTextIntoChars(titleText)}
                </h2>

                <div className="flex flex-col sm:flex-row pt-8 gap-6 sm:gap-10">
                    {/* Left Side (Image or Empty Placeholder) */}
                    <div className="hidden min-[580px]:flex min-[580px]:w-1/3 justify-center items-center">
                        <div className="" />
                    </div>


                    {/* Right Side (Text + Button) */}
                    <div className="w-full sm:w-2/3">
                        {paragraphs.map((text, index) => (
                            <p key={index} className="text-gray-600 text-base sm:text-lg md:text-xl pb-4 leading-relaxed">
                                {splitTextIntoWords(text, index)}
                            </p>
                        ))}

                        <div className="mt-6 sm:mt-8">
                            <Link
                                className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-full text-base sm:text-lg shadow-md transition-all inline-flex items-center justify-center"
                                href={"#"}
                            >
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsMain;
