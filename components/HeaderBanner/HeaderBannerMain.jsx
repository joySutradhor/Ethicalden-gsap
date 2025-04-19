'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeaderBannerMain = () => {
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    // Mousemove parallax banner effect
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

    // Scroll-triggered title animation
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

    return (
        <div className="relative h-screen overflow-hidden bg-white pb-20" style={{ zIndex: 30 }}>
            {/* Navbar */}
            <nav className="top-0 left-0 w-full z-40 flex items-center justify-between px-10 py-6 bg-white">
                <div className="text-3xl font-black tracking-wide">MATER</div>
                <div className="flex items-center gap-8 font-medium text-gray-800">
                    <a href="#work">Work</a>
                    <a href="#agency">The Agency</a>
                    <a href="#services">Services</a>
                    <a href="#stories">Stories</a>
                    <button className="bg-[#003B49] text-white px-5 py-2 rounded-full">Let's Talk</button>
                </div>
            </nav>

            {/* Banner Content */}
            <div ref={bannerRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 30 }}>
                <div className="text-center max-w-3xl px-4">
                    <h1
                        ref={titleRef}
                        className="text-6xl md:text-7xl font-extrabold leading-tight"
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
                        We are mater, magicians of the digital age, dancing on the edge of creativity for more than two decades.
                    </p>
                </div>

                {/* Videos and Image - with explicit z-indexes */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-xl overflow-hidden shadow-lg z-20">
                    <video src="/images/banner/banner-v-left.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[340px] rounded-xl overflow-hidden shadow-lg z-30">
                    <video src="/images/banner/banner-v-top.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-xl overflow-hidden shadow-lg z-40">
                    <img src="/images/banner/banner-v-right.jpg" alt="Right Visual" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[300px] rounded-xl overflow-hidden shadow-lg z-50">
                    <img src="/images/banner/banner-img-b.jpg" alt="Bottom Visual" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBannerMain;