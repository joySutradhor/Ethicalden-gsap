import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "../hooks/AnimatedButoon";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AllStoriesMain = () => {
    const sliderRef = useRef(null);
    const currentX = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);

    const titleRef = useRef(null);
    const charRefs = useRef([]);
    const waveRef = useRef(null); // 👈 For waving animation

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

    // Waving hand animation
    useEffect(() => {
        if (!waveRef.current) return;

        gsap.to(waveRef.current, {
            rotate: 15,
            duration: 0.4,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            transformOrigin: "70% 70%"
        });
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
            backgroundColor: "#9EFCF1"
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
        <div className="py-20 mt-[5vh] md:mt-[10vh] lg:mt-[20vh] text-center relative">
            {/* Centered Waving Image */}
            <div className="flex justify-center mb-2">
                <img
                    src="/images/stories/waving-hand.webp"
                    alt="Waving Hand"
                    ref={waveRef}
                    className="w-20 h-20 md:w-24 md:h-24"
                />
            </div>

            {/* Title with character spans */}
            <h2
                className="v1__title font-rota text-gray-400 pb-4 flex justify-center flex-wrap"
                ref={titleRef}
            >
                {"Our Products".split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (charRefs.current[i] = el)}
                        className="mx-[1px] sm:mx-[2px]"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h2>

            <div className="my-6 sm:mt-8 relative inline-block">
                <Link
                    ref={buttonRef}
                    className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg bg-[#003b49] overflow-hidden inline-flex items-center justify-center group"
                    href={"#"}
                    style={{ opacity: 1 }}
                >
                    <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                    <span
                        ref={buttonTextRef}
                        className="relative z-10 font-medium text-white overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                    >
                        <span ref={buttonStaticTextRef} className="static-text">
                            All stories
                        </span>
                        <span
                            ref={buttonScrollingTextRef}
                            className="scrolling-text absolute left-0"
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <span key={i} className="inline-block mr-8">
                                    All stories
                                </span>
                            ))}
                        </span>
                    </span>
                </Link>
            </div>

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
                                    <p className="v4__title font-rota font-bold pb-2 text-black">{blog.name}</p>
                                    <p className="base__para font-ethosnova">{blog.title}</p>
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
