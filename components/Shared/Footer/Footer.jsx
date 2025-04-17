
import React from 'react'
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube
} from 'react-icons/fa6'
import "./Footer.css"

function Footer () {
  return (
    <section className='edn__f__container'>
      <div className='edn__f__wrapper'>
        <div className=''>
          <h3 className='text-3xl font-black '>Ethical Den</h3>
        </div>
        <div className='edn__f__menu__parent '>
          <div>
            <h3 className='edn__f__title'>Follow Ethical Den</h3>

            <div className='flex gap-3 mt-4'>
              {' '}
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
            <p className='text-lg font-bold '>Rimska 31, 44000 Sisak Croati</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
