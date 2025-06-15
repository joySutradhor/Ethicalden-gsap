
import SandeepArea from '@/components/ProjectSandeep/SandeepArea';
import SandeepArea2 from '@/components/ProjectSandeep/SandeepArea2';
import SandeepArea3 from '@/components/ProjectSandeep/SandeepArea3';
import SandeepArea4 from '@/components/ProjectSandeep/SandeepArea4';
import SandeepArea5 from '@/components/ProjectSandeep/SandeepArea5';
import SandeepArea6 from '@/components/ProjectSandeep/SandeepArea6';
import SandeepBanner from '@/components/ProjectSandeep/SandeepBanner';
import SandeepBannerImg from '@/components/ProjectSandeep/SandeepBannerImg';
import SandeepFooter from '@/components/ProjectSandeep/SandeepFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const SandeepHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <SandeepBanner />
            </div>
            <SandeepBannerImg />
            <SandeepArea />
            <SandeepArea2 />
            <SandeepArea3 />
            <SandeepArea4 />
            <SandeepArea5 />
            <SandeepFooter />
        </div>
    );
};

export default SandeepHome;