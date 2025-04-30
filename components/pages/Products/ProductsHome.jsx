import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import ProductsArea from './ProductsArea';

const ProductsHome = () => {
    return (
        <div className="bg-[#010101] text-white ">
            <Navbar backgroundColor="#010101" textColor="white"  />
            <div>
                <ProductsArea />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsHome;
