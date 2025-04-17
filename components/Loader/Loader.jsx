'use client';

import gsap from 'gsap';
import React, { useEffect, useMemo } from 'react';

const Loader = ({ className = '' }) => {
  // Get current day in full format 
  const currentDay = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  }, []);

  // Words to display in the loader
  const words = useMemo(() => {
    return [`${currentDay}.`, 'The', 'speed', 'bump', 'of', 'the', 'week'];
  }, [currentDay]);

  // GSAP animation for character reveal
  useEffect(() => {
    const animation = gsap.to('.char', {
      color: 'black',
      delay: 3,
      stagger: {
        from: 'start',
        amount: 1,
      },
      ease: 'power2.out',
    });

    return () => {
      animation.kill(); 
    };
  }, []);

  return (
    <div
      className={`flex flex-wrap gap-2 md:gap-3 text-gray-500 dark:text-gray-400 text-3xl md:text-4xl lg:text-5xl font-bold py-8 md:py-10 ${className}`}
    >
      {words.map((word, index) => (
        <div className="word flex" key={`word-${index}`}>
          {word.split('').map((char, i) => (
            <span className="char" key={`char-${index}-${i}`}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Loader;