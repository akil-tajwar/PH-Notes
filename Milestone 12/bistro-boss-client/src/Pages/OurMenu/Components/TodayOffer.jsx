import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCard from '../../Shared/MenuCard';

const TodayOffer = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('Menu.json')
        .then(res => res.json())
        .then(data => {
            const todayOffer = data.filter(item => item.category === 'offered');
            setMenu(todayOffer);
        })
    }, [])
    return (
        <div>
            <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"}></SectionTitle>
            <div className='grid grid-cols-2 gap-20 mt-4 mb-10 w-3/4 mx-auto'>
                {
                    menu.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default TodayOffer;