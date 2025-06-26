'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';

const HealingBannerImg = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (
        <div className="w-full xl:h-screen relative">

            {/* Spinner on top */}
            {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            <Image
                src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/banner(3).jpg?updatedAt=1750065574300"
                alt="Banner"
                width={1920}
                height={952}
                className="w-full h-auto"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                onLoadingComplete={() => setIsImageLoaded(true)}
                priority
                loading="eager"
            />
        </div>
    );
};

export default HealingBannerImg;
