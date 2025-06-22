import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import OurWorksArea from './OurWorksArea';
import Footer from '@/components/Shared/Footer/Footer';

const OurWorksHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white" />
            <div>
                <OurWorksArea />
            </div>
            <Footer />
        </div>
    );
};

export default OurWorksHome;