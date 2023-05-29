import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import UseMenu from '../../../hooks/UseMenu';
import MenuCard from '../../Shared/MenuCard';

const Salad = () => {
    const [menu] = UseMenu();
    const salad = menu.filter(item => item.category === 'salad');
    return (
        <div>
            <SectionTitle heading={'salad'} subHeading={'Want Refresheness?'}></SectionTitle>
            <div className='grid grid-cols-2 gap-10 mt-4 mb-20 w-3/4 mx-auto'>
                {
                    salad.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Salad;