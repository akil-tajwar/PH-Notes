import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './test.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState('#');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position and update the state accordingly
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className={isScrolled ? 'bg-[#1c1c1c] fixed w-full z-10 text-white py-8' : `fixed w-full z-10 text-white py-8`}>
                <div className='flex justify-between p-4 w-11/12 lg:w-3/4 mx-auto'>
                    <div className='text-3xl'>
                        <h1>LOGO</h1>
                    </div>
                    <div className=''>
                        <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                            <Bars3Icon className="h-8 w-8 text-black" />
                        </div>
                        <div className={`fixed lg:static p-6 lg:w-fit w-1/2 h-full text-right bg-blue-100 flex flex-col lg:flex-row lg:gap-5 lg:justify-center lg:items-center duration-500 ${open ? 'right-0 top-0' : 'overflow-hidden -right-96 top-0'}`}>
                            <div className='flex justify-between lg:hidden'>
                                <div>
                                    <h2 className='text-2xl'>Menu</h2>
                                </div>
                                <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                                    <XMarkIcon className="h-8 w-8 text-black" />
                                </div>
                            </div><hr />
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Menu</a>
                            <a href="">Blogs</a>
                        </div>
                    </div>
                </div></div><hr />
            <div>
                <button className='btn btn--doar'>TEST</button>
            </div>
        </div>
    );
};

export default Navbar;