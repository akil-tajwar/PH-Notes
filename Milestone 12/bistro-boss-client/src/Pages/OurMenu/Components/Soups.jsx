import React from 'react';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCard from '../../Shared/MenuCard';

const Soups = () => {
    const [menu] = UseMenu();
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <SectionTitle heading={'soup'} subHeading={'You Can Not Miss It'}></SectionTitle>
            <div className='grid grid-cols-2 gap-20 mt-4 mb-10 w-3/4 mx-auto'>
                {
                    soup.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Soups;