import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');

    const handelEmail = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handelPassword = (e) => {
        // console.log(e.target.value);
    }

    const submitBtn = (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);
    }
    return (
        <div>
            <h2>This is Signup</h2>
            <div>
                <form onSubmit={submitBtn}>
                    <input onChange={handelEmail} type="email" name='email' placeholder='your email' /><br />
                    <input onBlur={handelPassword} type="password" name='password' placeholder='password' /><br />
                    <input type="submit" value='signup' />
                </form>
            </div>
        </div>
    );
};

export default Signup;