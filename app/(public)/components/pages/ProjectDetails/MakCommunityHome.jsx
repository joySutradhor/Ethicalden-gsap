
import MakCommunityArea from '@/components/ProjectMakCommunity/MakCommunityArea';
import MakCommunityArea2 from '@/components/ProjectMakCommunity/MakCommunityArea2';
import MakCommunityArea3 from '@/components/ProjectMakCommunity/MakCommunityArea3';
import MakCommunityArea4 from '@/components/ProjectMakCommunity/MakCommunityArea4';
import MakCommunityArea5 from '@/components/ProjectMakCommunity/MakCommunityArea5';
import MakCommunityArea6 from '@/components/ProjectMakCommunity/MakCommunityArea6';
import MakCommunityBanner from '@/components/ProjectMakCommunity/MakCommunityBanner';
import MakCommunityBannerImg from '@/components/ProjectMakCommunity/MakCommunityBannerImg';
import MakCommunityFooter from '@/components/ProjectMakCommunity/MakCommunityFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const MakCommunityHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MakCommunityBanner />
            </div>
            <MakCommunityBannerImg />
            <MakCommunityArea />
            <MakCommunityArea2 />
            <MakCommunityArea3 />
            <MakCommunityArea4 />
            <MakCommunityArea5 />
            <MakCommunityFooter />
        </div>
    );
};

export default MakCommunityHome;