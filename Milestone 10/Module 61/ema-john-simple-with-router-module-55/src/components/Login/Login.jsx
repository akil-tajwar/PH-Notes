import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='main-container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label><br />
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <div className='hide-show'>
                        <p onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide password</span> : <span>show password</span>
                                }
                            </small>
                        </p>
                    </div>
                </div>
                <button>Login</button><br />
                <div className='signup'>
                    <small>New to Ema-John? <Link to='/signup'>Create new account</Link></small>
                </div>
            </form>
            <p>--------- or ---------</p>
            <button className='google'>Continue with Google</button>
        </div>
    );
};

export default Login;