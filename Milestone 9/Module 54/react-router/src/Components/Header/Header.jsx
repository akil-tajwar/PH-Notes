import React from 'react';
import { Link } from 'react-router-dom';
import ActiveNavMenu from '../ActiveNavMenu/ActiveNavMenu';
import './Header.css'

const Header = () => {
    return (
        //this method will reload the page
        /*<div>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Blogs">Friends</a>
        </div>*/

        //this method won't reload the page
        <nav className='nav-menu'>
            <ActiveNavMenu to='/'>Home</ActiveNavMenu>
            <ActiveNavMenu to='/About'>About</ActiveNavMenu>
            <ActiveNavMenu to='/Friends'>Friends</ActiveNavMenu>
            <ActiveNavMenu to='/Posts'>Posts</ActiveNavMenu>
        </nav>
    );
};

export default Header;