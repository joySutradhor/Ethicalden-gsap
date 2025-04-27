import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
    const processRef = useRef(null);
    const numberRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const element = processRef.current;
    
        // Pin the whole div
        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "+=4600",
            pin: true,
            pinSpacing: false,
            scrub: true,
        });
    
        const timeline = gsap.timeline();
    
        const changeProcess = (number, title) => {
            numberRef.current.innerText = number;
            titleRef.current.innerText = title;
        };
    
        // Process 2 (Design)
        timeline.add(
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".second-process",
                    start: "-=60% top",
                    toggleActions: "play reverse",
                }
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 0,
                duration: 0.5,
                onComplete: () => changeProcess("2", "Design"),
                onReverseComplete: () => changeProcess("1", "Discover"), 
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 1,
                duration: 0.5,
            })
        );
    
        // Process 3 (Develop)
        timeline.add(
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".third-process",
                    start: "-=60% top",
                    toggleActions: "play reverse",
                }
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 0,
                duration: 0.5,
                onComplete: () => changeProcess("3", "Develop"),
                onReverseComplete: () => changeProcess("2", "Design"), // 👈 Reverse logic
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 1,
                duration: 0.5,
            })
        );
    
        // Process 4 (Deliver)
        timeline.add(
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".fourth-process",
                    start: "-=60% top",
                    toggleActions: "play reverse",
                }
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 0,
                duration: 0.5,
                onComplete: () => changeProcess("4", "Deliver"),
                onReverseComplete: () => changeProcess("3", "Develop"), // 👈 Reverse logic
            })
            .to([numberRef.current, titleRef.current], {
                opacity: 1,
                duration: 0.5,
            })
        );
    
        // Fade-out the whole div after last process
        timeline.add(
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "bottom center",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse",
                }
            })
            .to(element, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            })
        );
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            timeline.kill();
        };
    }, []);
    
    
    
    
    

    return (
        <div className='relative mt-70 px-20 md:px-20 lg:px-30 xl:max-w-screen-xl xl:mx-auto min-h-screen'>

            {/* The pinned title */}
            <div ref={processRef} className='flex flex-col justify-center items-center my-20 z-0'>
                <p  className='bg-cyan-900 p-9 h-20 w-20  text-gray-200 border border-cyan-300 rounded-full'>
                    <span ref={numberRef} className='text-2xl font-bold'>1</span>
                </p>
                <p className='text-3xl font-extrabold font-helvetica leading-[1] text-cyan-300'>Our Process</p>
                <h2 ref={titleRef} className='text-8xl font-helvetica font-extrabold text-gray-300'>
                    Discover
                </h2>
            </div>

            {/* 1st Process */}
            <div className='relative z-10 flex gap-60 items-center mb-96 mt-40'>
                <div className='flex flex-1 h-full items-center justify-center -mb-[600px]'>
                    <img className='bg-cyan-300' src="/images/services/process/services-process-1.webp" alt="" />
                </div>

                <div className='flex-1'>
                    <ul className='bg-yellow-200 p-16 h-full flex flex-col justify-center'>
                        <li className='text-2xl font-helvetica font-medium py-2'>Workshop sessions</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>User personas</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Sitemapping</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Competetive benchmarks</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Moodboards</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Best practices</li>
                    </ul>
                </div>
            </div>

            {/* 2nd Process */}
            <div className='second-process relative z-10 flex gap-60 items-center mb-96 pt-96'>
                <div className='flex-1'>
                    <ul className='bg-cyan-300 p-16 h-full flex flex-col justify-center'>
                        <li className='text-2xl font-helvetica font-medium py-2'>Low-fidelity wireframes</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>High-fidelity wireframes</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Prototyping</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>UX/UI design</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Interactions</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Copywriting</li>
                    </ul>
                </div>

                <div className='flex flex-1 h-full items-center justify-center -mb-[600px]'>
                    <img className='bg-yellow-200' src="/images/services/process/services-process-2.webp" alt="" />
                </div>
            </div>

            {/* 3rd Process */}
            <div className='third-process relative z-10 flex gap-60 items-center mb-96 pt-96'>
                <div className='flex flex-1 h-full items-center justify-center -mb-[600px]'>
                    <img className='bg-cyan-300' src="/images/services/process/services-process-3.webp" alt="" />
                </div>

                <div className='flex-1'>
                    <ul className='bg-yellow-200 p-16 h-full flex flex-col justify-center'>
                        <li className='text-2xl font-helvetica font-medium py-2'>Frontend development</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Backend development</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>CMS integration</li>
                    </ul>
                </div>
            </div>

            {/* 4th Process */}
            <div className='fourth-process relative z-10 flex gap-60 items-center mb-96 pt-96'>
                <div className='flex-1'>
                    <ul className='bg-cyan-300 p-16 h-full flex flex-col justify-center'>
                        <li className='text-2xl font-helvetica font-medium py-2'>Test, Measure, Improve</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Optimize processes</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Automate workflows</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Monitor tools integration</li>
                        <li className='text-2xl font-helvetica font-medium py-2'>Optimizing user experiences</li>
                    </ul>
                </div>

                <div className='flex flex-1 h-full items-center justify-center -mb-[600px]'>
                    <img className='bg-yellow-200' src="/images/services/process/services-process-4.webp" alt="" />
                </div>
            </div>

        </div>
    );
};

export default OurProcess;
