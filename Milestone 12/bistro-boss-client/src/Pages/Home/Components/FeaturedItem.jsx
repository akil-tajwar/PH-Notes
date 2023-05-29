import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const FeaturedItem = () => {
    return (
        <div className='bg-[url(/src/assets/home/featured.jpg)] mb-20 rounded-lg h-fit bg-no-repeat bg-center bg-cover w-3/4 mx-auto'>
            <div className=''>
                <div className='bg-black bg-opacity-80 rounded-lg w-full h-full p-20'>
                    <SectionTitle heading={'From Our Menu'} subHeading={'Check it Out'}></SectionTitle>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className=''>
                            <img src="/src/assets/home/featured.jpg" alt="" />
                        </div>
                        <div className='mt-10'>
                            <h4 className='text-3xl font-semibold text-[#D99904] pb-1'>Where can we get some?</h4>
                            <p className='font-semibold pb-5 text-xl'>March 20, 2023</p>
                            <p className='text-xl text-justify pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab voluptatum saepe cumque voluptates porro dicta laborum possimus quos dolorem labore corrupti quidem, commodi voluptas ut nostrum mollitia sit asperiores sint fugiat! Qui ipsum illo, ea nostrum dolorum perferendis tempore, nemo maiores quisquam minus maxime dolores hic, ullam debitis nihil!</p>
                            <button className='rounded-lg text-xl border-b-2 border-white px-5 py-2'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;