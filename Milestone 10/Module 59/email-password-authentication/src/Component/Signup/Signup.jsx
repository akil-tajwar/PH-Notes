import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import './Signup.css'
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Signup = () => {
    // const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handelEmail = (e) => {
        // console.log(e.target.value);
        // setEmail(e.target.value);
    }
    const handelPassword = (e) => {
        // console.log(e.target.value);
    }
    const submitBtn = (e) => {
        //prevent page refresh
        e.preventDefault();
        setSuccess('');

        //collect form data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password);

        //validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least on uppercase')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add at least one special character')
            return;
        }
        else if (password.length < 8) {
            setError('Please add at least 6 characters')
            return;
        }

        //create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if(!loggedUser.emailVerified){
                    alert('Please varify your email address first');
                }
                setError('');
                setSuccess('user signup successful');
                emailVarification(result.user);
                userData(result.user, name);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                setSuccess('');
            })
    }

    //email varification
    const emailVarification = (user) => {
        sendEmailVerification(user)
        .then(result => {
            console.log(result);
            alert('please varify your email address');
        })
    }

    const userData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
        .then(() => {
            console.log('user name updated');
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='signup-form'>
            <h2>This is Signup</h2>
            <form onSubmit={submitBtn}>
                <input type="text" name='name' placeholder='your name' required /><br />
                <input onChange={handelEmail} type="email" name='email' placeholder='your email' required /><br />
                <input onBlur={handelPassword} type="password" name='password' placeholder='password' required /><br />
                <p>{error}</p>
                <p>{success}</p>
                <input type="submit" value='Signup' />
            </form>
            <p>Already have an account? Please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;