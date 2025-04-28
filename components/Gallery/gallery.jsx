'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryMain = () => {
    const sectionRef = useRef();
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);
    const col2Ref = useRef(null);
    const col4Ref = useRef(null);
    const col5Ref = useRef(null);



    // title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);

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



    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;

        gsap.fromTo(
            video,
            { y: 0 },
            {
                y: 900,
                scrollTrigger: {
                    trigger: section,
                    start: "bottom bottom",
                    end: "+=100%",
                    scrub: 1,
                    markers: false,
                },
            }
        );

        if (wrapper && video) {
            gsap.set(video, {
                width: '17.5vw',
                height: '48vh',
                position: 'absolute',
                left: '50%',
                xPercent: -50,
                transformOrigin: 'center center',
            });

            let mm = gsap.matchMedia();

            mm.add("(min-width: 1000px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: '+=130% bottom',
                        end: '+=110%',
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                        markers: false,
                    },

                    defaults: {
                        ease: 'none'
                    }
                });

                tl.to(video, {
                    y: 100,
                    width: '80vw',
                    height: '80vh',
                    duration: 1,
                    ease: 'none',
                }, 0);

                // Column scroll effects
                gsap.fromTo(
                    col2Ref.current,
                    { y: 0 },
                    {
                        y: -100,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                );

                gsap.fromTo(
                    col5Ref.current,
                    { y: 0 },
                    {
                        y: -100,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                );

                gsap.fromTo(
                    col4Ref.current,
                    { y: 0 },
                    {
                        y: 100,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <>
            <section ref={sectionRef} className="min-h-screen  mt-[5vh] md:mt-[15vh] lg:mt-[20vh] py-10 px-4  relative">

                {/* Title with character spans */}
                <h2
                    className="font-helvetica text-4xl md:text-6xl xl:text-8xl font-extrabold leading-[1] pb-4 flex justify-center flex-wrap mb-16"
                    ref={titleRef}
                >
                    {"Our Services".split("").map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            className="mx-[1px] sm:mx-[2px]"
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h2>
                <div className='flex justify-center items-center'>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full relative">

                        {/* First Column */}
                        <div className="space-y-6">
                            <div className="bg-[#4DEFA7] text-black h-[35vh] md:h-[45vh] lg:h-[38vh] xl:h-[45vh] p-4 md:p-6 rounded-2xl w-full">
                                <p className="text-base md:text-xl">01 / <span className='text-gray-500'>06</span></p>
                                <h2 className="text-5xl md:text-7xl lg:text-5xl  xl:text-7xl 2xl:text-9xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5">40</h2>
                                <p className="text-sm md:text-base">digital magicians shattering your expectations. <a className="underline" href="#">Take a look behind the screens.</a></p>
                            </div>
                            <img src="/images/gallery/gallery-1.jpg" alt="Award" className="rounded-2xl h-[35vh] md:h-[45vh] lg:h-[38vh] xl:h-[45vh] w-full" />
                        </div>

                        {/* Second Column (animated up) */}
                        <div ref={col2Ref} className="space-y-6 flex flex-col mt-30 lg:mt-30 xl:mt-40 ">
                            <div className="bg-black text-white h-[35vh] p-4 md:p-6 rounded-2xl  w-full md:h-[45vh] lg:h-[38vh] xl:h-[45vh]">
                                <p className="text-base md:text-xl">02 / <span className='text-gray-500'>06</span></p>
                                <h2 className="text-5xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-2 md:pb-5">34</h2>
                                <p className="text-sm md:text-base">Fortune 500 companies who chose us. <a className="underline" href="#">View our work</a></p>
                            </div>
                            <div className="bg-[#09E5E5] text-black h-[35vh] md:h-[45vh] p-4 md:p-6 rounded-2xl w-full lg:h-[38vh] xl:h-[45vh]">
                                <p className="text-base md:text-xl">MST / <span className='text-gray-500'>MATER STANDARD TIME</span></p>
                                <h2 className="text-4xl md:text-6xl lg:text-4xl xl:text-7xl font-semibold pt-12 md:pt-24 lg:pt-8 xl:pt-28 pb-4 md:pb-5">10:25 <span className="text-sm">AM</span></h2>
                                <p className="text-sm md:text-base">Sleep mode initiated.</p>
                            </div>
                        </div>

                        {/* Third Column (video) */}
                        <div
                            ref={wrapperRef}
                            className="hidden lg:flex tp-hero-bottom-img-wrap space-y-6 flex-col  justify-end min-h-screen mx-auto w-full relative"
                        >
                            <div
                                ref={videoRef}
                                className="tp-hero-bottom-img rounded-2xl overflow-hidden"
                                style={{
                                    margin: '0 auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <video
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="w-full h-full rounded-2xl object-cover"
                                >
                                    <source src="https://html.hixstudio.net/videos/liko/liko.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Fourth Column (animated down) */}
                        <div ref={col4Ref} className="space-y-6 -mt-29 md:-mt-20">
                            <div className="bg-black text-white h-[35vh] md:h-[45vh] lg:h-[38vh] xl:h-[45vh] p-4 md:p-6 rounded-2xl w-full">
                                <p className="text-base md:text-xl">04 / <span className='text-gray-500'>06</span></p>
                                <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-semibold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5">Fintech <br /> Experts</h3>
                                <p className="text-sm md:text-base">Unlocking the future of finance. <a className="underline" href="#">How do we do it?</a></p>
                            </div>
                            <div className="bg-[#09E5E5] text-black h-[35vh] md:h-[45vh] lg:h-[38vh] xl:h-[45vh] p-4 md:p-6 rounded-2xl w-full">
                                <p className="text-base md:text-xl">HOT OR NOT</p>
                                <h2 className="text-5xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5">14°</h2>
                                <p className="text-sm md:text-base">Perfect weather for allergies.</p>
                            </div>
                        </div>

                        {/* Fifth Column (animated up) */}
                        <div ref={col5Ref} className="space-y-6 flex flex-col  lg:mt-30 xl:mt-40">
                            <img src="/images/gallery/gallery-2.jpg" alt="Team" className="rounded-2xl w-full h-[20vh] md:h-[35vh]  lg:h-[38vh] xl:h-[45vh]" />
                            <div className="bg-[#4DEFA7] text-black h-[35vh] md:h-[45vh] lg:h-[38vh] xl:h-[45vh] p-4 md:p-6 rounded-2xl w-full ">
                                <p className="text-base md:text-xl">06 / <span className='text-gray-500'>06</span></p>
                                <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-semibold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5">Masters of Telco</h3>
                                <p className="text-sm md:text-base">Transforming telco campaigns. <a className="underline" href="#">What's our secret?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryMain;
