import React from 'react';

const MenuCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className='flex justify-between gap-5 items-center mb-10'>
            <div>
                <div className='w-32 h-32 relative'>
                    <img className='w-full h-full object-cover rounded-b-full rounded-tr-full' src={image} alt="" />
                </div>
            </div>
            <div>
                <h3 className='text-3xl mb-4 text-[#D99904]'>{name}</h3>
                <div className='flex gap-5'>
                    <p>{recipe}</p>
                    <h4 className='text-xl text-[#D99904]'>${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;