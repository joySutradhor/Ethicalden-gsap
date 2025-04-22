'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './NewProjects.css'

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
        trigger: '.edn__p__wrapper',
        start: 'top 60%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });
  
    tl.to(bgOverlay, {
      opacity: 1,
      ease: 'none'
    }, 0).to('.edn__p__wrapper', {
      backgroundColor: '#06171D',
      ease: 'none'
    }, 0);
  
    // 🧼 Reset background to white and overlay opacity to 0 after section
    ScrollTrigger.create({
      trigger: '.edn__p__wrapper',
      start: 'bottom bottom',
      end: 'bottom+=1 bottom', 
      onEnterBack: () => {
        gsap.to(bgOverlay, { opacity: 1, backgroundColor: '#06171D' });
        gsap.to('.edn__p__wrapper', { backgroundColor: '#06171D' });
      },
      onLeave: () => {
        gsap.to(bgOverlay, { opacity: 0, backgroundColor: 'white' });
        gsap.to('.edn__p__wrapper', { backgroundColor: 'white' });
      }
    });
  
    // Animate media items
    const projectItems = document.querySelectorAll(
      '.edn__p__fr__img__parent, .edn__p__fr__video__parent, .edn__p__sr__img__parent > div, .edn__p__sr__video__height, .edn__p__tr__video__parent > div, .edn__p__tr__video__parent, .edn__fouth__row__img__topSpace > div, .edn__fourth__row__common__height'
    );
  
    gsap.set(projectItems, { perspective: 600 });
  
    projectItems.forEach(item => {
      const media = item.querySelector('img, video') || item;
  
      gsap.fromTo(
        media,
        {
          rotationX: 2.8,
          scaleX: 1,
          z: '0vh'
        },
        {
          rotationX: -1.5,
          scaleX: 1,
          z: '-2vh',
          scrollTrigger: {
            trigger: item,
            start: 'top+=150px bottom',
            end: 'bottom top',
            immediateRender: false,
            scrub: 0.1
          }
        }
      );
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      bgOverlay.remove();
    };
  }, []);
  

  return (
    <section className='edn__p__wrapper bg-white relative z-0'>
      <div className='edn__p__parent'>
        {/* first row start */}
        <div className=''>
          <h2 className='v1__title gradient font-rota '>
            Our latest <br /> projects
          </h2>
          <div className='edn__p__fr__img__parent'>
            <Image
              src='/images/lattest-projects/project-1.jpg'
              height={1000}
              width={1000}
              className='object-cover w-full h-full'
              alt='Project 1'
            />
            <h3 className='edn__p__title'>
              Blog image HNS: Creating the Worlds Most Recognizable Sports
              Identity
            </h3>
            <p className='edn__p__breadcumb'>
              Web site /Social media /Branding
            </p>
          </div>
        </div>

        <div className='edn__p__fr__video__parent'>
          <video
            src='https://mater.agency/wp-content/uploads/2024/02/vogue-1.mp4'
            muted
            autoPlay
            loop
            className='h-full w-full object-cover'
          ></video>
          <h3 className='edn__p__title'>Vogue Adria</h3>
          <p className='edn__p__breadcumb'>Web site</p>
        </div>

        {/* second row start */}
        <div className='edn__p__sr__img__parent'>
          <div>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/02/NetTV.jpg'
              width={1000}
              height={1000}
              className='object-cover h-full w-full'
              alt='NetTV'
            />
            <h3 className='edn__p__title'>
              Stream live TV plus thousands of shows with NetTVPlus
            </h3>
            <p className='edn__p__breadcumb'>site /Mobile app /Web shop</p>
          </div>
        </div>

        <div className=''>
          <div className='edn__p__sr__video__wrapper'>
            <div className='edn__p__sr__video__height'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/03/nordeus.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='edn__p__title'>
                Nordeus Unleashed: Designing a Vibrant Journey for Press Play
                2022
              </h3>
              <p className='edn__p__breadcumb'> Branding</p>
            </div>
            
            <div className='edn__p__sr__video__height'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/green_tree.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='edn__p__title'>Green Tree Villas Website</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        {/* third row start */}
        <div className='edn__p__tr__topSpace'>
          <div className='edn__p__tr__video__parent'>
            <div>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/led_elektronika.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='edn__p__title'> Honor 9 – The Light Catcher</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        <div className='mt-[25vh] md:mt-0'>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/honor9.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='edn__p__title'>Led Elektronika</h3>
            <p className='edn__p__breadcumb'>site /Branding</p>
          </div>
        </div>

        {/* fourth row start */}
        <div className='edn__fouth__row__img__topSpace'>
          <div>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/01/AZ-pension-fund.jpg'
              height={1000}
              width={1000}
              className='object-cover h-full w-full'
              alt='AZ Pension Fund'
            />
            <h3 className='edn__p__title'>
              Rethinking the AZ Retirement Fund Mobile App
            </h3>
            <p className='edn__p__breadcumb'>site /Mobile app /Web shop</p>
          </div>
        </div>
        <div className='edn__fouth__row__video__topSpace'>
          <div className='edn__fourth__row__video__parent'>
            <div className='edn__fourth__row__common__height'>
              <Image
                height={1000}
                width={1000}
                src='https://mater.agency/wp-content/uploads/2024/03/rba.jpg'
                className='h-full w-full object-cover'
                alt='RBA'
              />
              <h3 className='edn__p__title'>
                RBA: Evolution of digital banking, in black and yellow
              </h3>
              <p className='edn__p__breadcumb'> Branding</p>
            </div>
            <div className='edn__fourth__row__common__height'>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/telenor-2.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='edn__p__title'>Telenor Bank</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        {/* fifth row */}
        <div className='hidden md:block'></div>
        <div className='mt-[15vh] md:mt-0'>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='edn__p__title'>
              Journey into the world of wild animals called Zvjerići
            </h3>
            <p className='edn__p__breadcumb'>site /Branding</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProjects
