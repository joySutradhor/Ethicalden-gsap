'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DummyText from '../utils/dummy-text';

gsap.registerPlugin(ScrollTrigger);

const GalleryMain = () => {
    const sectionRef = useRef();
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);


    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
      
        // STEP 1: Scroll down naturally with y: 700
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
      
        // STEP 2: Pin and expand video (while respecting layout scroll offset)
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
      
          mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapper,
                start: '+=150% bottom',
                end: '+=400% bottom',
                scrub: 1,
                pin: true,
                pinSpacing: true,
                markers: false,
              },
            });
      
            tl.to(video, {
              y: 900,
              width: '80vw',
              height: '80vh',
              ease: 'power2.out',
            });
          });
        }
      
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

    return (
        <>
            <section ref={sectionRef} className="min-h-screen bg-white flex justify-center items-center mt-[20vh] py-10 px-4 mb-[1000px] relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full relative">
                    {/* First Column */}
                    <div className="space-y-6">
                        <div className="bg-[#012d3d] text-white p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">01 / <span className='text-gray-500'>06</span></p>
                            <h2 className="text-9xl font-bold pt-28 pb-5">40</h2>
                            <p>digital magicians shattering your expectations. <a className="underline" href="#">Take a look behind the screens.</a></p>
                        </div>
                        <img src="/images/gallery/gallery-1.jpg" alt="Award" className="rounded-2xl w-full lg:w-[17.5vw]" />
                    </div>

                    {/* Second Column */}
                    <div className="space-y-6 flex flex-col justify-end">
                        <div className="bg-[#0a0a0a] text-white p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">02 / <span className='text-gray-500'>06</span></p>
                            <h2 className="text-9xl font-bold pt-28 pb-5">34</h2>
                            <p>Fortune 500 companies who chose us. <a className="underline" href="#">View our work</a></p>
                        </div>
                        <div className="bg-[#fdf98f] text-black p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">MST / <span className='text-gray-500'>MATER STANDARD TIME</span></p>
                            <h2 className="text-7xl font-semibold pt-24 pb-5">10:25 <span className="text-sm">AM</span></h2>
                            <p>Sleep mode initiated.</p>
                        </div>
                    </div>

                    {/* Third Column (Video) - Hidden on mobile/tablet */}
                    <div
                        ref={wrapperRef}
                        className="hidden lg:flex tp-hero-bottom-img-wrap space-y-6 flex-col justify-end min-h-screen mx-auto w-full relative" 
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
                                className="w-full h-full object-cover"
                            >
                                <source src="https://html.hixstudio.net/videos/liko/liko.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>


                    {/* Fourth Column */}
                    <div className="space-y-6">
                        <div className="bg-[#012d3d] text-white p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">04 / <span className='text-gray-500'>06</span></p>
                            <h3 className="text-5xl font-semibold pt-28 pb-5">Fintech <br /> Experts</h3>
                            <p>Unlocking the future of finance. <a className="underline" href="#">How do we do it?</a></p>
                        </div>
                        <div className="bg-[#012d3d] text-white p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">HOT OR NOT</p>
                            <h2 className="text-9xl font-bold pt-28 pb-5">14°</h2>
                            <p>Perfect weather for allergies.</p>
                        </div>
                    </div>

                    {/* Fifth Column */}
                    <div className="space-y-6">
                        <img src="/images/gallery/gallery-2.jpg" alt="Team" className="rounded-2xl w-full lg:w-[17.5vw]" />
                        <div className="bg-[#fdf98f] text-black p-6 rounded-2xl w-full lg:w-[17.5vw]">
                            <p className="text-xl">08 / <span className='text-gray-500'>06</span></p>
                            <h3 className="text-5xl font-semibold pt-28 pb-5">Masters of Telco</h3>
                            <p>Transforming telco campaigns. <a className="underline" href="#">What's our secret?</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryMain;
