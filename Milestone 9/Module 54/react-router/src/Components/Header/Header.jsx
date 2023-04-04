import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        //this method will reload the page
        /*<div>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Blogs">Blogs</a>
        </div>*/

        //this method won't reload the page
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Blogs'>Blogs</Link>
        </nav>
    );
};

export default Header;