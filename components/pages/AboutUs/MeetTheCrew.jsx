'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MeetTheCrew = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const crewMembers = [
        { id: 1, name: 'John Doe', profession: 'Creatives', imageUrl: '/images/about-us/crew/Andrej1.jpg' },
        { id: 2, name: 'Jane Smith', profession: 'Creatives', imageUrl: '/images/about-us/crew/edin.jpg' },
        { id: 3, name: 'Mike Johnson', profession: 'Developers', imageUrl: '/images/about-us/crew/k1.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/Petra-1.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/seb2.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/Vlada-1.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/Andrej1.jpg' },
        { id: 1, name: 'John Doe', profession: 'Creatives', imageUrl: '/images/about-us/crew/Andrej1.jpg' },
        { id: 2, name: 'Jane Smith', profession: 'Creatives', imageUrl: '/images/about-us/crew/edin.jpg' },
        { id: 3, name: 'Mike Johnson', profession: 'Developers', imageUrl: '/images/about-us/crew/k1.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/Petra-1.jpg' },
        { id: 4, name: 'Sarah Williams', profession: 'Runners', imageUrl: '/images/about-us/crew/seb2.jpg' },
    ];

    const shouldShowMember = (member) => {
        return activeFilter === 'All' || member.profession === activeFilter;
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

    const title = 'Meet the crew';

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-7xl font-rota mb-4 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split('').map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            className={`inline-block ${
                                char === ' ' ? 'w-2 md:w-4 lg:w-5' : ''
                            }`}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <p className="base__para font-ethosnova ">The determination behind your next project</p>
            </div>

            <div className="flex justify-center mb-12">
                <div className="md:inline-flex overflow-hidden">
                    {['All', 'Creatives', 'Developers', 'Runners'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 font-rota text-3xl rounded-4xl transition-colors ${activeFilter === filter ? 'bg-[#9EFCF1] text-black' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4 xl:gap-8">
                {crewMembers.map((member) => {
                    const isActive = shouldShowMember(member);
                    
                    return (
                        <div
                            key={`${member.id}-${member.imageUrl}`}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-out ${
                                isActive ? 'grayscale-0 group' : 'grayscale pointer-events-none'
                            }`}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gray-200 rounded-b-lg transition-transform duration-300 ease-out group-hover:-translate-y-6"
                                    style={{
                                        backgroundImage: `url(${member.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            </div>
                            {isActive && (
                                <div className="absolute bottom-0 left-0 right-0  bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                    <div className="flex justify-between items-center h-full">
                                        <span className="font-medium text-black text-lg">{member.name}</span>
                                        <span className="text-gray-600 text-sm uppercase tracking-wider">{member.profession}</span>
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