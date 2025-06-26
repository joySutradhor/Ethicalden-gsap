
import LaljhalArea from '@/components/Project-Laljhal/LaljhalArea';
import LaljhalArea2 from '@/components/Project-Laljhal/LaljhalArea2';
import LaljhalArea3 from '@/components/Project-Laljhal/LaljhalArea3';
import LaljhalArea4 from '@/components/Project-Laljhal/LaljhalArea4';
import LaljhalArea5 from '@/components/Project-Laljhal/LaljhalArea5';
import LaljhalBanner from '@/components/Project-Laljhal/LaljhalBanner';
import LaljhalBannerImg from '@/components/Project-Laljhal/LaljhalBannerImg';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const LaljhalHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <LaljhalBanner />
            </div>
            <LaljhalBannerImg />
            <LaljhalArea />
            <LaljhalArea2 />
            <LaljhalArea3 />
            <LaljhalArea4 />
            <LaljhalArea5 />
        </div>
    );
};

export default LaljhalHome;