
import InsiderfeedArea from '@/components/ProjectInsiderfeed/InsiderfeedArea';
import InsiderfeedArea2 from '@/components/ProjectInsiderfeed/InsiderfeedArea2';
import InsiderfeedArea3 from '@/components/ProjectInsiderfeed/InsiderfeedArea3';
import InsiderfeedArea4 from '@/components/ProjectInsiderfeed/InsiderfeedArea4';
import InsiderfeedArea5 from '@/components/ProjectInsiderfeed/InsiderfeedArea5';
import InsiderfeedArea6 from '@/components/ProjectInsiderfeed/InsiderfeedArea6';
import InsiderfeedBanner from '@/components/ProjectInsiderfeed/InsiderfeedBanner';
import InsiderfeedBannerImg from '@/components/ProjectInsiderfeed/InsiderfeedBannerImg';
import InsiderfeedFooter from '@/components/ProjectInsiderfeed/InsiderfeedFooter';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const InsiderfeedHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <InsiderfeedBanner />
            </div>
            <InsiderfeedBannerImg />
            <InsiderfeedArea />
            <InsiderfeedArea2 />
            <InsiderfeedArea3 />
            <InsiderfeedArea4 />
            <InsiderfeedArea5 />
            <InsiderfeedArea6 />
            <InsiderfeedFooter />
        </div>
    );
};

export default InsiderfeedHome;