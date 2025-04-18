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

  function CTAArea() {
    const titleRef = useRef(null)
    const charRefs = useRef([])
    charRefs.current = []
  
    const addToCharRefs = (el) => {
      if (el && !charRefs.current.includes(el)) {
        charRefs.current.push(el)
      }
    }

    // Store the animation instance
    const animationRef = useRef(null)
  
    // Title animation
    useEffect(() => {
      if (!charRefs.current.length) return

      animationRef.current = gsap.fromTo(charRefs.current,
        { color: 'gray' },
        {
          color: darkBackground ? 'white' : 'black',
          stagger: {
            from: 'random',
            each: 0.05,
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top 50%",
            toggleActions: "play none none none",
          }
        }
      )

      return () => {
        animationRef.current?.kill()
      }
    }, [darkBackground])
  
    const titleLines = [
      "Up for an adventure?",
      "Let's kickstart your next project."
    ]
  
    return (
      <section className={`text-center my-[20vh]`}>
        <h2
          ref={titleRef}
          className={`text-3xl md:text-6xl font-bold mb-[5vh] max-w-4xl mx-auto leading-snug px-4`}
        >
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className='block'>
              {line.split('').map((char, charIndex) => (
                <span 
                  key={charIndex} 
                  ref={addToCharRefs}
                  className={darkBackground ? 'text-white' : 'text-black'}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          ))}
        </h2>
  
        <button className={`text-base font-semibold py-4 px-10 rounded-full transition-colors duration-300 ${darkBackground ? 'bg-white text-[#06171D]' : 'bg-yellow-300'}`}>
          Let's Talk
        </button>
      </section>
    )
  }

  useEffect(() => {
    const el = footerRef.current

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: '#06171D',
          color: '#ffffff',
          duration: 0.5,
        })
        setDarkBackground(true)
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: '',
          color: '',
          duration: 0.5,
        })
        setDarkBackground(false)
      }
    })
  }, [])

  return (
    <>
      <CTAArea />
      <section
        ref={footerRef}
        className='edn__f__container transition-all duration-500'
      >
        <div className='edn__f__wrapper'>
          <div>
            <h3 className='text-3xl font-black '>Ethical Den</h3>
          </div>
          <div className='edn__f__menu__parent'>
            <div>
              <h3 className='edn__f__title'>Follow Ethical Den</h3>
              <div className='flex gap-3 mt-4'>
                <span className='edn__f___socail___icons '>
                  <FaLinkedin />
                </span>
                <span className='edn__f___socail___icons'>
                  <FaFacebook />
                </span>
                <span className='edn__f___socail___icons'>
                  <FaYoutube />
                </span>
                <span className='edn__f___socail___icons'>
                  <FaInstagram />
                </span>
                <span className='edn__f___socail___icons'>
                  <FaDribbble />
                </span>
              </div>
            </div>

            <div>
              <h3 className='edn__f__title'>Work</h3>
              <h3 className='edn__f__title'>The Agency</h3>
              <h3 className='edn__f__title'>Services</h3>
              <h3 className='edn__f__title'>Stories</h3>
              <h3 className='edn__f__title'>Let's Talk</h3>
            </div>

            <div>
              <h3 className='edn__f__title'>hello@ethical.den.com</h3>
              <p className='edn__f___socail___icons inline-block'>
                <FaLocationDot />
              </p>
              <p className='text-lg font-bold mt-10'>+8801627505755</p>
              <p className='text-lg font-bold'>Rimska 31, 44000 Sisak Croati</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer