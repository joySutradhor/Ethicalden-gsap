'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';

const ContactForm = () => {
    // Refs for each input field
    const nameRef = useRef(null);
    const companyRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // Handle focus event
    const handleFocus = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder) {
            gsap.to(placeholder, {
                y: -15,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    // Handle blur event
    const handleBlur = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder && !e.target.value) {
            gsap.to(placeholder, {
                y: 0,
                fontSize: '20px',
                color: 'rgb(209 213 219)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    return (
        <div className="mt-24 px-5 md:px-10 lg:px-10 xl:max-w-screen-2xl xl:mx-auto p-6 bg-white rounded-lg">
            <div className='mb-6 lg:flex gap-20'>
                <div className="flex-1/3">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-helvetica leading-[1]">Start with some basic info.</h2>
                    <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica">
                        The name and e-mail address are mandatory, the rest would be nice but we can live without it.
                    </p>
                </div>

                <div className="space-y-4 flex-2/3 relative">
                    {/* Name Field */}
                    <div className="relative">
                        <label 
                            htmlFor="name" 
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                        <label 
                            htmlFor="company" 
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your company's name
                        </label>
                        <input
                            ref={companyRef}
                            type="text"
                            id="company"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label 
                            htmlFor="email" 
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your e-mail address
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <label 
                            htmlFor="phone" 
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Phone number
                        </label>
                        <input
                            ref={phoneRef}
                            type="tel"
                            id="phone"
                            className="mt-1 block w-full p-6 pt-8  bg-cyan-900 text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;