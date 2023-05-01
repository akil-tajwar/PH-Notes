import React, { useContext, useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Signup = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        if (password !== confirm) {
            setError('your password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('password must have at least 6 characters');
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='main-container'>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label><br />
                    <input type="password" name="confirm" id="" required />
                </div>
                <button>Signup</button><br />
                <div className='signup'>
                    <small>Already have an account? <Link to='/login'>Please login</Link></small>
                </div>
            </form>
            <p>--------- or ---------</p>
            <button className='google'>Continue with Google</button>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default Signup;