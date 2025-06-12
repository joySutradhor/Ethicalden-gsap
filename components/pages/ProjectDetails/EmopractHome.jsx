
import EmopractArea from '@/components/ProjectEmopract/EmopractArea';
import EmopractArea2 from '@/components/ProjectEmopract/EmopractArea2';
import EmopractArea3 from '@/components/ProjectEmopract/EmopractArea3';
import EmopractArea4 from '@/components/ProjectEmopract/EmopractArea4';
import EmopractArea5 from '@/components/ProjectEmopract/EmopractArea5';
import EmopractArea6 from '@/components/ProjectEmopract/EmopractArea6';
import EmopractBanner from '@/components/ProjectEmopract/EmopractBanner';
import EmopractBannerImg from '@/components/ProjectEmopract/EmopractBannerImg';
import EmopractFooter from '@/components/ProjectEmopract/EmopractFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const EmopractHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <EmopractBanner />
            </div>
            <EmopractBannerImg />
            <EmopractArea />
            <EmopractArea2 />
            <EmopractArea3 />
            <EmopractArea4 />
            <EmopractArea5 />
            <EmopractArea6 />
            <EmopractFooter />
        </div>
    );
};

export default EmopractHome;