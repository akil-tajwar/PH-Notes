import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user , logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <div className='flex gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/profile'>Profile</Link>
                        {
                            user ? <span onClick={handleLogOut} className='cursor-pointer'>Signout</span> : <Link to='/login'>Login</Link>
                        }
                        {
                            user ? <span>{user.email}</span> : <Link to='/register'>Register</Link>
                        }
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;