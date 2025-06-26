'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const MassArtArea3 = () => {
    const imageRef = useRef(null);
    const paragraphRefs = useRef([]);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        // Animate image
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        }

        // Animate paragraphs
        paragraphRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    return (
        <div className=' mb-10 px-5 md:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
            <div className=''>
                <div className='lg:mr-10 relative'>

                    {/* Spinner on top */}
            {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

                    <Image
                        ref={imageRef}
                        src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/massArt/ph-2.jpg?updatedAt=1750068991020"
                        alt="Croatian Football Team"
                        width={1270}
                        height={630}
                        placeholder='blur'
                        blurDataURL={blurPlaceholder}
                        onLoadingComplete={() => setIsImageLoaded(true)}
                        className="w-full shadow-md mb-6"
                        style={{ marginLeft: 'auto', marginRight: '0' }}
                        priority
                        loading="eager"
                    />
                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='lg:w-1/4'></div>

                    {/* Description */}
                    <div className='lg:w-3/4 mt-10'>
                        <p
                            ref={addToRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            But as all good websites eventually reach the end of their life cycle and need to be refreshed, such was the fate of the HNS website as well. As it became obvious that the website could not match the ambitions of the team and federation anymore, it was time for…
                        </p>

                        <h2 ref={addToRefs}
                            className='text-3xl font-extrabold mb-5 text-black'>
                            Chapter Two
                        </h2>

                        <p
                            ref={addToRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            Fast forward eight years from the launch of the first website and we sat down again with the Croatian Football Federation with a new, very simple goal in sight — to create HNS.Family, the best football team website in the world.
                        </p>

                        <p
                            ref={addToRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            Not just the best in visual terms and user experience, but also in the sheer amount of information it provides to its visitors. The plan was so outrageously ambitious, gigantic and overwhelming that it took more than a year to design and develop, but once it was done it was all worth the time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MassArtArea3;
