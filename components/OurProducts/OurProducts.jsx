'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1020);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isLargeScreen) return;
    
        const section = sectionRef.current;
        const scrollContainer = scrollContainerRef.current;
        const scrollWidth = scrollContainer.scrollWidth;
        const viewportWidth = section.offsetWidth;
        const totalScroll = scrollWidth - viewportWidth;
    
        const ctx = gsap.context(() => {
            gsap.to(scrollContainer, {
                x: () => `-${totalScroll}`,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    markers: false,
                },
            });
        }, sectionRef);
    
        return () => ctx.revert();
    }, [isLargeScreen]); 
    

    const projects = [
        {
            id: 1,
            title: "865 CyberSec",
            tags: ["UI/UX Design", "Baranding"],
            image: "/images/our-products/products1.jpg",
            isNew: true
        },
        {
            id: 2,
            title: "Hurom",
            tags: ["UI/UX Design", "E-Commerce"],
            image: "/images/our-products/products2.jpg",
            isNew: true
        },
        {
            id: 3,
            title: "Romans & Partners",
            tags: ["UI/UX Design", "Property Portal"],
            image: "/images/our-products/products3.jpg",
            isNew: true
        },
        {
            id: 4,
            title: "Re-Core Pilates",
            tags: ["UI/UX Design", "Development"],
            image: "/images/our-products/products5.jpg",
            isNew: true
        },
        {
            id: 3,
            title: "Alveena Casa",
            tags: ["UI/UX Design", "E-commerce"],
            image: "/images/our-products/products6.jpg",
            isNew: true
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-screen overflow-hidden bg-white py-40"
        >
            <div
                ref={scrollContainerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:flex items-start gap-10 px-6 md:px-16 py-12 w-max"
            >
                {/* Left Text Section */}
                <div className="shrink-0 w-[400px] flex flex-col justify-between h-[450px] sticky left-0 top-0">
                    <div>
                        <h1 className="text-[60px] font-black mb-4">Work</h1>
                        <p className="text-gray-600 mb-6">
                            A selection of our crafted work, built from scratch by our talented in-house team.
                        </p>
                    </div>
                    <button className="border border-indigo-500 text-black hover:bg-indigo-500 hover:text-white transition-all px-6 py-3 rounded-full w-full">
                        Case Studies
                    </button>
                </div>

                {/* Right Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2  lg:flex gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="relative bg-black rounded-3xl overflow-hidden w-[700px] h-[450px] flex items-end justify-start p-6">
                            {project.isNew && (
                                <span className="absolute top-4 right-4 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    New
                                </span>
                            )}
                            <img
                                src={project.image}
                                alt={`${project.title} Preview`}
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* View More */}
                    <div className="flex flex-col items-center justify-center p-6 min-w-[300px]">
                        <h2 className="text-5xl mb-6">View More</h2>
                        <button className="border border-indigo-500 text-black hover:bg-indigo-500 hover:text-white transition-all px-6 py-3 rounded-full w-full">
                            Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
