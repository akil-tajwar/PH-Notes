import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCard from '../../Shared/MenuCard';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className='mt-20'>
            <SectionTitle subHeading={'Check it out'} heading={'From Our Menu'}></SectionTitle>
            <div className='grid grid-cols-2 gap-10 mt-4 mb-10 w-3/4 mx-auto'>
                {
                    popular.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;