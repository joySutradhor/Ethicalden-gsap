"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import AboutUsVideo from "./AboutUsVideo";
import AboutUsArea from "./AboutUsArea";
import MeetTheCrew from "./MeetTheCrew";
import Recognition from "./Recognition";
import AwardsSection from "./AwardSection";
import AllStoriesMain from "@/components/AllStories/AllStories";

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
            <div className='mt-32 md:mt-40 px-5 md:px-10 lg:px-10 xl:max-w-screen-2xl xl:mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16 my-10'>
                    <h2
                        ref={titleRef}
                        className="text-left w-full  text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl text-gray-400 font-helvetica font-extrabold leading-[1]"
                    >
                        {"Digital agency with a human touch.".split(" ").map((word, wi) => (
                            <span key={wi} className="whitespace-nowrap inline-block mr-2">
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>


                    <p className='text-left text-lg sm:text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed font-helvetica text-black'>
                        We believe in forging real-talk, fist-bump relationships with our clients and shaping their brands and products into amazing digital experiences.
                    </p>
                </div>
            </div>


            {/* about us video */}
            <AboutUsVideo />

            {/* about us area */}
            <AboutUsArea />

            {/* meet the crew */}
            <MeetTheCrew />

            {/* recognition */}
            <Recognition />

            {/* award section */}
            <AwardsSection />

            {/* all stories */}
            <AllStoriesMain />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default AboutUsHome;