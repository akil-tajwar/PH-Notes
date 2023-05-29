import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCard from '../../Shared/MenuCard';
import UseMenu from '../../../hooks/UseMenu';

const Desserts = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <SectionTitle heading={'Desserts'} subHeading={'Want Something Sweet?'}></SectionTitle>
            <div className='grid grid-cols-2 gap-20 mt-4 mb-10 w-3/4 mx-auto'>
                {
                    dessert.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Desserts;