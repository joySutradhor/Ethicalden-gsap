'use client'
import React, { useEffect, useRef } from 'react'
import ClientsLogo from './ClientsLogo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ClientCollaboration() {
  const titleRef = useRef(null)
  const charRefs = useRef([])

  charRefs.current = []

  const addToCharRefs = (el) => {
    if (el && !charRefs.current.includes(el)) {
      charRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (!charRefs.current.length) return

    gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: 'black',
        stagger: {
          from: 'random',
          each: 0.03,
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  // Split sentences
  const titleLines = [
    "Relationships this intimate",
    "are illegal in some countries."
  ]

  return (
    <section className='mb-[20vh] mt-[5vh] md:mt-[10vh] lg:mt-[20vh]'>
      {/* title */}
      <h2
        ref={titleRef}
        className='text-center text-3xl lg:text-7xl font-rota font-bold px-[5vw] lg:px-0 max-w-5xl mx-auto mb-[10vh] '
      >
        {titleLines.map((line, lineIndex) => (
          <div key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => (
              <span key={charIndex} ref={addToCharRefs}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        ))}
      </h2>

      {/* clients logos */}
      <div>
        <ClientsLogo />
      </div>
    </section>
  )
}

export default ClientCollaboration
