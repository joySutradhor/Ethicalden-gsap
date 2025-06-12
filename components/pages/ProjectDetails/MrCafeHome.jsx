
import MrCafeArea from '@/components/ProjectMrCafe/MrCafeArea';
import MrCafeArea2 from '@/components/ProjectMrCafe/MrCafeArea2';
import MrCafeArea3 from '@/components/ProjectMrCafe/MrCafeArea3';
import MrCafeArea4 from '@/components/ProjectMrCafe/MrCafeArea4';
import MrCafeArea5 from '@/components/ProjectMrCafe/MrCafeArea5';
import MrCafeArea6 from '@/components/ProjectMrCafe/MrCafeArea6';
import MrCafeBanner from '@/components/ProjectMrCafe/MrCafeBanner';
import MrCafeBannerImg from '@/components/ProjectMrCafe/MrCafeBannerImg';
import MrCafeFooter from '@/components/ProjectMrCafe/MrCafeFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const MrCafeHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MrCafeBanner />
            </div>
            <MrCafeBannerImg />
            <MrCafeArea />
            <MrCafeArea2 />
            <MrCafeArea3 />
            <MrCafeArea4 />
            <MrCafeArea5 />
            <MrCafeArea6 />
            <MrCafeFooter />
        </div>
    );
};

export default MrCafeHome;