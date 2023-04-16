import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/docs'}>Docs</Link>
            <Link to={'/login'}>SLogin</Link>
        </div>
    );
};

export default Header;