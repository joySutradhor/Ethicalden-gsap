import React from 'react';
import UserDashboard from './UserDashboard';
import Navbar from '@/components/Shared/Navbar/Navbar';

const DashboardHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white"  />
            <div>
                <UserDashboard />
            </div>
        </div>
    );
};

export default DashboardHome;