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
              start: 'top top',
              end: '+=100%',
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
        <section className="container mx-auto px-4 mt-20 py-12">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-7xl font-rota mb-4 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split('').map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            className={`inline-block ${char === ' ' ? 'w-2 md:w-4 lg:w-5' : ''
                                }`}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <p className="base__para font-ethosnova ">We’re not in it for the shiny trophies, but they do make a killer shelf display.</p>
            </div>
            <div
                ref={wrapperRef}
                className=" my-24 md:my-2 md:mt-20 md:min-h-screen"
            >
                <div
                    ref={videoRef}
                    className=" rounded-2xl overflow-hidden"
                    style={{
                        width: '20%',
                        margin: '0 auto',
                    }}
                >
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        className=" object-cover"
                    >
                        <source src="https://html.hixstudio.net/videos/liko/liko.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </section>
    );
};

export default Recognition;