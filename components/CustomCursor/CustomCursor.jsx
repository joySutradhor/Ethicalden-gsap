'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MdOutlineArrowOutward } from 'react-icons/md';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isButtonHover, setIsButtonHover] = useState(false);

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

    const buttons = document.querySelectorAll('button, a, .cursor-pointer');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => setIsButtonHover(true));
      btn.addEventListener('mouseleave', () => setIsButtonHover(false));
    });

    follow();

    return () => {
      document.removeEventListener('mousemove', updateMouse);
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', () => setIsButtonHover(true));
        btn.removeEventListener('mouseleave', () => setIsButtonHover(false));
      });
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
      {isButtonHover ? (
        <div
          ref={dotRef}
          className="pointer-events-none fixed top-0 left-0 text-lg text-white bg-[#111] px-2 py-1 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ zIndex: 999999 }}
        >
          <MdOutlineArrowOutward />
        </div>
      ) : (
        <div
          ref={dotRef}
          className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-[#111] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 999999 }}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
