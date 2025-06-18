'use client'
import { useState } from 'react';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

function ClientsLogo() {
  const items = [
    {
      id: 1,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-2.webp?updatedAt=1749636418967',
      line: 'yes'
    },
    {
      id: 2,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-11.webp?updatedAt=1749636486824',
      line: 'yes'
    },
    {
      id: 3,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-12.webp?updatedAt=1749636493578',
      line: 'yes'
    },
    {
      id: 4,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-6.webp?updatedAt=1749636458671',
      line: 'yes'
    },
    {
      id: 5,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-8.webp?updatedAt=1749636470191',
      line: 'yes'
    },
    {
      id: 6,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-3.webp?updatedAt=1749636424122',
      line: 'yes'
    },
    {
      id: 7,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-7.webp?updatedAt=1749636464683',
      line: 'yes'
    },
    {
      id: 8,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-5.webp?updatedAt=1749636439438',
      line: 'yes'
    },
    {
      id: 9,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-9.webp?updatedAt=1749636475545',
      line: 'yes'
    },
    {
      id: 10,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-10.webp?updatedAt=1749636481915',
      line: 'yes'
    },
    {
      id: 11,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-4.webp?updatedAt=1749636431592',
      line: 'yes'
    },
    {
      id: 12,
      src: 'https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/logo-1.webp?updatedAt=1749636411399',
      line: 'yes'
    },
  ];

  const [loadingStates, setLoadingStates] = useState(
    Array(items.length).fill(true)
  );

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <div className='px-5 xl:px-20 2xl:px-50'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {items.map((item, index) => (
          <div
            key={item.id}
            className='flex items-center justify-center rounded bg-white p-2 h-[180px]'
          >
            <div className='relative w-full flex items-center justify-center'>

              {/* Spinner overlay */}
              {loadingStates[index] && (
                <div className="absolute inset-0 flex items-center justify-center z-90 bg-white/40 backdrop-blur-sm rounded">
                  <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Image */}
              <Image
                src={item.src}
                loading='lazy'
                alt={`Item ${item.id}`}
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                className='object-contain w-full h-[120px] md:h-[180px]'
                onLoad={() => handleImageLoad(index)}
              />
            </div>

            {item.line === 'yes' && (
              <div className='h-[70px] w-[1px] bg-black/20 rotate-12 ml-5'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsLogo;
