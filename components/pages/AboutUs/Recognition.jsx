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
                width: '60%',
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
        <section className=" px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40 my-20 pt-[50px] md:pt-[100px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[190px] ">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-5 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split(' ').map((word, wi) => (
                        <span key={wi} className="flex whitespace-nowrap">
                            {word.split('').map((char, ci) => (
                                <span
                                    key={ci}
                                    ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                    className="inline-block"
                                    style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                                >
                                    {char}
                                </span>
                            ))}
                            {/* Add a space after each word */}
                            <span className="w-2 md:w-3 " />
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
                        <source src="https://ik.imagekit.io/0lnr4mwox/Ethical%20den%20-%20gsap/logo%202.mp4?updatedAt=1746359939690" type="video/mp4" />
                    </video>
                </div>
            </div>

        </section>
    );
};

export default Recognition;