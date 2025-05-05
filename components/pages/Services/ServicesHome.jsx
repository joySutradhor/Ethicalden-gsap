'use client'
import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesArea from './ServicesArea';
import Footer from '@/components/Shared/Footer/Footer';
import IndustryServices from './IndustryServices';
import TechStack from './TechStack';
import ServiceVideo from './ServiceVideo';

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
            <Navbar backgroundColor="white" textColor="black"  />


            {/* banner */}
            <div className='mt-20 md:mt-40 lg:mt-30 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-10 my-10'>
                    <h2
                        ref={titleRef}
                        className="text-left w-full  text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06]"
                    >
                        {"The art of bringing it all together".split(" ").map((word, wi) => (
                            <span key={wi} className="whitespace-nowrap inline-block mr-2">
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                        style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>


                    <p className='text-left text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed text-black'>
                    Anyone can design or code something and call it a project, but it’s the artistry of bringing your story to life, and the expertise that comes with experience, that sets us apart.
                    </p>
                </div>
            </div>


            {/* service video */}
            <ServiceVideo />

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