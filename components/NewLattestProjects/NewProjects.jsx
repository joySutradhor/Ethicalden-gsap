import Image from 'next/image'
import React from 'react'
import './NewProjects.css'
function NewProjects () {
  return (
    <section className='edn__p__wrapper'>
      <div className='edn__p__parent'>

        {/* first row start */}
        <div className=''>
          <h2 className='text-5xl font-bold text-white '>
            Our latest <br /> projects
          </h2>
          <div className='edn__p__fr__img__parent'>
            <Image
              src='/images/lattest-projects/project-1.jpg'
              height={1000}
              width={1000}
              className='object-cover w-full h-full'
            ></Image>
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
            />
            <h3 className='edn__p__title'>
              Blog image Stream live TV plus thousands of shows with NetTVPlus
              Web
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
              <h3 className='edn__p__title'>Green Tree Villas Web</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        {/* second row end */}


        {/* third row start end */}
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
              <h3 className='edn__p__title'>Green Tree one dfgdf Villas Web</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/honor9.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='edn__p__title'>Green Tree Villas Web</h3>
            <p className='edn__p__breadcumb'>site /Branding</p>
          </div>
        </div>
        {/* third row start end */}

        {/* fourth raw start */}
        <div className='edn__fouth__row__img__topSpace'>
          <div>
            <Image
              src='https://mater.agency/wp-content/uploads/2024/01/AZ-pension-fund.jpg'
              height={1000}
              width={1000}
              className='object-cover h-full w-full'
            />
            <h3 className='edn__p__title'>
              Blog image Stream live TV plus thousands of shows with NetTVPlus
              Web
            </h3>
            <p className='edn__p__breadcumb'>site /Mobile app /Web shop</p>
          </div>
        </div>
        <div className='edn__fouth__row__video__topSpace'>
          <div className='edn__fourth__row__video__parent  '>
            <div className=' edn__fourth__row__common__height'>
              <Image
                height={1000}
                width={1000}
                src='https://mater.agency/wp-content/uploads/2024/03/rba.jpg'
                className='h-full w-full object-cover'
              ></Image>
              <h3 className='edn__p__title'>
                Nordeus Unleashed: Designing a Vibrant Journey for Press Play
                2022
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
              <h3 className='edn__p__title'>Green Tree Villas Web</h3>
              <p className='edn__p__breadcumb'>site /Branding</p>
            </div>
          </div>
        </div>

        {/* fifth line  */}
        <div></div>
        <div>
          <div>
            <video
              src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='edn__p__title'>Green Tree Villas Web</h3>
            <p className='edn__p__breadcumb'>site /Branding</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProjects
