import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-options'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <span onClick={handleLogout}>Signout</span> : <Link to="/login">Login</Link>
                }
                {
                    user ? <span>{user.email}</span> : <Link to="/signup">Signup</Link>
                }
            </div>
        </nav>
    );
};

export default Header;