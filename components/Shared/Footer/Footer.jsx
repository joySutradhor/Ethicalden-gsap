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

    const titleLines = [
      "Up for an adventure?",
      "Let's kickstart your next project."
    ]

    // Clear charRefs before render
    charRefs.current = []

    return (
      <section className="text-center my-[20vh]">
        <h2
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-[5vh] max-w-4xl mx-auto leading-snug px-4"
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

        <button className={`text-base font-semibold py-4 px-10 rounded-full transition-colors duration-300 ${darkMode ? 'bg-white text-[#06171D]' : 'bg-yellow-300'}`}>
          Let's Talk
        </button>
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
            <h3 className="text-3xl font-black">Ethical Den</h3>
          </div>
          <div className="edn__f__menu__parent">
            <div>
              <h3 className="edn__f__title">Follow Ethical Den</h3>
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
              <h3 className="edn__f__title">Work</h3>
              <h3 className="edn__f__title">The Agency</h3>
              <h3 className="edn__f__title">Services</h3>
              <h3 className="edn__f__title">Stories</h3>
              <h3 className="edn__f__title">Let's Talk</h3>
            </div>

            <div>
              <h3 className="edn__f__title">hello@ethical.den.com</h3>
              <p className="edn__f___socail___icons inline-block">
                <FaLocationDot />
              </p>
              <p className="text-lg font-bold mt-5 lg:mt-10">+8801627505755</p>
              <p className="text-lg font-bold">Rimska 31, 44000 Sisak Croati</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
