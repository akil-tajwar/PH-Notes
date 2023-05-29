import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle heading={'Chef Recommends'} subHeading={'Should Try'}></SectionTitle>
            <div className='flex justify-between mb-20 gap-10 w-3/4 mx-auto'>
                <div className="card w-96 bg-black bg-opacity-50">
                    <figure className='w-full h-64 relative'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="bg-slate-200 rounded-lg text-[#D99904] font-semibold border-2 border-[#D99904] px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-black bg-opacity-50">
                    <figure className='w-full h-64 relative'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="bg-slate-200 rounded-lg text-[#D99904] font-semibold border-2 border-[#D99904] px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-black bg-opacity-50">
                    <figure className='w-full h-64 relative'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="bg-slate-200 rounded-lg text-[#D99904] font-semibold border-2 border-[#D99904] px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;