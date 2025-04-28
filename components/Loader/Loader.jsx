'use client'

import gsap from 'gsap'
import React, { useEffect, useMemo } from 'react'

const Loader = ({ className = '' }) => {
  // Get current day in full format
  const currentDay = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' })
  }, [])

  // Words to display in the loader
  const words = useMemo(() => {
    return [`${currentDay}.`, 'The', 'speed', 'bump', 'of', 'the', 'week']
  }, [currentDay])

  // GSAP animation for character reveal
  useEffect(() => {
    const animation = gsap.fromTo(
      '.char',
      { color: '#808080' },
      {
        color: 'black',
        delay: 0,
        stagger: {
          from: 'start',
          amount: 2 
        },
        ease: 'power2.out'
      }
    )
  
    return () => {
      animation.kill()
    }
  }, [])
  

  return (
    <section className='h-[100vh] w-full bg-[#EBECE7] fixed top-0 flex justify-center items-center px-10 md:px-12 lg:px-16 xl:px-20 z-50'>
      <div
        className={`flex flex-wrap gap-2 md:gap-3 text-gray-400  text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-helvetica font-extrabold py-8 md:py-30 ${className}`}
      >
        {words.map((word, index) => (
          <div className='word flex' key={`word-${index}`}>
            {word.split('').map((char, i) => (
              <span className='char' key={`char-${index}-${i}`}>
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Loader
