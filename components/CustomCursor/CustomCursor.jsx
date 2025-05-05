'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isButtonHover, setIsButtonHover] = useState(false);
  const observerRef = useRef(null);

  const handleMouseEnter = () => setIsButtonHover(true);
  const handleMouseLeave = () => setIsButtonHover(false);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    const updateMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      gsap.to(dot, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const follow = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      gsap.set(circle, {
        x: pos.current.x,
        y: pos.current.y,
      });

      requestAnimationFrame(follow);
    };

    document.addEventListener('mousemove', updateMouse);

    // Function to add event listeners to all interactive elements
    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup
    addEventListeners();

    // Set up MutationObserver to watch for DOM changes
    observerRef.current = new MutationObserver((mutations) => {
      let needsUpdate = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          needsUpdate = true;
        }
      });
      if (needsUpdate) {
        addEventListeners();
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    follow();

    return () => {
      document.removeEventListener('mousemove', updateMouse);
      
      // Clean up event listeners
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      // Disconnect the observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Circle outline */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 w-16 h-16 border border-[#111] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 999999 }}
      ></div>

      {/* Dot OR Button icon */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          isButtonHover
            ? 'text-xl text-[#111] px-1 py-1'
            : 'w-3 h-3 bg-[#111]'
        }`}
        style={{ zIndex: 999999 }}
      >
        {isButtonHover ? <MdArrowOutward /> : null}
      </div>
    </>
  );
};

export default CustomCursor;