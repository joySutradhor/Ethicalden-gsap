import Image from 'next/image';
import React from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';

const MarziiBannerImg = () => {
    return (
        <div className="w-full xl:h-screen">
            <Image
                src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/banner-image.png?updatedAt=1750065607463"
                alt="Banner"
                width={1920}
                height={952}
                className="w-full h-auto"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
            />
        </div>
    );
};

export default MarziiBannerImg;
