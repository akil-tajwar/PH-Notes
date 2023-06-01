import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const captchaValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
            alert('Captcha Matched');
        }
        else {
            alert('Captcha Does Not Match');
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className='pt-40'>
            <div className='grid grid-cols-2 w-3/4 mx-auto'>
                <div className='w-full mx-auto mt-14'>
                    <img src="/src/assets/login.svg" alt="" />
                </div>
                <div className='mx-auto w-fit bg-black bg-opacity-50 rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center font-semibold mb-3'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className='flex gap-5'>
                            <div className='pb-2'>
                                <label htmlFor="email">Email</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" required />
                            </div>
                            <div className='pb-2'>
                                <label htmlFor="password">Password</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" required />
                            </div>
                        </div>
                        <div className='pb-2 mt-10'>
                            {/* <label htmlFor="password">Reload Captcha</label><br /> */}
                            {/* <input readOnly className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="password" name="password" id="" required /> */}
                            <LoadCanvasTemplate className='bg-[#f5f5f5] rounded p-2 text-white border-slate-300 border' />
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="password">Type captcha</label><br />
                            <input ref={captchaRef} className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="text" name="captcha" id="" required />
                        </div>
                        <button onClick={captchaValidate} className='w-full bg-red-400 rounded font-semibold text-black mb-5'>Validate</button>
                        <button disabled={disabled} className={`w-full rounded font-semibold p-2 mt-4 mb-3 ${disabled ? 'bg-slate-400 text-slate-500' : 'bg-[#D99904] text-black'}`}>Login</button><br />
                    </form>
                    <p className='text-center'>--------- or ---------</p>
                    <div className='flex gap-2 mb-3'>
                        <button className='w-full bg-[#D99904] rounded text-black font-semibold p-2 mt-3'>Google</button>
                    </div>
                    <div className='text-center'>
                        <small>New to Turbo Toy Car? <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'></p>
        </div>
    );
};

export default Login;