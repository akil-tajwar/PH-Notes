import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-center mt-12'>
            <div className="bg-opacity-50 fixed w-3/4 mx-auto z-10 text-white rounded-lg bg-black">
                <div className='flex justify-between items-center p-3'>
                    <div>
                        <h3 className="text-3xl text-[#D99904] font-semibold">Bistro Boss</h3>
                    </div>
                    <div className='flex flex-row gap-9 font-semibold'>
                        <Link className='hover:text-[#D99904]' to={'/'}>Home</Link>
                        <Link className='hover:text-[#D99904]' to={'/contactus'}>Contact Us</Link>
                        <Link className='hover:text-[#D99904]' to={'/dashboard'}>Dashboard</Link>
                        <Link className='hover:text-[#D99904]' to={'/ourmenu'}>Our Menu</Link>
                        <Link className='hover:text-[#D99904]' to={'/ourshop'}>Our Shop</Link>
                        <Link className='hover:text-[#D99904]' to={'/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;