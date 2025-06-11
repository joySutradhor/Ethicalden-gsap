'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const techs = [
        { id: 1, name: 'Adobe', profession: 'Creative', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/service-item-acc.svg?updatedAt=1749639120923' },
        { id: 2, name: 'AWS', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/service-item-aws.svg?updatedAt=1749639136612' },
        { id: 3, name: 'Cloud Flare', profession: 'Deliver', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/service-item-cloud-flare.svg?updatedAt=1749639145548' },
        { id: 4, name: 'Firebase', profession: 'Deliver', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/service-item-firebase.svg?updatedAt=1749639161963' },
        { id: 5, name: 'Github', profession: 'Deliver', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/service-item-github.svg?updatedAt=1749639172141' },
        { id: 5, name: 'React JS', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/react-icon_svg_.webp?updatedAt=1749639180468' },
        { id: 5, name: 'Next JS', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/next-js.png?updatedAt=1749639195340' },
        { id: 5, name: 'HTML', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/html.png?updatedAt=1749639200299' },
        { id: 5, name: 'CSS', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/CSS.png?updatedAt=1749639207046' },
        { id: 5, name: 'React Native', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/react-native-1.png?updatedAt=1749639219788' },
        { id: 5, name: 'Python', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/pythoned.png?updatedAt=1749639226217' },
        { id: 5, name: 'DJango', profession: 'Develop', imageUrl: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/service%20page/django.webp?updatedAt=1749639231709' },

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
                    className="text-[32px] sm:text-[36px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-4 flex flex-wrap justify-center gap-x-2 gap-y-3"
                >
                    {title.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="whitespace-nowrap flex mr-1 md:mr-3 lg:mr-4 xl:mr-5">
                            {word.split('').map((char, charIndex) => (
                                <span
                                    key={charIndex}
                                    ref={(el) => (charRefs.current[wordIndex * 100 + charIndex] = el)}
                                    style={{ letterSpacing: '-0.05em' }}
                                    className="inline-block"
                                >
                                    {char}
                                </span>
                            ))}
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
                            <div
                                key={`${tech.id}-${tech.imageUrl}`}
                                className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale pointer-events-none'}`}
                            >
                                <div className="relative aspect-square w-full flex items-center justify-center bg-gray-100 rounded-xl p-8">
                                    <Image
                                        placeholder='blur'
                                        blurDataURL='https://user-images.githubusercontent.com/160484/173871463-97e30942-dafe-4b91-b158-1ecf3300c540.png'
                                        src={tech.imageUrl}
                                        alt={tech.name}
                                        loading='lazy'
                                        width={100}
                                        height={100}
                                        className="h-[80%] w-[80%] object-contain md:h-[85%] md:w-[85%] 2xl:h-[95%] 2xl:w-[95%]"
                                    />
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <div className="flex flex-col items-center text-center">
                                                <span className="font-bold font-helvetica text-black text-lg whitespace-nowrap">{tech.name}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStack;