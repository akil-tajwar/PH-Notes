import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const ForgetPassword = () => {
    const emailRef = useRef();

    const resetPassword = () => {
        const email = (emailRef.current.value);
        if(!email){
            alert('please provide your email address to reset your password');
            return;
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your emial');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    return (
        <div>
            <h2>Reset Password</h2>
            <input type="email" name='email' ref={emailRef} placeholder='your email' required /><br />
            <button onClick={resetPassword}>Reset</button>
        </div>
    );
};

export default ForgetPassword;