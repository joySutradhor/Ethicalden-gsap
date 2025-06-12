'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

const EmopractFooter = () => {
    const sectionRef = useRef(null);
    const hasNavigated = useRef(false);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    const handleNavigation = () => {
        if (hasNavigated.current) return;
        
        hasNavigated.current = true;
        gsap.to(sectionRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                router.push('/project-sandeep-autolines');
            }
        });
    };

    // More reliable visibility detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.8 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Handle manual scroll triggers
    const handleUserScroll = (e) => {
        if (hasNavigated.current || !isVisible) return;

        // Only proceed if this is a deliberate downward scroll
        if (e.deltaY > 0) {
            e.preventDefault();
            handleNavigation();
        }
    };

    // Handle scroll to bottom (only if user actively scrolls)
    const checkScrollPosition = () => {
        if (hasNavigated.current || !isVisible) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
        
        if (atBottom) {
            handleNavigation();
        }
    };

    useEffect(() => {
        // Reset navigation state when component mounts
        hasNavigated.current = false;

        // Use passive: true for better performance
        window.addEventListener('scroll', checkScrollPosition, { passive: true });
        window.addEventListener('wheel', handleUserScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('wheel', handleUserScroll);
        };
    }, [isVisible]); // Re-run effect when visibility changes

    return (
        <div
            ref={sectionRef}
            className="w-full h-screen bg-cover bg-center relative flex items-center justify-start transition-opacity duration-500"
            style={{ backgroundImage: `url('/images/project-details/hns-1.jpg')` }}
        >
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 px-5 md:px-10 lg:px-16 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto text-left">
                <p className="text-white text-xl font-semibold mb-2">Next Project:</p>
                <h1 className="text-white text-4xl md:text-6xl font-bold">Sandeep Autolines</h1>
                <p className="text-white mt-4">Scroll down to continue</p>
            </div>
        </div>
    );
};

export default EmopractFooter;