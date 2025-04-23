"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import AboutUsVideo from "./AboutUsVideo";
import AboutUsArea from "./AboutUsArea";

gsap.registerPlugin(ScrollTrigger);

const AboutUsHome = () => {

    const titleRef = useRef(null);
    const charRefs = useRef([]);


    // Title animation
    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: {
                    from: 'random',
                    each: 0.05,
                },
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

    return (
        <div className="">

            {/* navbar */}
            <Navbar textColor="text-black" bgColor="bg-white" />


            {/* banner */}
            <div className='mt-32 md:mt-40 container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16 my-10'>
                    <h2
                        ref={titleRef}
                        className='text-left w-full max-w-2xl text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl text-gray-400 font-rota leading-tight whitespace-pre-wrap break-words'
                    >
                        {"Digital agency with a human touch.".split("").map((char, i) => (
                            <span
                                key={i}
                                ref={(el) => (charRefs.current[i] = el)}
                                className={char === " " ? '' : 'inline'}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>

                    <p className='text-left text-lg sm:text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed text-gray-600'>
                        We believe in forging real-talk, fist-bump relationships with our clients and shaping their brands and products into amazing digital experiences.
                    </p>
                </div>
            </div>


            {/* about us video */}
            <AboutUsVideo />

            {/* about us area */}
            <AboutUsArea />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default AboutUsHome;