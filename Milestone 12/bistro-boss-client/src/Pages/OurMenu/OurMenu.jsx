import React from 'react';
import { Helmet } from 'react-helmet-async';
import TodayOffer from './Components/TodayOffer';
import Cover from '../Shared/Cover';
import Desserts from './Components/Desserts';
import Pizza from './Components/Pizza';
import Salad from './Components/Salad';
import Soups from './Components/Soups';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover heading={'Our Menu'} text={'Would you like to try a dish?'} background={'bg-[url(/src/assets/menu/banner3.jpg)]'}></Cover>
            <TodayOffer></TodayOffer>
            <Desserts></Desserts>
            <Pizza></Pizza>
            <Salad></Salad>
            <Soups></Soups>
        </div>
    );
};

export default OurMenu;