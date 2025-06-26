
import MassArtArea from '@/components/ProjectMassArt/MassArtArea';
import MassArtArea2 from '@/components/ProjectMassArt/MassArtArea2';
import MassArtArea3 from '@/components/ProjectMassArt/MassArtArea3';
import MassArtArea4 from '@/components/ProjectMassArt/MassArtArea4';
import MassArtArea5 from '@/components/ProjectMassArt/MassArtArea5';
import MassArtArea6 from '@/components/ProjectMassArt/MassArtArea6';
import MassArtBanner from '@/components/ProjectMassArt/MassArtBanner';
import MassArtBannerImg from '@/components/ProjectMassArt/MassArtBannerImg';
import MassArtFooter from '@/components/ProjectMassArt/MassArtFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const MassArtHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MassArtBanner />
            </div>
            <MassArtBannerImg />
            <MassArtArea />
            <MassArtArea2 />
            <MassArtArea3 />
            <MassArtArea4 />
            <MassArtArea5 />
            <MassArtFooter />
        </div>
    );
};

export default MassArtHome;