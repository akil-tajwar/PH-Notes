import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex justify-between p-4 w-11/12 lg:w-3/4 mx-auto'>
                <div className='text-3xl'>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                        <Bars3Icon className="h-8 w-8 text-black" />
                    </div>
                    <div className={`absolute lg:static p-6 lg:w-fit w-1/2 h-full text-right bg-blue-100 flex flex-col lg:flex-row lg:gap-5 lg:justify-center lg:items-center duration-500 ${open ? 'right-0 top-0' : '-right-96 top-0'}`}>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-2xl'>Menu</h2>
                            </div>
                            <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                                <XMarkIcon className="h-8 w-8 text-black" />
                            </div>
                        </div><hr />
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Menu</a>
                        <a href="">Blogs</a>
                    </div>
                </div>
            </div><hr />
        </div>
    );
};

export default Navbar;