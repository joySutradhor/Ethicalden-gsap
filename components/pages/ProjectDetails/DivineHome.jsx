
import DivineArea from '@/components/ProjectDivine/DivineArea';
import DivineArea2 from '@/components/ProjectDivine/DivineArea2';
import DivineArea3 from '@/components/ProjectDivine/DivineArea3';
import DivineArea4 from '@/components/ProjectDivine/DivineArea4';
import DivineArea5 from '@/components/ProjectDivine/DivineArea5';
import DivineArea6 from '@/components/ProjectDivine/DivineArea6';
import DivineBanner from '@/components/ProjectDivine/DivineBanner';
import DivineBannerImg from '@/components/ProjectDivine/DivineBannerImg';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const DivineHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <DivineBanner />
            </div>
            <DivineBannerImg />
            <DivineArea />
            <DivineArea2 />
            <DivineArea3 />
            <DivineArea4 />
            <DivineArea5 />
            <DivineArea6 />
        </div>
    );
};

export default DivineHome;