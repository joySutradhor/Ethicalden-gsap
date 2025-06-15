import MarziiArea from '@/components/ProjectMarzii/MarziiArea';
import MarziiArea2 from '@/components/ProjectMarzii/MarziiArea2';
import MarziiArea3 from '@/components/ProjectMarzii/MarziiArea3';
import MarziiArea4 from '@/components/ProjectMarzii/MarziiArea4';
import MarziiArea5 from '@/components/ProjectMarzii/MarziiArea5';
import MarziiArea6 from '@/components/ProjectMarzii/MarziiArea6';
import MarziiBanner from '@/components/ProjectMarzii/MarziiBanner';
import MarziiBannerImg from '@/components/ProjectMarzii/MarziiBannerImg';
import MarziiFooter from '@/components/ProjectMarzii/MarziiFooter';
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
            <MarziiArea />
            <MarziiArea2 />
            <MarziiArea3 />
            <MarziiArea4 />
            <MarziiArea5 />
            <MarziiFooter />
        </div>
    );
};

export default MarziiHome;