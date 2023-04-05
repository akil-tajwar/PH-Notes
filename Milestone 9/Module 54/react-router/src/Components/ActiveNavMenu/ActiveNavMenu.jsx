import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveNavMenu.css'

const ActiveNavMenu = ({to, children}) => {
    return (
        <div>
            <NavLink  to = {to} className = {({isActive}) => isActive ? 'isActive' : ''}>
               {children}
            </NavLink>
        </div>
    );
};

export default ActiveNavMenu;