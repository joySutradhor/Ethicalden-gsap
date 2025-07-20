'use client'
import React, { useState } from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';
import Image from 'next/image';

const MakCommunityBannerImg = () => {

    return (
        <div className="w-full xl:h-screen relative">



            <Image
                src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/banner(4).jpg?updatedAt=1750065593886"
                alt="Banner"
                width={1920}
                height={952}
                className="w-full h-auto"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                priority
                loading="eager"
            />
        </div>
    );
};

export default MakCommunityBannerImg;
