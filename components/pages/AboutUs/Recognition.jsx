'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Recognition = () => {

    // GSAP title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);


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
                    start: 'top 90%',
                    end: 'top 50%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const title = 'Always grateful for the recognition';

    // video animation
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const video = videoRef.current;

        if (wrapper && video) {
            gsap.set(video, {
                width: '40%',
                margin: '0 auto',
                transformOrigin: 'center center',
            });

            let mm = gsap.matchMedia();

            mm.add("(min-width: 200px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: '-=20%top top',
                        end: 'bottom',
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                        markers: false,
                    },
                });

                tl.to(video, {
                    width: '100%',
                    ease: 'power2.out',
                });
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="container mx-auto px-4 my-20 ">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-6xl xl:text-8xl font-extrabold font-helvetica mb-4 leading-[1] flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split(' ').map((word, wi) => (
                        <span key={wi} className="flex whitespace-nowrap">
                            {word.split('').map((char, ci) => (
                                <span
                                    key={ci}
                                    ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                    className="inline-block"
                                >
                                    {char}
                                </span>
                            ))}
                            {/* Add a space after each word */}
                            <span className="w-2 md:w-4 lg:w-5" />
                        </span>
                    ))}
                </h2>

                <p className="text-black text-xl md:text-2xl font-helvetica ">We’re not in it for the shiny trophies, but they do make a killer shelf display.</p>
            </div>
            <div
                ref={wrapperRef}
                className=""
            >
                <div
                    ref={videoRef}
                    className="  overflow-hidden"
                >
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        className=" object-cover rounded-2xl"
                        style={{
                            width: '70%',
                            height: '500px',
                            margin: 'auto auto',
                        }}
                    >
                        <source src="https://html.hixstudio.net/videos/liko/liko.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </section>
    );
};

export default Recognition;