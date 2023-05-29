import React from 'react';
import Cover from '../Shared/Cover';
import ProductCategory from './Components/ProductCategory';

const OurShop = () => {
    return (
        <div>
            <Cover heading={'Our Shop'} text={'Would you like to visit our shop?'} background={'bg-[url(/src/assets/shop/banner2.jpg)]'}></Cover>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default OurShop;