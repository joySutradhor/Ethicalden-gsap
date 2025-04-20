'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HiMenu, HiX } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const HeaderBannerMain = () => {
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const charRefs = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const leftVideoRef = useRef(null);
    const topVideoRef = useRef(null);
    const rightImageRef = useRef(null);
    const bottomVideoRef = useRef(null);

    useEffect(() => {
        const banner = bannerRef.current;
        const moveBanner = (e) => {
            const { innerWidth, innerHeight } = window;
            const moveX = (e.clientX - innerWidth / 2) * -0.10;
            const moveY = (e.clientY - innerHeight / 2) * -0.10;

            gsap.to(banner, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveBanner);
        return () => window.removeEventListener("mousemove", moveBanner);
    }, []);

    useEffect(() => {
        if (!charRefs.current.length) return;
        gsap.fromTo(
            charRefs.current,
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

    const titleText = "You say jump,\nwe dance.";


    // smooth image and video appearing animation
    useEffect(() => {
        const visuals = [leftVideoRef.current, topVideoRef.current, rightImageRef.current, bottomVideoRef.current];
    
        visuals.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        });
    }, []);

    // mouse parrellax on each
    useEffect(() => {
        const moveParallax = (e) => {
            const { innerWidth, innerHeight } = window;
            const moveX = (e.clientX - innerWidth / 2) * 0.01;
            const moveY = (e.clientY - innerHeight / 2) * 0.01;
    
            [leftVideoRef, topVideoRef, rightImageRef, bottomVideoRef].forEach((ref, idx) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        x: moveX * (idx + 1),
                        y: moveY * (idx + 1),
                        duration: 0.4,
                        ease: "power1.out",
                    });
                }
            });
        };
    
        window.addEventListener("mousemove", moveParallax);
        return () => window.removeEventListener("mousemove", moveParallax);
    }, []);

    // button animation
    const buttonRef = useRef(null);
    const hoverRef = useRef(null);


    useEffect(() => {
        const button = buttonRef.current;
        const hoverElement = hoverRef.current;

        if (!button || !hoverElement) return;

        // Initial styles
        gsap.set(hoverElement, {
            scaleX: 0,
            transformOrigin: 'left center',
        });

        const onMouseEnter = () => {
            gsap.to(hoverElement, {
                scaleX: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const onMouseLeave = () => {
            gsap.to(hoverElement, {
                scaleX: 0,
                duration: 0.4,
                ease: 'power2.out',
                transformOrigin: 'right center',
            });
        };

        button.addEventListener('mouseenter', onMouseEnter);
        button.addEventListener('mouseleave', onMouseLeave);

        return () => {
            button.removeEventListener('mouseenter', onMouseEnter);
            button.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden bg-white pb-20" style={{ zIndex: 30 }}>
            {/* Navbar */}
            <nav className="top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-6 bg-white">
                <div className="text-3xl font-black tracking-wide">Ethicalden</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
                    <a href="#work">Work</a>
                    <a href="#agency">The Agency</a>
                    <a href="#services">Services</a>
                    <a href="#stories">Stories</a>
                    <button
                        ref={buttonRef}
                        className="relative px-8 py-3 overflow-hidden font-medium text-white bg-[#003b49] rounded-lg group"
                    >
                        <span className="relative z-10">Let's Talk</span>
                        <span
                            ref={hoverRef}
                            className="absolute inset-0 z-0 w-full h-full bg-[#8EFA6D]"
                        />
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-6 bg-white z-30">
                    <div className="flex flex-col gap-4 font-medium text-gray-800">
                        <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
                        <a href="#agency" onClick={() => setIsMenuOpen(false)}>The Agency</a>
                        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#stories" onClick={() => setIsMenuOpen(false)}>Stories</a>
                        <button
                            ref={buttonRef}
                            className="relative px-8 py-3 overflow-hidden font-medium text-white bg-[#003b49] rounded-lg group"
                        >
                            <span className="relative z-10">Let's Talk</span>
                            <span
                                ref={hoverRef}
                                className="absolute inset-0 z-0 w-full h-full bg-blue-700"
                            />
                        </button>
                    </div>
                </div>
            )}

            {/* Banner Content */}
            <div ref={bannerRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-80 md:-mt-48 lg:mt-0 px-4 text-center" style={{ zIndex: 30 }}>
                <div className="max-w-3xl">
                    <h1
                        ref={titleRef}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                    >
                        {
                            titleText.split("").map((char, index) =>
                                char === "\n" ? (
                                    <br key={index} />
                                ) : (
                                    <span
                                        key={index}
                                        ref={el => charRefs.current[index] = el}
                                        className={`inline-block text-gray-400 ${char === " " ? "w-5" : ""}`}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                )
                            )
                        }
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-700">
                        We are mater, magicians of the digital age, <br /> dancing on the edge of creativity for more than two decades.
                    </p>
                </div>

                {/* Visuals for screen width > 1200px */}
                <div className="hidden lg:block">
                    {/* Left */}
                    <div ref={leftVideoRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[320px] lg:h-[200px] xl:h-[380px] 2xl:h-[500px] rounded-xl overflow-hidden shadow-lg z-20">
                        <video src="/images/banner/banner-v-left.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                    </div>

                    {/* Top Center */}
                    <div ref={topVideoRef} className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[300px] lg:h-[200px] xl:h-[250px] 2xl:h-[320px] rounded-xl overflow-hidden shadow-lg z-30">
                        <video src="/images/banner/banner-v-top.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                    </div>

                    {/* Right */}
                    <div ref={rightImageRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[320px] lg:h-[200px] xl:h-[380px] 2xl:h-[500px] rounded-xl overflow-hidden shadow-lg z-40">
                        <img src="/images/banner/banner-v-right.jpg" alt="Right Visual" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Bottom Video for all screen sizes */}
                <div ref={bottomVideoRef} className="absolute bottom-0 left-0 w-full h-[500px] pt-24 md:pt-44 md:h-[500px]  overflow-hidden z-50 
                lg:left-1/2 lg:-translate-x-1/2 lg:w-[200px] lg:h-[200px] lg:pt-0 
                xl:w-[380px] xl:h-[250px] xl:pt-10 
                2xl:w-[500px] 2xl:h-[320px] lg:rounded-xl">
                    <video
                        src="/images/banner/banner-v-left.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeaderBannerMain;
