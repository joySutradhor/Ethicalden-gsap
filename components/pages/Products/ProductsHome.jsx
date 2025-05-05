import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import ProductsArea from './ProductsArea';

const ProductsHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white"  />
            <div>
                <ProductsArea />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsHome;
