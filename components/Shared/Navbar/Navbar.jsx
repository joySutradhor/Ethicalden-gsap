'use client';

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

    const isActive = (href) => {
        if (href === '/') return pathname === href;
        return pathname?.startsWith(href);
    };

    // Animate text on scroll
    useEffect(() => {
        if (!charRefs.current.length) return;
        gsap.fromTo(
            charRefs.current,
            { color: 'gray' },
            {
                color: textColor,
                stagger: { from: 'random', each: 0.05 },
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

    // Button hover animation
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
        gsap.set(bg, { scaleX: 0, transformOrigin: "center", backgroundColor: "#09e5e5" });
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

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative z-30 px-6 md:px-10 lg:px-12 xl:px-20" style={{ backgroundColor }}>
            <nav className="flex items-center justify-between py-6">
                <div className="font-bold text-4xl">
                    <a href="/">
                        <img src="/images/logo/ethicalden.png" className="w-12 h-auto" alt="Logo" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-10 text-2xl" style={{ color: textColor }}>
                    <a
                        href="/about-den"
                        className={`relative font-medium 
                                ${isActive('/about-den')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        About Den
                    </a>

                    <a
                        href="/services"
                        className={`relative font-medium 
                                ${isActive('/services')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        Services
                    </a>

                    <a
                        href="/products"
                        className={`relative font-medium 
                                ${isActive('/products')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        Products
                    </a>


                    <div className="relative">
                        <button onClick={() => setSubMenuOpen(!subMenuOpen)} className="flex items-center group font-medium relative">
                            <span className="mr-1 relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                Sub brands
                            </span>
                            <HiChevronDown
                                className={`transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {subMenuOpen && (
                            <div className="absolute left-0 mt-2 rounded-md z-50 w-40  text-black">
                                <a
                                    href="https://eduden.example.com"
                                    target="_blank"
                                    className="block px-4 py-2 relative font-medium 
                                            after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    Eduden
                                </a>
                                <a
                                    href="https://hivyr.example.com"
                                    target="_blank"
                                    className="block px-4 py-2 relative font-medium 
                                            after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >
                                    Hivyr
                                </a>
                            </div>
                        )}
                    </div>


                    <Link
                        ref={buttonRef}
                        href="/contact"
                        className="relative px-6 py-2 bg-[#a8ff57] rounded-full overflow-hidden group"
                    >
                        <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                        <span ref={buttonTextRef} className="relative z-10 flex items-center text-black">
                            <span ref={buttonStaticTextRef}>Let's Talk</span>
                            <span ref={buttonScrollingTextRef} className="absolute left-0 flex whitespace-nowrap">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <span key={i} className="mr-8">Let's Talk</span>
                                ))}
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="xl:hidden z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-4xl p-2 rounded-md focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-center p-6 space-y-6 xl:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {/* Logo - Positioned a little bit down and bigger */}
                <div className="absolute top-8 left-8 transform ">
                    <a href="/" className="text-xl font-bold text-black">
                        <img src="/images/logo/ethicalden.png" alt="Logo" className="h-12 w-auto" />
                    </a>
                </div>

                {/* Close Button - Positioned a little bit down and bigger */}
                <button
                    onClick={handleCloseMenu}
                    className="absolute top-8 right-8 text-black text-4xl font-bold focus:outline-none"
                    aria-label="Close Menu"
                >
                    <HiX />
                </button>

                {/* Centered Menu Links with left alignment */}
                <div className="flex flex-col items-start space-y-4">
                    <a href="/about-den" className="text-4xl font-semibold hover:underline">About Den</a>
                    <a href="/services" className="text-4xl font-semibold hover:underline">Services</a>
                    <a href="/products" className="text-4xl font-semibold hover:underline">Products</a>
                    {/* Sub Brands Title */}
                    <div className="text-4xl font-semibold hover:underline">
                        Sub Brands
                    </div>

                    {/* Sub-brands (Eduden and Hivyr) with special styling */}
                    <div className="flex flex-col items-start space-y-4 mt-2">
                        <a href="https://eduden.example.com" target="_blank" className="text-2xl font-medium text-[#333]  hover:underline">
                            Eduden
                        </a>
                        <a href="https://hivyr.example.com" target="_blank" className="text-2xl font-medium text-[#333]  hover:underline">
                            Hivyr
                        </a>
                    </div>
                    <Link
                        href="/contact"
                        className=" rounded-full text-[#09e5e5] text-4xl font-semibold "
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;