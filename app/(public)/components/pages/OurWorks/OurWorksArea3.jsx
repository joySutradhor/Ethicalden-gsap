'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurWorksArea3 = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Mr Cafe",
            category: "Restaurant",
            description: "A modern cafe experience with digital ordering",
            media: {
                type: "image",
                src: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/our-works/mrCafe-w.jpg?updatedAt=1750611893584",
                alt: "Mr Cafe"
            },
            link: "/project-mrCafe",
            color: "#FF9F1C"
        },
        {
            id: 2,
            title: "Marzii",
            category: "E-commerce / Branding",
            description: "Smart Fashion Interface",
            media: {
                type: "image",
                src: "/images/marzi-c-w.jpg",
                alt: "Marzii"
            },
            link: "/project-marzii",
            color: "#2EC4B6"
        },
        {
            id: 3,
            title: "E-laj",
            category: "Medical Healthcare",
            description: "Digital healthcare appointment and consultation platform",
            media: {
                type: "image",
                src: "/images/e-laj-c-w.jpg",
                alt: "E-laj"
            },
            link: "/project-e-laj",
            color: "#E71D36"
        },
        {
            id: 4,
            title: "Mak Community",
            category: "Site / Branding",
            description: "A vibrant community platform for creators and innovators",
            media: {
                type: "image",
                src: "/images/mak-c-w.jpg",
                alt: "Mak Community"
            },
            link: "/project-mak-community",
            color: "#F6AE2D"
        },
        {
            id: 5,
            title: "Agarwal Tibrewal Co",
            category: "Site / Branding",
            description: "Professional corporate website for a consultancy firm",
            media: {
                type: "image",
                src: "/images/agarwal-w-c.jpg",
                alt: "Agarwal Tibrewal Co"
            },
            link: "/project-agarwal-tibrewal",
            color: "#3D348B"
        },
        {
            id: 6,
            title: "Emopract",
            category: "UI/UX / Site",
            description: "A mental wellness support platform with modern UI/UX",
            media: {
                type: "image",
                src: "/images/emopract-mockup.jpg",
                alt: "Emopract"
            },
            link: "/project-emopract",
            color: "#FF6B6B"
        },
        {
            id: 7,
            title: "Sandeep Autolines",
            category: "Marketing / Branding",
            description: "Automotive service platform with strong branding presence",
            media: {
                type: "image",
                src: "/images/sandeep-c-w.jpg",
                alt: "Sandeep Autolines"
            },
            link: "/project-sandeep-autolines",
            color: "#4ECDC4"
        },
        {
            id: 8,
            title: "Laljhal",
            category: "UI/UX / Site",
            description: "Creative portfolio site for visual design and experiences",
            media: {
                type: "image",
                src: "/images/lal-jhal-c-w.jpg",
                alt: "Laljhal"
            },
            link: "/project-laljhal",
            color: "#1A535C"
        },
        {
            id: 9,
            title: "massArt",
            category: "UI/UX / Site",
            description: "Art showcase platform with sleek and minimal design",
            media: {
                type: "image",
                src: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/massart.png?updatedAt=1749702878941",
                alt: "massArt"
            },
            link: "/project-massArt",
            color: "#FF4D6D"
        }
    ]

    useEffect(() => {
        const items = gsap.utils.toArray(".work-card");

        gsap.set(items, { opacity: 0, y: 100, scale: 1.05 }); // initial state

        items.forEach((card, i) => {
            const img = card.querySelector("img");

            gsap.fromTo(
                img,
                {
                    clipPath: "inset(50% 50% 50% 50%)",
                    scale: 1.05,
                    opacity: 0.5,
                    y: 50,
                    willChange: "transform, opacity, clip-path"
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1.8,
                    ease: "power4.out",
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                        scrub: false
                    }
                }
            );

            // Smooth container fade + move
            gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.6,
                ease: "power4.out",
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Line animation (expand from middle)
        if (lineRef.current) {
            gsap.fromTo(lineRef.current,
                { scaleX: 0, transformOrigin: "center center" },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }
    }, []);

    // title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    // Title animation
    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(charRefs.current,
            { color: 'gray' },
            {
                color: '#09e5e5',
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
        <section className="py-24 px-6 md:px-10 lg:px-12 bg-[#111]" ref={containerRef}>
            <div className="xl:max-w-7xl xl:mx-auto">
                <div className="text-center mb-20">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-urbanist font-extrabold pb-5 leading-[1.06]"
                    >
                        {"Our Works".split(" ").map((word, wi) => (
                            <span
                                key={wi}
                                className="inline-block whitespace-nowrap mr-2 md:mr-3 lg:mr-4 xl:mr-5"
                            >
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                        style={{ letterSpacing: "-0.05em" }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>
                    {/* Animated line */}
                    <div 
                        ref={lineRef}
                        className="mt-1 h-[2px] w-24 sm:w-40 md:w-40 lg:w-52 xl:w-80 bg-[#09e5e5] mx-auto"
                        style={{ transform: 'scaleX(0)' }}
                    ></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mt-40">
                    {/* Left */}
                    <div className="space-y-16 md:-mt-16">
                        {projects.filter((_, i) => i % 2 === 0).map((project) => (
                            <div key={project.id} className="group work-card relative">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={project.media.src}
                                        alt={project.media.alt}
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                        style={{ willChange: "transform, opacity" }}
                                    />
                                </div>
                                <div className="mt-8 px-2">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white transition-colors duration-300">
                                        <a
                                            href={project.link}
                                            className="hover:text-[#09e5e5] transition-colors duration-300"
                                        >
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="relative inline-block text-gray-400 font-light mt-2 tracking-wide group-hover:text-white transition-all duration-300">
                                        {project.category}
                                        <span 
                                            className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                            style={{ willChange: "width" }}
                                        ></span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="space-y-16 md:mt-16">
                        {projects.filter((_, i) => i % 2 !== 0).map((project) => (
                            <div key={project.id} className="group work-card relative">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={project.media.src}
                                        alt={project.media.alt}
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                                        style={{ willChange: "transform, opacity" }}
                                    />
                                </div>
                                <div className="mt-8 px-2">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white transition-colors duration-300">
                                        <a
                                            href={project.link}
                                            className="hover:text-[#09e5e5] transition-colors duration-300"
                                        >
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="relative inline-block text-gray-400 font-light mt-2 tracking-wide group-hover:text-white transition-all duration-300">
                                        {project.category}
                                        <span 
                                            className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                            style={{ willChange: "width" }}
                                        ></span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorksArea3;