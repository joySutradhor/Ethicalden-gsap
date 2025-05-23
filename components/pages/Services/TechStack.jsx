'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const techs = [
        { id: 1, name: 'Adobe', profession: 'Creative', imageUrl: '/images/services/tech/service-item-acc.svg' },
        { id: 2, name: 'AWS', profession: 'Develop', imageUrl: '/images/services/tech/service-item-aws.svg' },
        { id: 3, name: 'Cloud Flare', profession: 'Deliver', imageUrl: '/images/services/tech/service-item-cloud-flare.svg' },
        { id: 4, name: 'Firebase', profession: 'Deliver', imageUrl: '/images/services/tech/service-item-firebase.svg' },
        { id: 5, name: 'Github', profession: 'Deliver', imageUrl: '/images/services/tech/service-item-github.svg' },
        { id: 5, name: 'React JS', profession: 'Develop', imageUrl: '/images/services/tech/react-icon_svg_.webp' },
        { id: 5, name: 'Next JS', profession: 'Develop', imageUrl: '/images/services/tech/next-js.png' },
        { id: 5, name: 'HTML', profession: 'Develop', imageUrl: '/images/services/tech/html.png' },
        { id: 5, name: 'CSS', profession: 'Develop', imageUrl: '/images/services/tech/CSS.png' },
        { id: 5, name: 'React Native', profession: 'Develop', imageUrl: '/images/services/tech/react-native-1.png' },
        { id: 5, name: 'Python', profession: 'Develop', imageUrl: '/images/services/tech/pythoned.png' },
        { id: 5, name: 'DJango', profession: 'Develop', imageUrl: '/images/services/tech/django.webp' },

    ];

    const shouldShowtech = (tech) => {
        return activeFilter === 'All' || tech.profession === activeFilter;
    };

    // GSAP title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(
            charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: {
                    from: 'random',
                    each: 0.05,
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 90%',
                    end: 'top 50%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const title = 'Our Tech Stack';

    return (
        <section className=" px-5 md:px-10 lg:px-15 xl:px-30 2xl:px-50 py-12 pt-[150px] md:pt-[200px] lg:pt-[230px] xl:pt-[250px] 2xl:pt-[270px]">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-4 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split('').map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            style={char !== " " ? { letterSpacing: "-0.12em" } : {}}
                            className={`inline-block ${char === ' ' ? 'w-2 md:w-4 lg:w-5' : ''
                                }`}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <p className="font-helvetica text-black text-xl md:text-2xl ">All the wizardry behind our work</p>
            </div>

            <div className="flex justify-start md:justify-center mb-12">
                <div className="flex flex-col justify-center w-full md:flex-row gap-4 font-helvetica font-bold">
                    {['All', 'Creative', 'Deliver', 'Develop'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 font-rota text-2xl md:text-3xl rounded-4xl transition-colors ${activeFilter === filter ? 'bg-[#9EFCF1] text-black' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {techs.map((tech) => {
                    const isActive = shouldShowtech(tech);

                    return (
                        <div
                            key={`${tech.id}-${tech.imageUrl}`}
                            className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale pointer-events-none'}`}
                        >
                            <div className="relative aspect-square w-full">
                                <div
                                    className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center p-8"
                                    style={{
                                        backgroundImage: `url(${tech.imageUrl})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0  p-4">
                                        <div className="flex flex-col items-center text-center">
                                            <span className="font-bold font-helvetica text-black text-lg whitespace-nowrap">{tech.name}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStack;