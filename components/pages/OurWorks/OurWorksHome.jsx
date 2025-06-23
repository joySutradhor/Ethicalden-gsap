import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import Footer from '@/components/Shared/Footer/Footer';
import OurWorksArea2 from './OurWorksArea2';
import OurWorksArea3 from './OurWorksArea3';

const OurWorksHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white" />
            <div>
                <OurWorksArea3 />
            </div>
            <Footer />
        </div>
    );
};

export default OurWorksHome;