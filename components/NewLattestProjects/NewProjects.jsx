'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function NewProjects() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgOverlay = document.createElement('div');
    bgOverlay.style.position = 'fixed';
    bgOverlay.style.top = '0';
    bgOverlay.style.left = '0';
    bgOverlay.style.width = '100vw';
    bgOverlay.style.height = '100vh';
    bgOverlay.style.backgroundColor = '#06171D';
    bgOverlay.style.zIndex = '-1';
    bgOverlay.style.opacity = '0';
    bgOverlay.style.pointerEvents = 'none';
    document.body.appendChild(bgOverlay);

    // Main timeline for entry background change
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bg-change-anim',
        start: 'top 60%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.to(bgOverlay, {
      opacity: 1,
      ease: 'none'
    }, 0);

    // Reset background when leaving section
    ScrollTrigger.create({
      trigger: '.bg-change-anim',
      start: 'bottom bottom',
      end: 'bottom+=1 bottom',
      onEnterBack: () => {
        gsap.to(bgOverlay, { opacity: 1 });
      },
      onLeave: () => {
        gsap.to(bgOverlay, { opacity: 0 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      bgOverlay.remove();
    };
  }, []);


  // title animation
  const titleRef = useRef(null);
  const charRefs = useRef([]);


  // Title animation
  useEffect(() => {
    if (!charRefs.current.length) return;

    gsap.fromTo(charRefs.current,
      { color: 'gray' },
      {
        color: '#4DEFA7',
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


  return (
    <section className='bg-change-anim px-5 xl:px-20 2xl:px-50 mt-[5vh]  py-[10vh] md:py-[10vh] lg:py-[20vh] text-white'>
      <div className='grid grid-cols-2 gap-[4vh] md:gap-x-[5vw] xl:gap-x-[7vw]'>
        {/* first row start */}
        <div className=''>
          <h2
            ref={titleRef}
            className="text-left w-full max-w-2xl text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-gray-400 font-helvetica font-extrabold leading-[1]"
          >
            {/* First Line: "Our latest" */}
            <span className="inline-block whitespace-nowrap">
              {"Our".split("").map((char, ci) => (
                <span
                  key={`our-${ci}`}
                  ref={(el) => (charRefs.current[ci] = el)}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
              {/* Real space after "Our" */}
              <span
                ref={(el) => (charRefs.current[100] = el)}
                className="inline-block"
              >
                &nbsp;
              </span>
              {"latest".split("").map((char, ci) => (
                <span
                  key={`latest-${ci}`}
                  ref={(el) => (charRefs.current[101 + ci] = el)}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Line Break after "Our latest" */}
            <br />

            {/* Second Line: "projects" */}
            <span className="inline-block whitespace-nowrap">
              {"projects".split("").map((char, ci) => (
                <span
                  key={`projects-${ci}`}
                  ref={(el) => (charRefs.current[200 + ci] = el)}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>


          <div className='mt-[10vh] md:mt-[25vh] mb-[5vh] md:mb-0 md:w-[80%]'>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/02/hns.jpg'
              height={1000}
              width={1000}
              className='object-cover w-full h-full'
              alt='Project 1'
            />
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-helvetica font-bold py-3 cursor-pointer hover:text-[#4DEFA7]'>
              Blog image HNS
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className='h-[30vh] md:mt-[0vh] lg:mt-0 md:h-[50vh] lg:h-[60h] xl:h-[70vh]'>
          <video
            src='https://mater.agency/wp-content/uploads/2024/02/vogue-1.mp4'
            muted
            autoPlay
            loop
            className='h-full w-full object-cover'
          ></video>
          <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>Vogue Adria</h3>
          <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
            site /Branding
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </p>

        </div>

        {/* second row start */}
        <div className=' md:mt-[15vh] lg:mt-[25vh]'>
          <div>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/02/NetTV.jpg'
              width={1000}
              height={1000}
              className='object-cover h-full w-full'
              alt='NetTV'
            />
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>
              Stream live TV plus thousands of shows with NetTVPlus
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className=''>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[25vh] md:gap-y-0 -mt-[16vh] md:mt-0'>
            <div className='h-[30vh] md:h-[20vh] lg:h-[30vh]'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/03/nordeus.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>
                Nordeus Unleashed
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>

            <div className='h-[30vh] md:h-[20vh] lg:h-[30vh] md:mt-0 -mt-[5vh]'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/green_tree.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>Green Tree Villas Website</h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        {/* third row start */}
        <div className='-mt-[20vh] md:mt-[30vh] lg:mt-[50vh] '>
          <div className='h-[40vh] md:w-[80%]'>
            <div>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/led_elektronika.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'> Honor 9 – The Light Catcher</h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        <div className='mt-[15vh] md:mt-0'>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/honor9.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>Led Elektronika</h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        {/* fourth row start */}
        <div className='md:mt-[25vh] -mt-[24vh] lg:mt-[40vh] xl:mt-[50vh]'>
          <div>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/01/AZ-pension-fund.jpg'
              height={1000}
              width={1000}
              className='object-cover h-full w-full'
              alt='AZ Pension Fund'
            />
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>
              Rethinking the AZ Retirement Fund Mobile App
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>
        <div className='mt-[5vh] md:mt-[10vh] lg:mt-[20vh] xl:mt-[30vh]'>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[20vh] md:gap-y-0'>
            <div className='h-[30vh] md:h-[20vh] lg:h-[30vh]'>
              <Image
                height={1000}
                width={1000}
                src='https://mater.agency/wp-content/uploads/2024/03/rba.jpg'
                className='h-full w-full object-cover'
                alt='RBA'
              />
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>
                RBA: Evolution
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
            <div className='h-[30vh] md:h-[20vh] lg:h-[30vh]'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/telenor-2.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>Telenor Bank</h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        {/* fifth row */}
        <div className='hidden md:block'></div>
        <div className='-mt-[65vh] md:mt-[5vh] '>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#4DEFA7]'>
              Journey into the world of wild animals called Zvjerići
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProjects
