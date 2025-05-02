'use client'
import Navbar from '@/components/Shared/Navbar/Navbar';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '@/components/Shared/Footer/Footer';
import ContactForm from './ContactForm';
import GamePlan from './GamePlan';
import MoreAboutProject from './MoreAboutProject';
import SocialContact from './SocialContact';
import FAQSection from './FAQSection';


gsap.registerPlugin(ScrollTrigger);

const ContactHome = () => {

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
                        {"Things are about to get real.".split(" ").map((word, wi) => (
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
                        Whether you’re sketching the blueprint for a groundbreaking project or just want to shoot the breeze about digital possibilities, this is your backstage pass to make it happen. Let’s turn the blank page into your next chapter.
                    </p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10  mt-20'>
                    <div className='px-8 lg:px-6 xl:px-12 py-10 bg-yellow-200 rounded-2xl'>
                        <p className='text-xl '>01/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-lg md:text-2xl mt-10 font-helvetica'>I have a project in mind.</h3>
                    </div>
                    <div className='px-8 lg:px-6 xl:px-12 py-6 bg-cyan-800  rounded-2xl'>
                        <p className='text-xl text-cyan-300'>02/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-lg md:text-2xl mt-10 font-helvetica text-white'>I have something to tell you.</h3>
                    </div>
                    <div className='px-8 lg:px-6 xl:px-12 py-6 bg-cyan-800 rounded-2xl'>
                        <p className='text-xl text-cyan-300'>03/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-lg md:text-2xl mt-10 font-helvetica text-white'>I have a bussiness proposal.</h3>
                    </div>
                </div>
            </div>


            {/* contact form */}
            <ContactForm />

            {/* game plan */}
            <GamePlan />

            {/* more about project */}
            <MoreAboutProject />

            {/* social contact */}
            <SocialContact />

            {/* FAQ  */}
            <FAQSection />



            {/* footer */}
            <Footer />
        </div>
    );
};

export default ContactHome;