'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Trigger mobile screens
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const MeetTheCrew = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredMember, setHoveredMember] = useState(null);
    const isMobile = useIsMobile();

    const crewMembers = [
        { id: 1, name: 'Fardeen', profession: 'Founder & CEO', imageUrl: '/images/about-us/crew/Fardeen.png' },
        { id: 2, name: 'Arihant', profession: 'Co-Founder & CEO', imageUrl: '/images/about-us/crew/Arihant.png' },
        { id: 3, name: 'Nazmul', profession: 'Creative Director and Country Head', imageUrl: '/images/about-us/crew/Nazmul.png' },
        { id: 4, name: 'Ayushi', profession: 'Content Executive', imageUrl: '/images/about-us/crew/Ayushi.png' },
        { id: 5, name: 'Samrat', profession: 'Senior Software Developer', imageUrl: '/images/about-us/crew/Samrat.png' },
        { id: 6, name: 'Khokon', profession: 'Cyber Security Expert', imageUrl: '/images/about-us/crew/khokon.jpg' },
        { id: 7, name: 'Yathish', profession: 'Chief Data Scientist', imageUrl: '/images/about-us/crew/Yathish.jpg' },
        { id: 8, name: 'Shad', profession: 'Graphics Designer', imageUrl: '/images/about-us/crew/shad.png' },
        { id: 9, name: 'Alvira', profession: 'HR officer India', imageUrl: '/images/about-us/crew/Alvira.jpg' },
        { id: 10, name: 'Sagnik', profession: 'Business Development Expert', imageUrl: '/images/about-us/crew/Shagnik.jpg' },
        { id: 11, name: 'Tahamid', profession: 'Wordpress Developer', imageUrl: '/images/about-us/crew/Tahamid.jpg' },
        { id: 12, name: 'Rakib', profession: 'Junior Frontend Developer', imageUrl: '/images/about-us/crew/Rakib.jpg' },
        { id: 13, name: 'Jewel', profession: 'Frontend Developer', imageUrl: '/images/about-us/crew/Mafuzur.jpg' },
        { id: 14, name: 'Joy', profession: 'Frontend Developer', imageUrl: '/images/about-us/crew/joyy.png' },
        { id: 15, name: 'Nafijur', profession: 'junior Backend Developer', imageUrl: '/images/about-us/crew/Nafijur.jpg' },
        { id: 16, name: 'MD. Shakil', profession: 'Senior Backend Developer', imageUrl: '/images/about-us/crew/shakil.jpg' },
        { id: 27, name: 'Fatema', profession: 'Mobile App Developer', imageUrl: '/images/about-us/crew/Fatema.png' },
    ];

    const shouldShowMember = (member) => {
        return activeFilter === 'All' || member.profession === activeFilter;
    };

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

    const title = 'Meet the crew';

    return (
        <section className="px-5 md:px-10 lg:px-10 xl:px-20 2xl:px-40  pt-0 md:pt-15 lg:pt-18 pb-12">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-4 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split('').map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            className={`inline-block ${char === ' ' ? 'w-2 md:w-3 ' : ''}`}
                            style={char !== " " ? { letterSpacing: "-0.13em" } : {}}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <p className="text-xl lg:text-2xl text-black font-helvetica ">
                    The determination behind your next project
                </p>
            </div>

            {/* <div className="md:flex text-start  md:justify-center mb-12">
                <div className="flex flex-col md:flex-row gap-4 font-helvetica font-bold">
                    {['All', 'Creatives', 'Developers', 'Interns'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                setHoveredMember(null);
                            }}
                            className={`px-6 py-2 font-rota text-2xl md:text-3xl rounded-4xl transition-colors ${activeFilter === filter
                                ? 'bg-[#9EFCF1] text-black'
                                : 'bg-white text-black hover:bg-gray-100'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div> */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4 xl:gap-8">
                {crewMembers.map((member, index) => {
                    const isActive = shouldShowMember(member);
                    const isRevealed = hoveredMember === index;

                    return (
                        <div
                            key={`${member.id}-${member.imageUrl}-${index}`}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-out ${isActive ? 'grayscale-0 group' : 'grayscale pointer-events-none'
                                }`}
                            onClick={() => isMobile && setHoveredMember(index)}
                            onMouseEnter={() => !isMobile && setHoveredMember(index)}
                            onMouseLeave={() => !isMobile && setHoveredMember(null)}
                        >
                            <div className="relative h-60 md:h-90 lg:h-80 2xl:h-100 overflow-hidden z-10">
                                <div
                                    className="absolute inset-0 bg-gray-200 rounded-b-lg transition-transform duration-900 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:-translate-y-7"
                                    style={{
                                        backgroundImage: `url(${member.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top center',
                                        transform: isRevealed && isMobile ? 'translateY(-2.5rem)' : 'translateY(0)',
                                    }}
                                />
                            </div>

                            {isActive && (
                                <div
                                    className={`absolute bottom-0 left-0 right-0 bg-white opacity-0 group-hover:opacity-100 transition-all  duration-900 z-0 ease-out ${isRevealed && isMobile ? 'opacity-100' : ''
                                        }`}
                                >
                                    <div className=" xl:flex xl:justify-between xl:items-center h-full px-3">
                                        <div className="font-medium text-black text-sm md:text-lg font-helvetica">{member.name}</div>
                                        <div className="text-gray-700 text-[10px] md:text-sm uppercase tracking-wider">
                                            {member.profession}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MeetTheCrew;
