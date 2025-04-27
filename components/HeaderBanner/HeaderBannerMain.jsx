'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

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
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                if (event.target.closest('button')?.classList.contains('menu-toggle')) return;
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    // mouse parallax on each
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

        button?.addEventListener("mouseenter", handleMouseEnter);
        button?.addEventListener("mouseleave", handleMouseLeave);

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
            button?.removeEventListener("mouseenter", handleMouseEnter);
            button?.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
        };
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isMenuOpen) {
            gsap.from(mobileMenuRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }, [isMenuOpen]);

    return (
<div className="relative h-screen overflow-hidden bg-white pb-20" style={{ zIndex: 30 }}>
    {/* Navbar */}
    <nav className="top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-6 bg-white">
        <div className="font-rota gradient tracking-wide font-helvetica font-extrabold text-4xl"><a href="/">Ethicalden</a></div>

        {/* Desktop Menu - hidden on medium and below */}
        <div className="hidden lg:flex items-center gap-10 font-helvetica text-xl text-black relative">
            <a href="about-den" className="underline-animation">About Den</a>
            <a href="services" className="underline-animation">Services</a>
            <a href="products" className="underline-animation">Products</a>

            {/* Sub brands Dropdown Button */}
            <div className="relative inline-block">
                <button
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className="group flex items-center underline-animation"
                >
                    <span className="mr-1">Sub brands</span>
                    <HiChevronDown
                        className={`inline-block transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`}
                    />
                </button>

                {/* Dropdown Items */}
                {subMenuOpen && (
                    <div className="absolute left-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg z-50">
                        <a
                            href="https://eduden.example.com"
                            className="block px-4 py-2 underline-animation hover:bg-gray-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Eduden
                        </a>
                        <a
                            href="https://hivyr.example.com"
                            className="block px-4 py-2 underline-animation hover:bg-gray-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hivyr
                        </a>
                    </div>
                )}
            </div>

            <div className="">
                <Link
                    ref={buttonRef}
                    className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#09E5E5] overflow-hidden inline-flex items-center justify-center group"
                    href={"#"}
                    style={{ opacity: 1 }}
                >
                    <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                    <span
                        ref={buttonTextRef}
                        className="relative z-10 font-medium text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                    >
                        <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                            Let's Talk
                        </span>
                        <span
                            ref={buttonScrollingTextRef}
                            className="scrolling-text absolute left-0"
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <span key={i} className="inline-block mr-8 font-helvetica">
                                    Let's Talk
                                </span>
                            ))}
                        </span>
                    </span>
                </Link>
            </div>
        </div>

        {/* Mobile Menu Icon - shown on medium and small devices */}
        <div className="lg:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? (
                    <HiX className="text-3xl text-black transition-colors duration-300" />
                ) : (
                    <HiMenu className="text-3xl text-black transition-colors duration-300" />
                )}
            </button>
        </div>
    </nav>

    {/* Mobile Dropdown Menu - shown on medium and small devices */}
    {isMenuOpen && (
        <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 bg-white z-50 pt-20 px-6 overflow-y-auto"
            style={{ marginTop: '0' }}
        >
            {/* Close Button at the top */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                >
                    <HiX className="text-2xl text-gray-700" />
                </button>
            </div>

            <div className="flex flex-col gap-6 font-helvetica text-xl text-gray-800">
                <a
                    href="about-den"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 border-b border-gray-200 underline-animation"
                >
                    About Den
                </a>
                <a
                    href="services"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 border-b border-gray-200 underline-animation"
                >
                    Services
                </a>
                <a
                    href="products"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 border-b border-gray-200 underline-animation"
                >
                    Products
                </a>

                {/* Sub brands Mobile Dropdown */}
                <div className="flex flex-col border-b border-gray-200">
                    <button
                        onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                        className="py-3 flex items-center justify-between underline-animation"
                    >
                        <span>Sub brands</span>
                        <HiChevronDown
                            className={`transition-transform duration-300 ${mobileSubMenuOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {mobileSubMenuOpen && (
                        <div className="flex flex-col gap-3 pb-3 pl-4">
                            <a
                                href="https://eduden.example.com"
                                className="text-lg text-gray-700 underline-animation hover:text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Eduden
                            </a>
                            <a
                                href="https://hivyr.example.com"
                                className="text-lg text-gray-700 underline-animation hover:text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hivyr
                            </a>
                        </div>
                    )}
                </div>

                <div className="pt-4">
                    <Link
                        ref={buttonRef}
                        className="relative px-6 py-3 rounded-full text-lg bg-[#003b49] overflow-hidden inline-flex items-center justify-center group w-full"
                        href={"#"}
                        style={{ opacity: 1 }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                        <span
                            ref={buttonTextRef}
                            className="relative z-10 font-medium text-white overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                        >
                            <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                                Let's Talk
                            </span>
                            <span
                                ref={buttonScrollingTextRef}
                                className="scrolling-text absolute left-0"
                            >
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <span key={i} className="inline-block mr-8 font-helvetica">
                                        Let's Talk
                                    </span>
                                ))}
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )}

            {/* Banner Content */}
            <div ref={bannerRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-80 md:-mt-48 lg:mt-0 px-4 lg:text-center" style={{ zIndex: 30 }}>
                <div className="max-w-3xl">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-6xl xl:text-8xl font-helvetica font-extrabold leading-[1]"
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
                    <p className="mt-6 font-helvetica text-xl md:text-2xl text-black">
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
                <div
                    ref={bottomVideoRef}
                    className={`absolute bottom-0 left-0 w-full h-[500px] pt-24 md:pt-44 md:h-[500px] lg:[550px] overflow-hidden z-50 
    lg:left-1/2 lg:-translate-x-1/2 lg:w-[200px] lg:h-[200px] lg:pt-0 
    xl:w-[380px] xl:h-[250px] xl:pt-10 
    2xl:w-[500px] 2xl:h-[320px] lg:rounded-xl`}
                >
                    <video
                        src="/images/banner/banner-v-left.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Add the CSS for the underline animation */}
            <style jsx>{`
                .underline-animation {
                    position: relative;
                    display: inline-block;
                }
                
                .underline-animation::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: black;
                    transition: width 0.3s ease;
                }
                
                .underline-animation:hover::after {
                    width: 100%;
                }

                /* Mobile menu animations */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .mobile-menu-item {
                    animation: fadeIn 0.3s ease forwards;
                }
            `}</style>
        </div>
    );
};

export default HeaderBannerMain;