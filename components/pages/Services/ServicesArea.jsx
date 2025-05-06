'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import OurProcess from './OurProcess';

gsap.registerPlugin(ScrollTrigger);

const ServicesArea = () => {
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    const img1 = '/images/about-us/2nd.jpg'
    const img2 = '/images/about-us/1st.jpg'

    useEffect(() => {
        // Animate character-by-character title
        if (!charRefs.current.length) return;

        gsap.fromTo(
            charRefs.current,
            { color: 'black' },
            {
                color: 'white',
                stagger: {
                    from: 'random',
                    each: 0.05,
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 90%',
                    end: 'top 50%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {
        // Background color change logic
        const bgOverlay = document.createElement('div');
        bgOverlay.style.position = 'fixed';
        bgOverlay.style.top = '0';
        bgOverlay.style.left = '0';
        bgOverlay.style.width = '100vw';
        bgOverlay.style.height = '100vh';
        bgOverlay.style.backgroundColor = '#111';
        bgOverlay.style.zIndex = '-1';
        bgOverlay.style.opacity = '0';
        bgOverlay.style.pointerEvents = 'none';
        document.body.appendChild(bgOverlay);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.bg-change-anim',
                start: 'top 60%',
                end: 'top+=30%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.to(bgOverlay, {
            opacity: 1,
            ease: 'none',
        }).to(
            '.bg-change-anim',
            {
                backgroundColor: '#111',
                ease: 'none',
            },
            0
        );

        ScrollTrigger.create({
            trigger: '.bg-change-anim',
            start: 'bottom bottom',
            end: 'bottom+=1 bottom',
            onEnterBack: () => {
                gsap.to(bgOverlay, { opacity: 1, backgroundColor: '#111' });
                gsap.to('.bg-change-anim', { backgroundColor: '#111' });
            },
            onLeave: () => {
                gsap.to(bgOverlay, { opacity: 0, backgroundColor: 'white' });
                gsap.to('.bg-change-anim', { backgroundColor: 'white' });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
            bgOverlay.remove();
        };
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

    // video animation
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const video3Ref = useRef(null);
    const video4Ref = useRef(null);
    const videoContainerRefs = useRef([]);
    const overlayTextRefs = useRef([]);
    const serviceListRefs = useRef([]);

    useEffect(() => {
        // Initialize animations for all devices
        const videos = [video1Ref.current, video2Ref.current, video3Ref.current, video4Ref.current];

        videos.forEach((video, index) => {
            // Skip if elements don't exist
            if (!videoContainerRefs.current[index] || !overlayTextRefs.current[index] || !serviceListRefs.current[index]) return;

            // Animate entire video container (video + overlay + service list)
            gsap.fromTo(videoContainerRefs.current[index],
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: videoContainerRefs.current[index],
                        start: "top 70%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate overlay text separately
            gsap.fromTo(overlayTextRefs.current[index],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: videoContainerRefs.current[index],
                        start: "top 50%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate service list items with stagger
            const items = serviceListRefs.current[index].querySelectorAll('li');
            gsap.from(items, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: videoContainerRefs.current[index],
                    start: "top 40%",
                    toggleActions: "play none none none"
                }
            });

            // Only apply scale animation on larger devices
            if (window.innerWidth > 1024) {
                gsap.fromTo(video,
                    { scale: 1 },
                    {
                        scale: 0.85,
                        scrollTrigger: {
                            trigger: video,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                        ease: 'power2.out',
                        duration: 1
                    }
                );
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    const titleText = 'Skills we bring to the table';

    return (
        <div className='bg-change-anim pt-[140px] md:pt-[150px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px]'>
            <div className='px-20 md:px-20 lg:px-30 xl:px-40 2xl:px-50 '>
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2  gap-80 md:gap-40 lg:gap-30 xl:gap-50  justify-center items-center w-full'>
                        {/* left title */}
                        <h2
                            ref={titleRef}
                            className="xl:max-w-2xl 2xl:max-w-md text-left text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl -ml-12  md:ml-0 font-extrabold mt-0 md:-mt-40 text-black font-helvetica leading-[1] w-full max-w-4xl"
                        >
                            {titleText.split(' ').map((word, wi) => (
                                <span key={wi} className="inline-block whitespace-nowrap mr-3 lg:mr-4 xl:mr-5">
                                    {word.split('').map((char, ci) => (
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

                        {/* 1st video */}
                        <div className="-mt-[300px] md:-mt-0" ref={el => videoContainerRefs.current[0] = el}>
                            <div className="relative md:h-[40vh] lg:h-[60vh] w-full" ref={video1Ref}>
                                <video
                                    src="/video/services/service1.mp4"
                                    muted
                                    autoPlay
                                    loop
                                    className="object-cover h-full w-full"
                                />

                                {/* Fixed overlay text on video */}
                                <div
                                    className="absolute inset-0 flex flex-col items-start bottom-8 -left-17 md:-left-20 justify-end text-white font-helvetica pointer-events-none"
                                    ref={el => overlayTextRefs.current[0] = el}
                                >
                                    <p className="text-xl font-bold font-ethosnova text-[#9EFCF1]">
                                        01 / <span className='text-gray-500'>04</span>
                                    </p>
                                    <p style={{ letterSpacing: "-0.05em" }} className="text-4xl md:text-6xl lg:text-6xl font-extrabold font-helvetica mt-4">
                                        Strategy
                                    </p>
                                </div>

                                {/* Fixed service list */}
                                <div
                                    className='absolute -bottom-36 md:-bottom-40 left-0 text-white pointer-events-none'
                                    ref={el => serviceListRefs.current[0] = el}
                                >
                                    <ul className='text-xl md:text-2xl leading-relaxed font-helvetica space-y-1 md:space-y-3'>
                                        <li>Digital strategy</li>
                                        <li>Growth strategy</li>
                                        <li>Brand strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd video */}
                        <div className="-mt-32 md:-mt-[700px]" ref={el => videoContainerRefs.current[1] = el}>
                            <div className="relative md:h-[40vh] lg:h-[60vh] w-full" ref={video2Ref}>
                                <video
                                    src="/video/services/service2.mp4"
                                    muted
                                    autoPlay
                                    loop
                                    className="object-cover h-full w-full"
                                />

                                {/* Fixed overlay text on video */}
                                <div
                                    className="absolute inset-0 flex flex-col items-start bottom-8 -left-17 md:-left-20 justify-end text-white font-rota pointer-events-none"
                                    ref={el => overlayTextRefs.current[1] = el}
                                >
                                    <p className="text-xl font-bold font-ethosnova text-[#9EFCF1]">
                                        02 / <span className='text-gray-500'>04</span>
                                    </p>
                                    <p style={{ letterSpacing: "-0.05em" }} className="text-4xl md:text-6xl lg:text-6xl font-helvetica font-extrabold mt-4">
                                        Digital <br />Marketing
                                    </p>
                                </div>

                                {/* Fixed service list */}
                                <div
                                    className='absolute -bottom-80 md:-bottom-105 lg:-bottom-94 left-0 text-white pointer-events-none'
                                    ref={el => serviceListRefs.current[1] = el}
                                >
                                    <ul className='text-xl md:text-2xl leading-relaxed font-helvetica space-y-1 md:space-y-3'>
                                        <li>User research</li>
                                        <li>User experience</li>
                                        <li>Web development</li>
                                        <li>Web applications</li>
                                        <li>E-commerce</li>
                                        <li>Mobile App development</li>
                                        <li>Product design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd video */}
                        <div className="mt-24 md:mt-[100px] lg:mt-[100px] xl:mt-[400px]" ref={el => videoContainerRefs.current[2] = el}>
                            <div className="relative md:h-[40vh] lg:h-[60vh] w-full" ref={video3Ref}>
                                <video
                                    src="/video/services/service3.mp4"
                                    muted
                                    autoPlay
                                    loop
                                    className="object-cover h-full w-full"
                                />

                                {/* Fixed overlay text on video */}
                                <div
                                    className="absolute inset-0 flex flex-col items-start bottom-8 -left-17 md:-left-20 justify-end text-white font-rota pointer-events-none"
                                    ref={el => overlayTextRefs.current[2] = el}
                                >
                                    <p className="text-xl font-bold font-ethosnova text-[#9EFCF1]">
                                        03 / <span className='text-gray-500'>04</span>
                                    </p>
                                    <p style={{ letterSpacing: "-0.05em" }} className="text-4xl md:text-6xl lg:text-6xl font-helvetica font-extrabold mt-4">
                                        Brand <br />& Identity
                                    </p>
                                </div>

                                {/* Fixed service list */}
                                <div
                                    className='absolute -bottom-73 md:-bottom-100 lg:-bottom-80 left-0 text-white pointer-events-none'
                                    ref={el => serviceListRefs.current[2] = el}
                                >
                                    <ul className='text-xl md:text-2xl leading-relaxed font-helvetica space-y-1 md:space-y-3'>
                                        <li>Visual identity</li>
                                        <li>Branding</li>
                                        <li>Art direction</li>
                                        <li>Campaign development</li>
                                        <li>Packaging</li>
                                        <li>Video & content production</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 4th video */}
                        <div className="mt-20 md:-mt-[110px] lg:-mt-[100px]" ref={el => videoContainerRefs.current[3] = el}>
                            <div className="relative md:h-[40vh] lg:h-[60vh] w-full" ref={video4Ref}>
                                <video
                                    src="/video/services/service4.mp4"
                                    muted
                                    autoPlay
                                    loop
                                    className="object-cover h-full w-full"
                                />

                                {/* Fixed overlay text on video */}
                                <div
                                    className="absolute inset-0 flex flex-col items-start bottom-8 -left-17 md:-left-20 justify-end text-white font-rota pointer-events-none"
                                    ref={el => overlayTextRefs.current[3] = el}
                                >
                                    <p className="text-xl font-bold font-ethosnova text-[#9EFCF1]">
                                        04 / <span className='text-gray-500'>04</span>
                                    </p>
                                    <p style={{ letterSpacing: "-0.05em" }} className="text-4xl md:text-6xl lg:text-6xl font-extrabold font-helvetica mt-4">
                                        UI/UX <br />Design
                                    </p>
                                </div>

                                {/* Fixed service list */}
                                <div
                                    className='absolute -bottom-64 md:-bottom-100 lg:-bottom-75 left-0 text-white pointer-events-none'
                                    ref={el => serviceListRefs.current[3] = el}
                                >
                                    <ul className='text-xl md:text-2xl leading-relaxed font-helvetica space-y-1 md:space-y-3'>
                                        <li>User research & anlysis</li>
                                        <li>Mobile UI/UX design</li>
                                        <li>Desktop UI/UX design</li>
                                        <li>Usability testing</li>
                                        <li>Wireframing & prototyping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>

                {/* button */}
                <div className='mt-75 md:mt-110 lg:mt-100 flex justify-center'>
                    <div className="relative mt-8 md:mt-3 inline-block">
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
                                    View Our Work
                                </span>
                                <span
                                    ref={buttonScrollingTextRef}
                                    className="scrolling-text absolute left-0"
                                >
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className="inline-block mr-8 font-helvetica">
                                            View Our Work
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* our process */}
            <OurProcess />
        </div>
    );
};

export default ServicesArea;