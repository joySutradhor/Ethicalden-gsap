'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';

const LaljhalBannerImg = () => {



  return (
    <div className="w-full xl:h-screen relative">


      <Image
        src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/banner.jpg?updatedAt=1750065306046"
        alt="Banner"
        width={1920}
        height={952}
        className="w-full h-auto"
        placeholder='blur'
        priority
        loading="eager"
        blurDataURL={blurPlaceholder}
      />
    </div>
  );
};

export default LaljhalBannerImg;
