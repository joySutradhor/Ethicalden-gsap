import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import ProductsArea from './ProductsArea';

const ProductsHome = () => {
    return (
        <div className="bg-[#06171D] text-white min-h-screen">
            <Navbar backgroundColor="#06171D" textColor="white"  />
            <div>
                <ProductsArea />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsHome;
