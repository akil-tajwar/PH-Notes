import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import UseMenu from '../../../hooks/UseMenu';
import MenuCard from '../../Shared/MenuCard';

const Pizza = () => {
    const [menu] = UseMenu();
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <SectionTitle heading={'Pizza'} subHeading={'You Can Not Miss It'}></SectionTitle>
            <div className='grid grid-cols-2 gap-10 mt-4 mb-20 w-3/4 mx-auto'>
                {
                    pizza.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Pizza;