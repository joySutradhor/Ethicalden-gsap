"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllStoriesMain = () => {
    const sliderRef = useRef(null);
    const currentX = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);

    const titleRef = useRef(null);
    const charRefs = useRef([]);

    const Stories = [
        { name: "Why Mater?", title: "Blog / Education / Idea's", img: "/images/stories/story-1.jpg" },
        { name: "Steal like a designer", title: "Blog / Education", img: "/images/stories/story-2.jpg" },
        { name: "Mistake and Questions", title: "Blog / Education", img: "/images/stories/story-3.jpg" },
        { name: "Why adding more developers", title: "Blog / Education", img: "/images/stories/story-4.jpg" },
        { name: "Fake sense of urgency", title: "Blog / Education", img: "/images/stories/story-5.jpg" },
        { name: "The hidden power of colors", title: "Blog", img: "/images/stories/story-6.jpg" },
    ];

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

    // Scroll horizontal card movement
    useEffect(() => {
        const slider = sliderRef.current;
        const totalWidth = slider.scrollWidth - window.innerWidth;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / maxScroll;

            const moveX = -scrollPercent * totalWidth;

            gsap.to(slider, {
                x: moveX,
                duration: 0.5,
                ease: "power2.out"
            });

            currentX.current = moveX;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Drag to scroll
    useEffect(() => {
        const slider = sliderRef.current;

        const onMouseDown = (e) => {
            isDragging.current = true;
            slider.classList.add("cursor-grabbing");
            startX.current = e.pageX;
        };

        const onMouseMove = (e) => {
            if (!isDragging.current) return;
            const x = e.pageX;
            const walk = (x - startX.current);
            gsap.to(slider, {
                x: currentX.current + walk,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const onMouseUpOrLeave = (e) => {
            if (!isDragging.current) return;
            const x = e.pageX || startX.current;
            const walk = (x - startX.current);
            currentX.current += walk;
            isDragging.current = false;
            slider.classList.remove("cursor-grabbing");
        };

        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mousemove", onMouseMove);
        slider.addEventListener("mouseup", onMouseUpOrLeave);
        slider.addEventListener("mouseleave", onMouseUpOrLeave);

        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mousemove", onMouseMove);
            slider.removeEventListener("mouseup", onMouseUpOrLeave);
            slider.removeEventListener("mouseleave", onMouseUpOrLeave);
        };
    }, []);

    return (
        <div className="py-20 mt-[20vh] text-center ">
            {/* Title with character spans */}
            <h2
                className="text-8xl font-bold text-gray-400 pb-4 flex justify-center flex-wrap"
                ref={titleRef}
            >
                {"Behind the Screens".split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (charRefs.current[i] = el)}
                        className="mx-[2px]"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h2>

            <button className="bg-black py-4 px-6 font-bold text-white rounded-3xl mb-20">All Stories</button>

            <div className="relative overflow-hidden w-full flex items-center">
                <div className="overflow-hidden w-full">
                    <div
                        ref={sliderRef}
                        className="flex w-max cursor-grab transition-transform duration-300 ease-out"
                    >
                        {Stories.map((blog, index) => (
                            <div
                                key={index}
                                className="relative min-w-[250px] h-[400px] rounded-xl m-3 group flex flex-col"
                            >
                                <div className="relative w-full h-[350px] overflow-hidden rounded-xl">
                                    <img
                                        src={blog.img}
                                        alt={blog.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="mt-3 text-left px-2">
                                    <p className="text-3xl font-bold pb-2 text-black">{blog.name}</p>
                                    <p className="text-sm text-gray-700">{blog.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStoriesMain;
