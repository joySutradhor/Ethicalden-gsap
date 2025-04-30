'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ backgroundColor = "white", textColor = "black" }) => {
    const pathname = usePathname();
    const titleRef = useRef(null);
    const charRefs = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // function to check if a link is active
    const isActive = (href) => {
        // Handle root path
        if (href === '/') return pathname === href;
        
        // Handle other paths
        return pathname?.startsWith(href);
    };

   

    useEffect(() => {
        if (!charRefs.current.length) return;
        gsap.fromTo(
            charRefs.current,
            { color: 'gray' },
            {
                color: textColor,
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
    }, [textColor]);

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

        gsap.set(button, { opacity: 1, y: 0 });
        gsap.set(bg, { scaleX: 0, transformOrigin: "center center", backgroundColor: "#4DEFA7" });
        gsap.set(scrollingText, { opacity: 0, x: 0 });
        gsap.set(staticText, { opacity: 1 });

        const hoverTL = gsap.timeline({ paused: true });

        hoverTL
            .to(bg, { scaleX: 1, duration: 0.5, ease: "power2.out" })
            .to(staticText, { opacity: 0, duration: 0.2 }, "-=0.2")
            .to(scrollingText, { opacity: 1, duration: 0.2 })
            .to(textWrapper, { color: "black", duration: 0.3 }, "-=0.3");

        let scrollTween;

        const handleMouseEnter = () => {
            hoverTL.play().then(() => {
                if (!scrollTween) {
                    const contentWidth = scrollingText.scrollWidth;
                    const buttonWidth = button.offsetWidth;
                    const duration = contentWidth / 50;
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

    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(mobileMenuRef.current,
                { x: '100%', opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
        } else if (mobileMenuRef.current) {
            gsap.to(mobileMenuRef.current, { x: '100%', opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [isMenuOpen]);

    return (
        <div className="lg:pb-20 overflow-hidden px-[20px] md:px-[40px] lg:px-[50px] xl:px-[80px] 2xl:px-[95px]" style={{ backgroundColor, zIndex: 30 }}>
            <nav className="top-0 left-0 w-full z-40 flex items-center justify-between  py-6">
                <div className="font-rota gradient tracking-wide font-helvetica font-extrabold text-4xl">
                    <a href="/">
                    <img className="w-9 md:w-12 lg:w-14 xl:w-16 h-auto" src="/images/logo/ethicalden.png" alt="Mater Logo" />
                    </a>
                </div>

                <div className="hidden xl:flex items-center gap-10 font-helvetica text-2xl font-bold relative" style={{ color: textColor }}>
                    <a href="/about-den" className="relative group">
                        <span className="relative inline-block">
                            About Den
                            {isActive('/about-den') && (
                                <span className="absolute left-0 top-1/2 w-full h-0.5 transform -translate-y-1/2 bg-current origin-left animate-strikethrough"></span>
                            )}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: textColor }}></span>
                        </span>
                    </a>
                    <a href="/services" className="relative group">
                        <span className="relative inline-block">
                            Services
                            {isActive('/services') && (
                                <span className="absolute left-0 top-1/2 w-full h-0.5 transform -translate-y-1/2 bg-current origin-left animate-strikethrough"></span>
                            )}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: textColor }}></span>
                        </span>
                    </a>
                    <a href="/products" className="relative group">
                        <span className="relative inline-block">
                            Products
                            {isActive('/products') && (
                                <span className="absolute left-0 top-1/2 w-full h-0.5 transform -translate-y-1/2 bg-current origin-left animate-strikethrough"></span>
                            )}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: textColor }}></span>
                        </span>
                    </a>

                    <div className="relative inline-block">
                        <button onClick={() => setSubMenuOpen(!subMenuOpen)} className="group flex items-center">
                            <span className="relative inline-block mr-1">
                                Sub brands
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: textColor }}></span>
                            </span>
                            <HiChevronDown className={`inline-block transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`} style={{ color: textColor }} />
                        </button>

                        {subMenuOpen && (
                            <div className="absolute left-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg z-50">
                                <a href="https://eduden.example.com" className="block px-4 py-2 relative group" target="_blank" rel="noopener noreferrer">
                                    <span className="relative inline-block">
                                        Eduden
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://hivyr.example.com" className="block px-4 py-2 relative group" target="_blank" rel="noopener noreferrer">
                                    <span className="relative inline-block">
                                        Hivyr
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="">
                        <Link
                            ref={buttonRef}
                            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-2xl font-bold sm:text-lg bg-[#09E5E5] overflow-hidden inline-flex items-center justify-center group"
                            href={"/contact"}
                            style={{ opacity: 1 }}
                        >
                            <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                            <span ref={buttonTextRef} className="relative z-10 font-medium text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center">
                                <span ref={buttonStaticTextRef} className="static-text font-helvetica text-2xl font-bold">Let's Talk</span>
                                <span ref={buttonScrollingTextRef} className="scrolling-text absolute left-0">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className="inline-block mr-8 font-helvetica text-2xl font-bold">Let's Talk</span>
                                    ))}
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="xl:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="menu-toggle flex items-center gap-2"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {!isMenuOpen && <HiMenu className="text-2xl" style={{ color: textColor }} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="xl:hidden fixed inset-0 w-full bg-gray-200 z-50 overflow-y-auto shadow-xl"
                    style={{ marginTop: '0' }}
                >
                    {/* Close Button inside Mobile Menu */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                            className="text-3xl text-gray-800 hover:text-black transition-colors"
                        >
                            <HiX />
                        </button>
                    </div>

                    {/* Logo */}
                    <a href="/">
                        <img className="w-20 md:w-24 h-auto -mt-10 md:-mt-10 pl-8 " src="/images/logo/ethicalden.png" alt="Logo" />
                    </a>

                    {/* Menu Items */}
                    <div className="flex flex-col h-full pl-16 -mt-28 px-6">
                        <div className="flex-1 flex flex-col justify-center items-start gap-8 font-helvetica font-extrabold text-4xl md:text-5xl text-black">
                            <a href="/about-den" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-black transition-colors">About Den</a>
                            <a href="/services" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-black transition-colors">Services</a>
                            <a href="/products" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-black transition-colors">Products</a>
                            {/* Sub brands Dropdown Button */}
                            <div className="relative inline-block">
                                <button
                                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                                    className="group flex items-center"
                                >
                                    <span className="relative inline-block mr-1">
                                        Sub brands
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                    <HiChevronDown
                                        className={`inline-block transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Dropdown Items */}
                                {subMenuOpen && (
                                    <div className="block left-0 mt-2 py-2 w-auto  p-5 z-50">
                                        <a
                                            href="https://eduden.example.com"
                                            className="block px-4 py-2 relative group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="relative inline-block">
                                                Eduden
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                        </a>
                                        <a
                                            href="https://hivyr.example.com"
                                            className="block px-4 py-2 relative group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="relative inline-block">
                                                Hivyr
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a href="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-black transition-colors">Let's Talk</a>


                        </div>


                    </div>
                </div>
            )}


            {/* Add the CSS for the mobile menu */}
            <style jsx>{`
                /* Mobile menu overlay */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 40;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }
                
                .mobile-menu-overlay.active {
                    opacity: 1;
                    pointer-events: auto;
                }
            `}</style>

            <style jsx global>{`
                @keyframes strikethrough {
                    0% {
                        transform: scaleX(0) translateY(-50%);
                    }
                    100% {
                        transform: scaleX(1) translateY(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbar;