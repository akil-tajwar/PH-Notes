import React, { useState } from 'react';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const loginBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Please use at least 2 uppercase alphabets')
            return;
        }
        else if(!/(?=.*[!@#$&*].*[!@#$&*])/.test(password)){
            setError('Please use at least 2 special characters');
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('login successful');
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='login-form'>
            <h2>This is login</h2>
            <form onSubmit={loginBtn}>
                <input type="email" name='email' placeholder='your email' required /><br />
                <input type="password" name='password' placeholder='password' required /><br />
                <p>{error}</p>
                <p>{success}</p>
                <input type="submit" value='Login' />
            </form>
            <p>New to this website? Please <Link to='/signup'>Register</Link></p>
            <p>Did you forget your password? Plsease <Link to='/reset'>Reset</Link></p>
        </div>
    );
};

export default Login;