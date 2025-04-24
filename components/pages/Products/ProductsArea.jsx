'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'


function ProductsArea() {

  const [buttonVisible, setButtonVisible] = useState(true)
  const productsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!productsRef.current) return
      
      // Get the bottom position of the ProductsArea component
      const productsBottom = productsRef.current.getBoundingClientRect().bottom
      // Get viewport height
      const viewportHeight = window.innerHeight
      
      // Hide button when ProductsArea bottom reaches top of viewport (footer starts appearing)
      setButtonVisible(productsBottom > viewportHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <>
      <section ref={productsRef} className='px-[5vw] md:px-[12vw] mt-[5vh]  py-[10vh] md:py-[10vh] lg:py-[20vh] text-white'>
        <div className='grid grid-cols-2 gap-[4vh] md:gap-x-[5vw] xl:gap-x-[7vw]'>
          {/* first row start */}
          <div className=''>
            <h2 className='v1__title text-[#9EFCF1] gradient md:text-4xl lg:text-6xl xl:text-7xl font-rota '>
              Latest work <br /> & crafts
            </h2>
            <div className='mt-[10vh] md:mt-[25vh] mb-[5vh] md:mb-0 md:w-[80%]'>
              <Image
                src='https://mater.agency/wp-content/uploads/2024/02/hns.jpg'
                height={1000}
                width={1000}
                className='object-cover w-full h-full'
                alt='Project 1'
              />
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                Blog image HNS
              </h3>
              <p className='text-base font-semibold text-white/70 font-ethosnova'>
                Web site /Social media /Branding
              </p>
            </div>
          </div>

          <div className='h-[30vh] md:h-[50vh] lg:h-[60h] xl:h-[70vh]'>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/vogue-1.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>Vogue Adria</h3>
            <p className='text-base font-semibold text-white/70 font-ethosnova'>Web site</p>
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
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                Stream live TV plus thousands of shows with NetTVPlus
              </h3>
              <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Mobile app /Web shop</p>
            </div>
          </div>

          <div className=''>
            <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[25vh] md:gap-y-0 -mt-[25vh] md:mt-0'>
              <div className='h-[30vh] md:h-[20vh] lg:h-[30vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/03/nordeus.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                  Nordeus Unleashed
                </h3>
                <p className='text-base font-semibold text-white/70 font-ethosnova'> Branding</p>
              </div>

              <div className='h-[30vh] md:h-[20vh] lg:h-[30vh] md:mt-0 -mt-[5vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/green_tree.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>Green Tree Villas Website</h3>
                <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Branding</p>
              </div>
            </div>
          </div>

          {/* third row start */}
          <div className='-mt-[8vh] md:mt-[30vh] lg:mt-[50vh] '>
            <div className='h-[40vh] md:w-[80%]'>
              <div>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/led_elektronika.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'> Honor 9 – The Light Catcher</h3>
                <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Branding</p>
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
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>Led Elektronika</h3>
              <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Branding</p>
            </div>
          </div>

          {/* fourth row start */}
          <div className='md:mt-[25vh] -mt-[20vh] lg:mt-[40vh] xl:mt-[50vh]'>
            <div>
              <Image
                src='https://mater.agency/wp-content/uploads/2024/01/AZ-pension-fund.jpg'
                height={1000}
                width={1000}
                className='object-cover h-full w-full'
                alt='AZ Pension Fund'
              />
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                Rethinking the AZ Retirement Fund Mobile App
              </h3>
              <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Mobile app /Web shop</p>
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
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                  RBA: Evolution
                </h3>
                <p className='text-base font-semibold text-white/70 font-ethosnova'> Branding</p>
              </div>
              <div className='h-[30vh] md:h-[20vh] lg:h-[30vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/telenor-2.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>Telenor Bank</h3>
                <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Branding</p>
              </div>
            </div>
          </div>

          {/* fifth row */}
          <div className='hidden md:block'></div>
          <div className='-mt-[55vh] md:mt-[5vh] '>
            <div>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-rota'>
                Journey into the world of wild animals called Zvjerići
              </h3>
              <p className='text-base font-semibold text-white/70 font-ethosnova'>site /Branding</p>
            </div>
          </div>
        </div>
      </section>


       {/* Fixed bottom button */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border-none px-8 py-6 rounded-full flex items-center gap-4 border shadow-lg transition-all duration-300 ${
        buttonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Services */}
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span>Services: All</span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-600" />

        {/* Industry */}
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span>Industry: All</span>
        </div>
      </div>

    </>
  )
}

export default ProductsArea

