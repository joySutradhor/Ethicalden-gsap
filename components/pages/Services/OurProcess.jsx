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
  
    const getEndValue = () => {
      if (window.innerWidth < 1220) {
        return '+=4100'; 
      } else {
        return '+=4500'; 
      }
    };
    
    ScrollTrigger.create({
      trigger: element,
      start: 'top center',
      end: getEndValue(),
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  
    const timeline = gsap.timeline();
  
    const changeProcess = (number, title) => {
      numberRef.current.innerText = number;
      titleRef.current.innerText = title;
    };
  
    let lastScrollTop = 0;
    const handleScrollDirection = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      return direction;
    };
  
    // 🛠️ NEW: Reset to Discover when scroll back to top
    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: '+=1',
        onEnterBack: () => {
          changeProcess('1', 'Discover');
        },
      },
    });
  
    // Process 2 (Design)
    timeline.add(
      gsap.timeline({
        scrollTrigger: {
          trigger: '.second-process',
          start: '-=60% top',
          end: '+=100',
          onUpdate: (self) => {
            const direction = handleScrollDirection();
            if (direction === 'down' && self.progress > 0.5) {
              changeProcess('2', 'Design');
            } else if (direction === 'up' && self.progress < 0.5) {
              changeProcess('1', 'Discover');
            }
          },
        },
      })
    );
  

    // Process 3 (Develop)
    timeline.add(
      gsap.timeline({
        scrollTrigger: {
          trigger: '.third-process',
          start: '-=60% top',
          end: '+=100',
          onUpdate: (self) => {
            const direction = handleScrollDirection();
            if (direction === 'down' && self.progress > 0.5) {
              changeProcess('3', 'Develop');
            } else if (direction === 'up' && self.progress < 0.5) {
              changeProcess('2', 'Design');
            }
          },
        },
      })
    );

    // Process 4 (Deliver)
    timeline.add(
      gsap.timeline({
        scrollTrigger: {
          trigger: '.fourth-process',
          start: '-=60% top',
          end: '+=100',
          onUpdate: (self) => {
            const direction = handleScrollDirection();
            if (direction === 'down' && self.progress > 0.5) {
              changeProcess('4', 'Deliver');
            } else if (direction === 'up' && self.progress < 0.5) {
              changeProcess('3', 'Develop');
            }
          },
        },
      })
    );

    // Fade-out the whole div after the last process
    timeline.add(
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'bottom center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }).to(element, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      timeline.kill();
    };
  }, []);

  return (
    <div className="relative mt-70 px-5 md:px-20 lg:px-30 xl:max-w-screen-xl xl:mx-auto min-h-screen">
      {/* The pinned title */}
      <div ref={processRef} className="flex flex-col justify-center items-center my-20 z-0">
        <p className="bg-cyan-900 p-9 h-20 w-20 text-gray-200 border border-cyan-300 rounded-full">
          <span ref={numberRef} className="text-2xl font-bold">
            1
          </span>
        </p>
        <p className="text-2xl md:text-3xl font-extrabold font-helvetica leading-[1] text-cyan-300">Our Process</p>
        <h2 ref={titleRef} className="text-5xl md:text-8xl font-helvetica font-extrabold text-gray-300">
          Discover
        </h2>
      </div>

      {/* 1st Process */}
      <div className="relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 mt-40">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-cyan-300" src="/images/services/process/services-process-1.webp" alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-yellow-200 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Workshop sessions</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">User personas</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Sitemapping</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Competetive benchmarks</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Moodboards</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Best practices</li>
          </ul>
        </div>
      </div>

      {/* 2nd Process */}
      <div className="second-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 pt-96">
        <div className="flex-1">
          <ul className="bg-cyan-300 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Low-fidelity wireframes</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">High-fidelity wireframes</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Prototyping</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">UX/UI design</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Interactions</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Copywriting</li>
          </ul>
        </div>

        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-yellow-200" src="/images/services/process/services-process-2.webp" alt="" />
        </div>
      </div>

      {/* 3rd Process */}
      <div className="third-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 pt-96">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-cyan-300" src="/images/services/process/services-process-3.webp" alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-yellow-200 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Frontend development</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Backend development</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">CMS integration</li>
          </ul>
        </div>
      </div>

      {/* 4th Process */}
      <div className="fourth-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-24 md:mb-28 lg:mb-40 pt-96">
        <div className="flex-1">
          <ul className="bg-cyan-300 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Test, Measure, Improve</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Optimize processes</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Automate workflows</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Monitor tools integration</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">Optimizing user experiences</li>
          </ul>
        </div>

        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-yellow-200" src="/images/services/process/services-process-4.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
