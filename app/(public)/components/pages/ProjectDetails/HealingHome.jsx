
import HealingArea from '@/components/ProjectHealing/HealingArea';
import HealingArea2 from '@/components/ProjectHealing/HealingArea2';
import HealingArea3 from '@/components/ProjectHealing/HealingArea3';
import HealingArea4 from '@/components/ProjectHealing/HealingArea4';
import HealingArea5 from '@/components/ProjectHealing/HealingArea5';
import HealingBanner from '@/components/ProjectHealing/HealingBanner';
import HealingBannerImg from '@/components/ProjectHealing/HealingBannerImg';
import HealingFooter from '@/components/ProjectHealing/HealingFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const HealingHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <HealingBanner />
            </div>
            <HealingBannerImg />
            <HealingArea />
            <HealingArea2 />
            <HealingArea3 />
            <HealingArea4 />
            <HealingArea5 />
            <HealingFooter />
        </div>
    );
};

export default HealingHome;