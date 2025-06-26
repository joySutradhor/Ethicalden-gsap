
import AgarwalArea from '@/components/ProjectAgarwal/AgarwalArea';
import AgarwalArea2 from '@/components/ProjectAgarwal/AgarwalArea2';
import AgarwalArea3 from '@/components/ProjectAgarwal/AgarwalArea3';
import AgarwalArea4 from '@/components/ProjectAgarwal/AgarwalArea4';
import AgarwalArea5 from '@/components/ProjectAgarwal/AgarwalArea5';
import AgarwalBanner from '@/components/ProjectAgarwal/AgarwalBanner';
import AgarwalBannerImg from '@/components/ProjectAgarwal/AgarwalBannerImg';
import AgarwalFooter from '@/components/ProjectAgarwal/AgarwalFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const AgarwalHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <AgarwalBanner />
            </div>
            <AgarwalBannerImg />
            <AgarwalArea />
            <AgarwalArea2 />
            <AgarwalArea3 />
            <AgarwalArea4 />
            <AgarwalArea5 />
            <AgarwalFooter />
        </div>
    );
};

export default AgarwalHome;