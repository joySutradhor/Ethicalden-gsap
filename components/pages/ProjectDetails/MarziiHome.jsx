import MarziiBanner from '@/components/ProjectMarzii/MarziiBanner';
import MarziiBannerImg from '@/components/ProjectMarzii/MarziiBannerImg';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const MarziiHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MarziiBanner />
            </div>
            <MarziiBannerImg />
        </div>
    );
};

export default MarziiHome;