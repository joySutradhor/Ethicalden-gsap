'use client'
import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { useEffect, useRef } from 'react';
import AboutUsVideo from '../AboutUs/AboutUsVideo';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesArea from './ServicesArea';
import Footer from '@/components/Shared/Footer/Footer';
import IndustryServices from './IndustryServices';
import TechStack from './TechStack';

gsap.registerPlugin(ScrollTrigger);

const ServicesHome = () => {

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
        <div>
            {/* navbar */}
            <Navbar textColor="text-black" bgColor="bg-white" />


            {/* banner */}
            <div className='mt-32 md:mt-40 px-20 md:px-20 lg:px-30 xl:max-w-screen-xl xl:mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16 my-10'>
                    <h2
                        ref={titleRef}
                        className="text-left w-full max-w-2xl text-4xl  md:text-6xl lg:text-6xl xl:text-6xl text-gray-400 font-helvetica font-extrabold leading-[1]"
                    >
                        {"The art of bringing it all together".split(" ").map((word, wi) => (
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


                    <p className='text-left text-lg sm:text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed text-black'>
                    Anyone can design or code something and call it a project, but it’s the artistry of bringing your story to life, and the expertise that comes with experience, that sets us apart.
                    </p>
                </div>
            </div>


            {/* about us video */}
            <AboutUsVideo />

            {/* services area */}
            <ServicesArea />

            {/* Industry services */}
            <IndustryServices />
            

            {/* techstack */}
            <TechStack />
            

            {/* footer */}
            <Footer />
        </div>
    );
};

export default ServicesHome;