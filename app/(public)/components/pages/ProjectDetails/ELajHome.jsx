
import ELajArea from '@/components/ProjectELaj/ELajArea';
import ELajArea2 from '@/components/ProjectELaj/ELajArea2';
import ELajArea3 from '@/components/ProjectELaj/ELajArea3';
import ELajArea4 from '@/components/ProjectELaj/ELajArea4';
import ELajArea5 from '@/components/ProjectELaj/ELajArea5';
import ELajArea6 from '@/components/ProjectELaj/ELajArea6';
import ELajBanner from '@/components/ProjectELaj/ELajBanner';
import ELajBannerImg from '@/components/ProjectELaj/ELajBannerImg';
import ELajFooter from '@/components/ProjectELaj/ELajFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const ELajHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <ELajBanner />
            </div>
            <ELajBannerImg />
            <ELajArea />
            <ELajArea2 />
            <ELajArea3 />
            <ELajArea4 />
            <ELajArea5 />
            <ELajFooter />
        </div>
    );
};

export default ELajHome;