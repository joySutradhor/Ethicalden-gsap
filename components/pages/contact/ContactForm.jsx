'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const ContactForm = () => {
    // Refs for each input field
    const nameRef = useRef(null);
    const companyRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // Handle focus event
    const handleFocus = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder) {
            gsap.to(placeholder, {
                y: -15,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    // Handle blur event
    const handleBlur = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder && !e.target.value) {
            gsap.to(placeholder, {
                y: 0,
                fontSize: '20px',
                color: 'rgb(209 213 219)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

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
            backgroundColor: "#09e5e5"
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


    return (
        <div className="mt-15 md:mt-18 lg:mt-24 xl:mt-50 px-5 md:px-10 lg:px-10 xl:px-20 xl:max-w-screen-2xl xl:mx-auto p-6 bg-white rounded-lg">
            <div className='mb-6 lg:flex gap-20'>
                <div className="flex-1/3">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1]" style={{ letterSpacing: "-0.05em" }}>Start with some basic info.</h2>
                    <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica">
                        The name and e-mail address are mandatory, the rest would be nice but we can live without it.
                    </p>
                </div>

                <div className="space-y-4 flex-2/3 relative">
                    {/* Name Field */}
                    <div className="relative">
                        <label
                            htmlFor="name"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                        <label
                            htmlFor="company"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your company's name
                        </label>
                        <input
                            ref={companyRef}
                            type="text"
                            id="company"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your e-mail address
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <label
                            htmlFor="phone"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Phone number
                        </label>
                        <input
                            ref={phoneRef}
                            type="tel"
                            id="phone"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    {/* Send Inquiry Button */}
                    <div className="my-6 sm:mt-8 relative inline-block">
                        <Link
                            ref={buttonRef}
                            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group"
                            href={"#"}
                            style={{ opacity: 1 }}
                        >
                            <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                            <span
                                ref={buttonTextRef}
                                className="relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                            >
                                <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                                    Send Inquiry
                                </span>
                                <span
                                    ref={buttonScrollingTextRef}
                                    className="scrolling-text absolute left-0"
                                >
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className="inline-block mr-8 font-helvetica">
                                            Send Inquiry
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ContactForm;