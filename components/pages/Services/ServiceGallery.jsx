'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceGallery = () => {
    const sectionRef = useRef();
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);
    const col4Ref = useRef(null);
    const col5Ref = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1200) { 

            const section = sectionRef.current;

            const triggers = [];

            triggers.push(
                gsap.fromTo(
                    col2Ref.current,
                    { y: 0 },
                    {
                        y: -40,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col3Ref.current,
                    { y: 0 },
                    {
                        y: -120,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col4Ref.current,
                    { y: 0 },
                    {
                        y: -40,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col5Ref.current,
                    { y: 0 },
                    {
                        y: -60,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            // Cleanup when component unmounts
            return () => {
                triggers.forEach(anim => {
                    anim.scrollTrigger?.kill();
                    anim.kill();
                });
            };
        }
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen bg-white py-10 px-5 md:px-10 lg:px-10 relative">
            <div className='flex justify-center items-center'>
                <div className="xl:grid  xl:grid-cols-5 gap-6 w-full relative">

                    {/* First Column */}
                    <div className="flex flex-row space-y-6 xl:block gap-4 md:gap-6 lg:gap-8  2xl:block">
                        <div className="flex-1 bg-[#012d3d] text-white p-4 md:p-6  rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">01 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl  font-bold pt-12 md:pt-24 lg:pt-20 xl:pt-28 2xl:pt-38 pb-4 md:pb-5">Fintech</h2>
                            <p className="text-sm md:text-base">Unlocking and innovating the future of finance for more than 10 years. <a className="underline" href="#">How do we do it?</a></p>
                        </div>
                        <img src="/images/services/services-card-1.webp" alt="service-1" className="flex-1 w-[23vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh] rounded-2xl  bg-yellow-200" />
                    </div>

                    {/* Second Column */}
                    <div ref={col2Ref} className="space-y-6 flex gap-4 md:gap-6 lg:gap-8  flex-row xl:block 2xl:block xl:mt-8">
                        <img src="/images/services/services-card-2.webp" alt="service-2" className="flex-1 rounded-2xl w-[23vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]  bg-cyan-200" />
                        <div className="flex-1 bg-[#071f2b] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">02 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl  font-bold pt-12 md:pt-24 lg:pt-20 xl:pt-28 pb-2 md:pb-5">Telco</h2>
                            <p className="text-sm md:text-base">Transforming telco campaigns into conversation starters. <a className="underline" href="#">What's our secret?</a></p>
                        </div>

                    </div>

                    {/* Third Column */}
                    <div ref={col3Ref} className="space-y-6 flex flex-col mt-2 md:mt-3 xl:mt-0 xl:-mb-20  lg:justify-end">
                        <div className=" bg-[#012d3d] text-white p-4 md:p-6 rounded-2xl w-full h-[35vh] md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">03 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl  font-bold pt-24 md:pt-24 lg:pt-20 xl:pt-28 pb-2 md:pb-5">Corporate</h2>
                            <p className="text-sm md:text-base">Sculpting digital skyscrapers in the corporate jungle. <a className="underline" href="#">Venture deep.</a></p>
                        </div>
                    </div>

                    {/* Fourth Column */}
                    <div ref={col4Ref} className="flex flex-row gap-4 md:gap-6 lg:gap-8 mt-4 mt-5 lg:mt-8 xl:mt-8 space-y-6 xl:block 2xl:block ">
                        <div className="flex-1 bg-[#071f2b] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">04 / <span className='text-gray-500'>05</span></p>
                            <h3 className="text-2xl md:text-4xl lg:text-3xl font-semibold pt-12 md:pt-12 lg:pt-20 xl:pt-30 2xl:pt-38 pb-4 md:pb-5">Startups</h3>
                            <p className="text-sm md:text-base">Turning sparks and ideas into products that improve lives. <a className="underline" href="#">Check the result.</a></p>
                        </div>
                        <img src="/images/services/services-card-3.webp" alt="service-3" className="flex-1 md:w-auto md:h-[40vh] lg:h-[45vh] rounded-2xl w-[23vh] h-[35vh] bg-cyan-200" />
                    </div>

                    {/* Fifth Column */}
                    <div  className="space-y-6 flex gap-4 md:gap-6 lg:gap-8 flex-row xl:block 2xl:block ">
                        <img src="/images/services/services-card-4.webp" alt="services-4" className="flex-1 rounded-2xl w-[23vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh] bg-yellow-200 " />
                        <div className="flex-1 bg-[#012d3d] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">05 / <span className='text-gray-500'>05</span></p>
                            <h3 className="text-2xl md:text-4xl lg:text-3xl xl:9xl font-semibold pt-12 md:pt-24 lg:pt-20 xl:pt-28 pb-4 md:pb-5">Saas</h3>
                            <p className="text-sm md:text-base">Navigating the complexities to simplify everyday life. <a className="underline" href="#">View our solution</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceGallery;
