'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Banner() {
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

      mm.add("(min-width: 768px)", () => {
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
    <div
      ref={wrapperRef}
      className="tp-hero-bottom-img-wrap bg-[#f1f1f1] flex justify-center items-center min-h-screen"
    >
      <div
        ref={videoRef}
        className="tp-hero-bottom-img rounded-2xl overflow-hidden"
        style={{
          width: '40%',
          margin: '0 auto',
        }}
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-auto max-h-[90vh] object-cover"
        >
          <source src="https://html.hixstudio.net/videos/liko/liko.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Banner;
