'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const MarziiFooter = () => {
    const sectionRef = useRef(null);
    const router = useRouter();
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting && entry.intersectionRatio === 1);
            },
            {
                threshold: 1.0,
            }
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

    useEffect(() => {
        const handleScroll = () => {
            if (isInView) {
                router.push('/project-insiderfeed');
            }
        };

        if (isInView) {
            window.addEventListener('scroll', handleScroll, { once: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInView, router]);

    return (
        <div
            ref={sectionRef}
            className="w-full h-screen bg-cover bg-center relative flex items-center justify-start"
            style={{ backgroundImage: `url('/images/project-details/hns-1.jpg')` }}
        >
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="relative z-10 px-5 md:px-10 lg:px-16 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto text-left">
                <p className="text-white text-xl font-semibold mb-2">
                    Next Project:
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                    InsiderFeed
                </h1>
            </div>
        </div>
    );
};

export default MarziiFooter;
