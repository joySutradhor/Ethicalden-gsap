'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function NewProjects() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgOverlay = document.createElement('section');
    bgOverlay.style.position = 'fixed';
    bgOverlay.style.top = '0';
    bgOverlay.style.left = '0';
    bgOverlay.style.width = '100vw';
    bgOverlay.style.height = '100vh';
    bgOverlay.style.backgroundColor = '#111';
    bgOverlay.style.zIndex = '-1';
    bgOverlay.style.opacity = '0';
    bgOverlay.style.pointerEvents = 'none';
    document.body.appendChild(bgOverlay);

    // Get all text elements that need color change
    const textElements = document.querySelectorAll('.bg-change-anim, .bg-change-anim *');

    // Main timeline for entry background change
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bg-change-anim',
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.to(bgOverlay, {
      opacity: 1,
      ease: 'none'
    }, 0);

    // Instead of directly setting color
    tl.to(textElements, {
      '--text-color': '#ffffff', // Set CSS variable
      ease: 'none'
    }, 0);

    // And in the onLeave/onEnterBack
    gsap.to(textElements, { '--text-color': '#000000' });

    // Reset background and text color when leaving section
    ScrollTrigger.create({
      trigger: '.bg-change-anim',
      start: 'bottom bottom',
      end: 'bottom+=1 bottom',
      onEnterBack: () => {
        gsap.to(bgOverlay, { opacity: 1 });
        gsap.to(textElements, { color: '#ffffff' });
      },
      onLeave: () => {
        gsap.to(bgOverlay, { opacity: 0 });
        gsap.to(textElements, { color: '#000000' }); // Change to black when background is white
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
        color: '#09e5e5',
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
    <section className='bg-change-anim px-[20px]  md:px-10 lg:px-[50px] xl:px-39 2xl:px-50 pt-[100px] md:pt-[150px] lg:pt-[250px] xl:pt-[300px] 2xl:pt-[300px]  py-[10vh] md:py-[10vh]  text-white'>
      <div className='grid grid-cols-2 gap-[4vh] md:gap-x-[5vw] xl:gap-x-[6vw]'>
        {/* first row start */}
        <div className=''>
          <h2
            ref={titleRef}
            className="text-left w-full max-w-2xl text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-gray-400 font-helvetica font-extrabold leading-[1]"
            style={{ letterSpacing: "-0.05em" }}
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
          


          <div className='mt-[10vh] md:mt-[25vh] mb-[5vh] md:mb-0 md:w-[70%] h-[30%] md:h-[40%]'>
            <Image
              src='https://ik.imagekit.io/ethicalden/projects/p5.png?updatedAt=1747074110219'
              height={1000}
              width={1000}
              className='object-cover w-full h-full'
              alt='Project 1'
            />

            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-helvetica font-bold py-3 ' style={{ letterSpacing: "-0.05em" }}>
              <a href="https://www.behance.net/gallery/195872957/MR-Cafe-Logo-Design-Branding-Project" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Mr Cafe
              </a>
            </h3>

            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              Restaurant
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className='h-[23vh] mt-5 md:mt-[0vh] lg:mt-0 md:h-[50vh] lg:h-[60h] xl:h-[70vh]'>
          <video
            src='https://ik.imagekit.io/ethicalden/projects/marzii.mp4?updatedAt=1747079535549'
            muted
            autoPlay
            loop
            className='h-full w-full object-cover'
          ></video>
          <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}> Marzii </h3>
          <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
            E-commerce / Branding
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </p>

        </div>

        {/* second row start */}
        <div className='mt-[10vh] md:mt-[15vh] lg:mt-[25vh] '>
          <div className='h-[23vh] md:h-[50vh] lg:h-[75vh]'>
            <Image
              src='https://ik.imagekit.io/ethicalden/projects/p1.png?updatedAt=1747074109969'
              width={1000}
              height={1000}
              className='object-cover h-full w-full'
              alt='E-laz'
            />
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              E-laj
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              Medical Healthcare
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className=''>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[25vh] md:gap-y-0 -mt-[6vh] md:mt-0'>
            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
              <video
                src='https://ik.imagekit.io/ethicalden/projects/makcommunity.mp4?updatedAt=1747079300877'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="https://www.behance.net/gallery/196542915/MAK-Community-Branding-UIUX-and-Web-Development" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Mak Community
              </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>

            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh] md:mt-0 -mt-[5vh]'>
              <Image
                width={500}
                height={100}
                alt='wonderlite'
                src='https://ik.imagekit.io/ethicalden/projects/image.png?updatedAt=1747080116801'
                className='h-full w-full object-cover'
              ></Image>
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="https://www.behance.net/gallery/195879275/Wonderlite-Branding-Social-Media-Stationary-UXUI" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Wonderlite
              </a>
                </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        {/* third row start */}
        <div className='-mt-[8vh] md:mt-[30vh] lg:mt-[60vh] '>
          <div className='h-[40vh] md:w-[60%]'>
            <div>
              <Image
                src='/images/lattest-projects/emopract.jpg'
                height={100}
                width={500}
                alt='emopract'
                className='h-full w-full object-cover'
              ></Image>
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}> 
                <a href="https://www.behance.net/gallery/226680185/Emopract-Project-UIUX-Design-Web-Development" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Emopract
              </a>
                </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                UI/UX / site
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        <div className='mt-[20vh] md:mt-0'>
          <div>
            <video
              src='https://ik.imagekit.io/ethicalden/projects/SAFL.mp4?updatedAt=1747079652879'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>Sandeep autolines</h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        {/* fourth row start */}
        <div className='md:mt-[25vh] -mt-[24vh] lg:mt-[40vh] xl:mt-[50vh]'>
          <div className='h-[23vh] md:h-[50vh] lg:h-[70vh]'>
            <Image
              src='https://ik.imagekit.io/ethicalden/projects/p3.png?updatedAt=1747074110433'
              height={1000}
              width={1000}
              className='object-cover h-full w-full'
              alt='Divine'
            />
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              <a href="https://www.behance.net/gallery/195704103/Devine-Branding-and-App-Development" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Divine
              </a>
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              UI/Ux /Website Development
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>
        <div className='mt-[8vh] md:mt-[10vh] lg:mt-[20vh] xl:mt-[30vh]'>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[20vh] md:gap-y-0'>
            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
              <Image
                height={1000}
                width={1000}
                src='https://ik.imagekit.io/ethicalden/projects/p2.png?updatedAt=1747074109978'
                className='h-full w-full object-cover'
                alt='RBA'
              />
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="https://www.behance.net/gallery/195703857/Branding-and-Web-Developnment-Insiderfeed" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                Insider Feed
              </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                App Development
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
              <Image
                height={1000}
                width={1000}
                src='/images/lattest-projects/massart.png'
                className='h-full w-full object-cover'
                alt='massArt'
              />
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="https://www.behance.net/gallery/226677045/massArt-Procect-UIUX-Design-Web-Development" target='_blank' className="no-underline text-inherit cursor-pointer text-color-change">
                massArt
              </a>
                </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                UI/UX / site
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        {/* fifth row */}
        {/* <div className='hidden md:block'></div>
        <div className='-mt-[55vh] md:mt-[5vh] '>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              Journey into the world of wild animals called Zvjerići
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div> */}
      </div>
    </section>
  )
}

export default NewProjects
