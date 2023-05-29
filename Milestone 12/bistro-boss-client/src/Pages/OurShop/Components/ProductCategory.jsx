import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseMenu from '../../../hooks/UseMenu';

const ProductCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

    const handleTabClick = (index) => {
        setTabIndex(index);
    };

    return (
        <div className="tabs w-3/4 mx-auto mb-20 justify-center items-center">
            <div className='pb-10'>
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        className={`tab font-bold text-xl ${tabIndex === index ? 'tab-active text-[#D99904] pb-4' : ''}`}
                        onClick={() => handleTabClick(index)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                ))}
            </div>
            <div className='grid grid-cols-3 mb-20 gap-10'>
                {menu.filter((item) => item.category === categories[tabIndex]).map(item => (
                    <div item={item} key={item._id}>
                        <div className="card w-96 bg-black bg-opacity-50">
                            <figure className='w-full h-64 relative'><img className='w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#D99904] text-2xl">{item.name}</h2>
                                <p>{item.recipe}</p>
                                <div className="card-actions justify-end pt-3">
                                    <button className="bg-slate-200 rounded-lg text-black font-semibold border-2 border-[#D99904] px-3 py-1">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategory;
