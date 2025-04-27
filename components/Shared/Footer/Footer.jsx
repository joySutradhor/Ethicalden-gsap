'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube
} from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./Footer.css"
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef(null)
  const [darkBackground, setDarkBackground] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Wait for layout paint to complete
  useEffect(() => {
    let rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsReady(true)
        ScrollTrigger.refresh()
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      ScrollTrigger.getAll().forEach(instance => instance.kill())
    }
  }, [])

  function CTAArea({ darkMode }) {
    const titleRef = useRef(null)
    const charRefs = useRef([])
    const animationRef = useRef(null)

    const addToCharRefs = (el) => {
      if (el && !charRefs.current.includes(el)) {
        charRefs.current.push(el)
      }
    }

    useEffect(() => {
      if (!isReady || !titleRef.current || charRefs.current.length === 0) return

      animationRef.current?.kill()

      gsap.set(charRefs.current, { color: 'gray' })

      animationRef.current = gsap.to(charRefs.current, {
        color: darkMode ? 'white' : 'black',
        stagger: {
          from: 'random',
          each: 0.05,
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
          markers: false,
          invalidateOnRefresh: true
        }
      })

      return () => {
        animationRef.current?.kill()
      }
    }, [isReady, darkMode])


    // Button animation setup
    const buttonRef = useRef(null);
    const buttonTextRef = useRef(null);
    const buttonBgRef = useRef(null);
    const buttonStaticTextRef = useRef(null);
    const buttonScrollingTextRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const textWrapper = buttonTextRef.current;
        const bg = buttonBgRef.current;
        const staticText = buttonStaticTextRef.current;
        const scrollingText = buttonScrollingTextRef.current;

        // Initial setup
        gsap.set(button, { opacity: 1, y: 0 });
        gsap.set(bg, {
            scaleX: 0,
            transformOrigin: "center center",
            backgroundColor: "#4DEFA7"
        });
        gsap.set(scrollingText, { opacity: 0, x: 0 });
        gsap.set(staticText, { opacity: 1 });

        const hoverTL = gsap.timeline({ paused: true });

        hoverTL
            .to(bg, {
                scaleX: 1,
                duration: 0.5,
                ease: "power2.out"
            })
            .to(staticText, {
                opacity: 0,
                duration: 0.2
            }, "-=0.2")
            .to(scrollingText, {
                opacity: 1,
                duration: 0.2
            })
            .to(textWrapper, {
                color: "yellow",
                duration: 0.3
            }, "-=0.3");

        let scrollTween;

        const handleMouseEnter = () => {
            hoverTL.play().then(() => {
                // Start scrolling animation only after the hover animation completes
                if (!scrollTween) {
                    const contentWidth = scrollingText.scrollWidth;
                    const buttonWidth = button.offsetWidth;
                    const duration = contentWidth / 50; // Adjust speed here (lower number = faster)

                    scrollTween = gsap.to(scrollingText, {
                        x: `-=${contentWidth - buttonWidth}`,
                        duration: duration,
                        ease: "linear",
                        repeat: -1
                    });
                } else {
                    scrollTween.play();
                }
            });
        };

        const handleMouseLeave = () => {
            hoverTL.reverse();
            if (scrollTween) {
                scrollTween.pause();
                // Reset position when mouse leaves
                gsap.set(scrollingText, { x: 0 });
            }
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        gsap.from(button, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
            immediateRender: false,
            scrollTrigger: {
                trigger: button,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
        };
    }, []);


    const titleLines = [
      "Up for an adventure?",
      "Let's kickstart your next project."
    ]

    // Clear charRefs before render
    charRefs.current = []

    return (
      <section className="text-center mb-16 mt-[5vh] md:mt-[10vh] lg:mt-[20vh]">
        <h2
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-helvetica font-bold mb-[5vh]  max-w-4xl mx-auto leading-[1] px-4"
        >
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className="block">
              {line.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  ref={addToCharRefs}
                  style={{ color: 'gray' }}
                  className={darkMode ? 'text-white' : 'text-black'}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          ))}
        </h2>

        {/* button */}
        <div className='mt-10 flex justify-center'>
    <div className="relative mt-8 md:mt-3 inline-block">
        <Link
            ref={buttonRef}
            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-black sm:text-lg bg-[#09E5E5] overflow-hidden inline-flex items-center justify-center group"
            href={"#"}
            style={{ opacity: 1 }}
        >
            {/* Background element */}
            <span 
                ref={buttonBgRef} 
                className="absolute inset-0 z-0 bg-black" 
                style={{ transform: 'scaleX(0)', transformOrigin: 'center center' }}
            />
            
            {/* Text container */}
            <span
                ref={buttonTextRef}
                className="relative z-10 font-medium overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                style={{ color: 'black' }} // Force text color
            >
                <span 
                    ref={buttonStaticTextRef} 
                    className="static-text"
                    style={{ opacity: 1 }}
                >
                    Let's Talk
                </span>
                <span
                    ref={buttonScrollingTextRef}
                    className="scrolling-text absolute left-0 text-black"
                    style={{ opacity: 0 }}
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="inline-block mr-8">
                            Let's Talk
                        </span>
                    ))}
                </span>
            </span>
        </Link>
    </div>
</div>
      </section>
    )
  }

  // Background color scroll trigger
  useEffect(() => {
    if (!isReady || !footerRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top 90%',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: '#06171D',
          color: '#ffffff',
          duration: 0.5
        })
        setDarkBackground(true)
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: '',
          color: '',
          duration: 0.5
        })
        setDarkBackground(false)
      },
      markers: false
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [isReady])

  // Extra refresh after ready
  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [isReady])

  if (!isReady) return null

  return (
    <>
      <CTAArea darkMode={darkBackground} />
      <section
        ref={footerRef}
        className="edn__f__container transition-all duration-500"
      >
        <div className="edn__f__wrapper">
          <div>
            <h3 className="text-3xl font-black font-helvetica">Ethical Den</h3>
          </div>
          <div className="edn__f__menu__parent">
            <div>
              <h3 className="edn__f__title font-helvetica">Follow Ethical Den</h3>
              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="edn__f___socail___icons">
                  <FaLinkedin />
                </span>
                <span className="edn__f___socail___icons">
                  <FaFacebook />
                </span>
                <span className="edn__f___socail___icons">
                  <FaYoutube />
                </span>
                <span className="edn__f___socail___icons">
                  <FaInstagram />
                </span>
              </div>
            </div>

            <div>
              <h3 className="edn__f__title font-helvetica">Work</h3>
              <h3 className="edn__f__title font-helvetica">The Agency</h3>
              <h3 className="edn__f__title font-helvetica">Services</h3>
              <h3 className="edn__f__title font-helvetica">Stories</h3>
              <h3 className="edn__f__title font-helvetica">Let's Talk</h3>
            </div>

            <div>
              <h3 className="edn__f__title font-helvetica">hello@ethical.den.com</h3>
              <p className="edn__f___socail___icons inline-block">
                <FaLocationDot />
              </p>
              <p className="text-lg font-bold mt-5 lg:mt-10 font-helvetica">4/4E, Club Town Complex, Kolkata , Mahakavi Kuvempu Road, Rajajinar,  Bangalore, India .</p>
              <p className="text-lg font-bold mt-1 lg:mt-1 font-helvetica">PHone - 91 9547578920</p>
              <p className="text-lg font-bold mt-5 lg:mt-10 font-helvetica">bd - 24/A, Road-06, Nabinagar Housing, Mohammadpur, Dhaka.</p>
              <p className="text-lg font-bold mt-1 lg:mt-1 font-helvetica">phone- 880 17941-81603</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
