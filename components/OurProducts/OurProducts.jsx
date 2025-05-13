'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const OurProducts = () => {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [screenSize, setScreenSize] = useState('large')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width <= 575) {
        setScreenSize('small')
      } else if (width > 575 && width <= 1024) {
        setScreenSize('medium')
      } else {
        setScreenSize('large')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (screenSize !== 'large') return

    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current
    const scrollWidth = scrollContainer.scrollWidth
    const viewportWidth = section.offsetWidth
    const totalScroll = scrollWidth - viewportWidth

    const ctx = gsap.context(() => {
      // Calculate the distance to scroll based on container width
      const scrollDistance = scrollWidth - viewportWidth

      // Create a smoother animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance + viewportWidth}`,
          pin: true,
          scrub: 0.01,
          markers: true,
          anticipatePin: 1,
          ease: 'sine.inOut'
        }
      })

      tl.to(scrollContainer, {
        x: -scrollDistance,
        ease: 'none'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [screenSize])

  // Button animation setup
  const buttonRef = useRef(null)
  const buttonTextRef = useRef(null)
  const buttonBgRef = useRef(null)
  const buttonStaticTextRef = useRef(null)
  const buttonScrollingTextRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const textWrapper = buttonTextRef.current
    const bg = buttonBgRef.current
    const staticText = buttonStaticTextRef.current
    const scrollingText = buttonScrollingTextRef.current

    // Initial setup
    gsap.set(button, { opacity: 1, y: 0 })
    gsap.set(bg, {
      scaleX: 0,
      transformOrigin: 'center center',
      backgroundColor: '#09e5e5'
    })
    gsap.set(scrollingText, { opacity: 0, x: 0 })
    gsap.set(staticText, { opacity: 1 })

    const hoverTL = gsap.timeline({ paused: true })

    hoverTL
      .to(bg, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to(
        staticText,
        {
          opacity: 0,
          duration: 0.2
        },
        '-=0.2'
      )
      .to(scrollingText, {
        opacity: 1,
        duration: 0.2
      })
      .to(
        textWrapper,
        {
          color: 'black',
          duration: 0.3
        },
        '-=0.3'
      )

    let scrollTween

    const handleMouseEnter = () => {
      hoverTL.play().then(() => {
        // Start scrolling animation only after the hover animation completes
        if (!scrollTween) {
          const contentWidth = scrollingText.scrollWidth
          const buttonWidth = button.offsetWidth
          const duration = contentWidth / 50

          scrollTween = gsap.to(scrollingText, {
            x: `-=${contentWidth - buttonWidth}`,
            duration: duration,
            ease: 'linear',
            repeat: -1
          })
        } else {
          scrollTween.play()
        }
      })
    }

    const handleMouseLeave = () => {
      hoverTL.reverse()
      if (scrollTween) {
        scrollTween.pause()
        // Reset position when mouse leaves
        gsap.set(scrollingText, { x: 0 })
      }
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    gsap.from(button, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'back.out(1.7)',
      immediateRender: false,
      scrollTrigger: {
        trigger: button,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
      hoverTL.kill()
      if (scrollTween) scrollTween.kill()
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Branding',
      tags: ['UI/UX Design', 'Baranding'],
      image:
        'https://ik.imagekit.io/ethicalden/updated%20picture/IMG_0091.jpg?updatedAt=1747076555868',
      isNew: true
    },
    {
      id: 2,
      title: 'Digital Marketing',
      tags: ['UI/UX Design', 'E-Commerce'],
      image:
        'https://ik.imagekit.io/ethicalden/updated%20picture/IMG_0089.jpg?updatedAt=1747076555807',
      isNew: true
    },
    {
      id: 3,
      title: 'SEO',
      tags: ['UI/UX Design', 'Property Portal'],
      image:
        'https://ik.imagekit.io/ethicalden/service%20picture/DSC01610.JPG?updatedAt=1747076168717',
      isNew: true
    },
    {
      id: 4,
      title: 'UI/UX Design',
      tags: ['UI/UX Design', 'Development'],
      image:
        'https://ik.imagekit.io/ethicalden/updated%20picture/IMG_0091.jpg?updatedAt=1747076555868',
      isNew: true
    },
    {
      id: 5,
      title: 'Web Development',
      tags: ['UI/UX Design', 'E-commerce'],
      image:
        'https://ik.imagekit.io/ethicalden/updated%20picture/IMG_0092.jpg?updatedAt=1747076555659',
      isNew: true
    }
  ]

  return (
    <section
      ref={sectionRef}
      className='relative w-full overflow-hidden pt-[100px] md:pt-[120px] lg:pt-[130px] 2xl:pt-[160px] px-5 md:px-10 xl:mb-20'
    >
      {/* For small and medium screens - static layout */}
      {(screenSize === 'small' || screenSize === 'medium') && (
        <div className='max-w-7xl mx-auto'>
          <div className='mb-12'>
            <h1
              className='text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-extrabold leading-[1.06] mb-4'
              style={{ letterSpacing: '-0.01em' }}
            >
              What We Do
            </h1>
            <p className='text-3xl font-light my-3'>(and Do Damn Well)</p>
            <p className='text-gray-600 mb-5'>
              From bold brands to smart stacks, we craft everything your startup
              needs to launch, grow, and stand out. Whether it's design, code,
              motion, or marketing, we turn ideas into impact with clarity and
              edge.
            </p>
            <Link
              ref={buttonRef}
              className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
              href={'/contact'}
              style={{ opacity: 1 }}
            >
              <span ref={buttonBgRef} className='absolute inset-0 z-0' />
              <span
                ref={buttonTextRef}
                className='relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
              >
                <span ref={buttonStaticTextRef} className='static-text'>
                  See More
                </span>
                <span
                  ref={buttonScrollingTextRef}
                  className='scrolling-text absolute left-0'
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className='inline-block mr-8 font-helvetica'>
                      See More
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          </div>

          <div
            className={`grid ${
              screenSize === 'medium' ? 'grid-cols-2' : 'grid-cols-1'
            } gap-6`}
          >
            {projects.map(project => (
              <div
                key={project.id}
                className='relative bg-black rounded-3xl overflow-hidden 
                                    w-full h-[300px] md:h-[350px]'
              >
                {/* {project.isNew && (
                                    <span className="absolute top-4 right-4 bg-[#a8ff57] text-black px-4 py-1 rounded-full text-sm font-medium z-20">
                                        New
                                    </span>
                                )} */}
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className='absolute inset-0 w-full h-full object-cover opacity-80 z-10'
                />
                <div className='relative z-20 w-full h-full flex flex-col justify-end p-6'>
                  <h3 className='text-white text-xl md:text-2xl font-bold mb-2 md:mb-4'>
                    {project.title}
                  </h3>
                  {/* <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="bg-black/60 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-center justify-center py-6 md:pt-20 lg:pt-20 xl:pt-0 lg:py-10 mb-6'>
            <h2 className='text-3xl md:text-4xl mb-6'>View More</h2>
            <Link
              ref={buttonRef}
              className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
              href={'/contact'}
              style={{ opacity: 1 }}
            >
              <span ref={buttonBgRef} className='absolute inset-0 z-0' />
              <span
                ref={buttonTextRef}
                className='relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
              >
                <span ref={buttonStaticTextRef} className='static-text'>
                  See More
                </span>
                <span
                  ref={buttonScrollingTextRef}
                  className='scrolling-text absolute left-0'
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className='inline-block mr-8 font-helvetica'>
                      See More
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* For large screens - horizontal scroll layout */}
      {screenSize === 'large' && (
        <div
          ref={scrollContainerRef}
          className='flex  gap-10 px-6 md:px-16 py-12 w-max'
        >
          {/* Left Text Section */}
          <div className='shrink-0 w-[400px] flex flex-col justify-between h-[450px] sticky left-0 top-0'>
            <div>
              <h1
                className='text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-7xl font-urbanist font-extrabold leading-[1.06] mb-4'
                style={{ letterSpacing: '-0.01em' }}
              >
                What We Do{' '}
              </h1>
              <p className='text-3xl font-light my-5'>(and Do Damn Well)</p>
              <p className='text-gray-600 mb-6'>
                From bold brands to smart stacks, we craft everything your
                startup needs to launch, grow, and stand out. Whether it's
                design, code, motion, or marketing, we turn ideas into impact
                with clarity and edge.
              </p>
            </div>
            <div className=''>
              <Link
                ref={buttonRef}
                className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
                href={'/services'}
                style={{ opacity: 1 }}
              >
                <span ref={buttonBgRef} className='absolute inset-0 z-0' />
                <span
                  ref={buttonTextRef}
                  className='relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
                >
                  <span ref={buttonStaticTextRef} className='static-text'>
                    See More
                  </span>
                  <span
                    ref={buttonScrollingTextRef}
                    className='scrolling-text absolute left-0'
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className='inline-block mr-8 font-helvetica'
                      >
                        See More
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Cards */}
          <div className='flex gap-10 px-4'>
            {projects.map(project => (
              <div
                key={project.id}
                className='relative bg-black rounded-3xl overflow-hidden 
                                    w-[700px] h-[450px] flex items-end justify-start p-6'
              >
                {/* {project.isNew && (
                                    <span className="absolute top-4 right-4 bg-[#a8ff57] text-black px-4 py-1 rounded-full text-sm font-medium z-20">
                                        New
                                    </span>
                                )} */}
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className='absolute inset-0 w-full h-full object-cover opacity-80 z-10'
                />
                <div className='relative z-20 w-full'>
                  <h3 className='text-white text-2xl font-bold mb-4'>
                    {project.title}
                  </h3>
                  {/* <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="bg-black/60 text-white px-4 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div> */}
                </div>
              </div>
            ))}

            {/* View More */}
            <div className='flex flex-col items-center justify-center p-6 min-w-[300px]'>
              <h2 className='text-5xl mb-6'>View More</h2>
              <div className=''>
                <Link
                  ref={buttonRef}
                  className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
                  href={'/services'}
                  style={{ opacity: 1 }}
                >
                  <span ref={buttonBgRef} className='absolute inset-0 z-0' />
                  <span
                    ref={buttonTextRef}
                    className='relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
                  >
                    <span ref={buttonStaticTextRef} className='static-text'>
                      See More
                    </span>
                    <span
                      ref={buttonScrollingTextRef}
                      className='scrolling-text absolute left-0'
                    >
                      {Array.from({ length: 20 }).map((_, i) => (
                        <span
                          key={i}
                          className='inline-block mr-8 font-helvetica'
                        >
                          See More
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default OurProducts
