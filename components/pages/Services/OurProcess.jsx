import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const processRef = useRef(null);
  const numberRef = useRef(null);
  const numberInnerRef = useRef(null); 
  const titleRef = useRef(null);
  const charRefs = useRef([]);

  useEffect(() => {
    const element = processRef.current;

    const getEndValue = () => {
      return window.innerWidth < 1220 ? '+=4000' : '+=4500';
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

    const animateTitle = (text) => {
      if (!titleRef.current) return;

      titleRef.current.innerHTML = '';
      charRefs.current = [];

      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        span.style.color = 'gray';
        titleRef.current.appendChild(span);
        charRefs.current.push(span);
      });

      gsap.fromTo(
        charRefs.current,
        { color: 'white' },
        {
          color: 'gray',
          stagger: { from: 'random', each: 0.05 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    };

    const animateNumber = (newNumber, direction) => {
      const numberEl = numberInnerRef.current;

      const tl = gsap.timeline();

      tl.to(numberEl, {
        x: direction === 'up' ? 30 : -30,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          numberEl.innerText = newNumber;
        },
      }).to(numberEl, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const changeProcess = (number, title, direction = 'down') => {
      animateNumber(number, direction);
      animateTitle(title);
    };

    let lastScrollTop = 0;
    const handleScrollDirection = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      return direction;
    };

    animateTitle('Discover');

    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: '+=1',
        onEnterBack: () => changeProcess('1', 'Discover', 'up'),
      },
    });

    const processes = [
      { class: '.second-process', number: '2', title: 'Design', previous: '1', previousTitle: 'Discover' },
      { class: '.third-process', number: '3', title: 'Develop', previous: '2', previousTitle: 'Design' },
      { class: '.fourth-process', number: '4', title: 'Deliver', previous: '3', previousTitle: 'Develop' },
    ];

    processes.forEach(({ class: triggerClass, number, title, previous, previousTitle }) => {
      timeline.add(
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerClass,
            start: '-=60% top',
            end: '+=100',
            onUpdate: (self) => {
              const direction = handleScrollDirection();
              if (direction === 'down' && self.progress > 0.5) {
                changeProcess(number, title, direction);
              } else if (direction === 'up' && self.progress < 0.5) {
                changeProcess(previous, previousTitle, direction);
              }
            },
          },
        })
      );
    });

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
    <div className="relative mt-40 lg:mt-70 px-5 md:px-10 lg:px-10 xl:max-w-screen-xl xl:mx-auto min-h-screen">
      <div ref={processRef} className="flex flex-col justify-center items-center  z-0">
        <p className="bg-[#09e5e5] p-9 h-20 w-20 flex justify-center items-center text-gray-200 border border-[#09e5e5] rounded-full overflow-hidden">
          <span
            ref={numberRef}
            className="text-2xl font-bold text-black relative w-full h-full flex items-center justify-center"
          >
            <span ref={numberInnerRef} className="inline-block">1</span>
          </span>
        </p>
        <p className="text-2xl md:text-3xl font-extrabold font-helvetica leading-[1] text-[#09e5e5]">Our Process</p>
        <h2 ref={titleRef} style={ { letterSpacing: "-0.05em" }} className="text-5xl md:text-8xl 2xl:text-[220px] font-helvetica font-extrabold text-gray-300"></h2>
      </div>

      {/* 1st Process */}
      <div className="relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 mt-40">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-[#09e5e5]" src="/images/services/process/services-process-1.webp" alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-[#a8ff57] p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
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
          <img className="bg-[#a8ff57]" src="/images/services/process/services-process-2.webp" alt="" />
        </div>
      </div>

      {/* 3rd Process */}
      <div className="third-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 pt-96">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px]">
          <img className="bg-cyan-300" src="/images/services/process/services-process-3.webp" alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-[#a8ff57] p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center">
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
          <img className="bg-[#a8ff57]" src="/images/services/process/services-process-4.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
