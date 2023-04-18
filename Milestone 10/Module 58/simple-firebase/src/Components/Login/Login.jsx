import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    // console.log(user);
    const auth = getAuth(app);
    // console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignin = () => {
        console.log('google signin')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logedInUser = result.user;
                console.log(logedInUser);
                setUser(logedInUser);
            })
            .catch(error => console.log(error.message))
    }
    const githubSignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logedInUser = result.user;
                console.log(logedInUser);
                setUser(logedInUser);
            })
            .catch(error => console.log(error.message))
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Signout</button> :
                    <div>
                        <button onClick={googleSignin}>Google</button>
                        <button onClick={githubSignin}>Github</button>
                    </div>

            }
            {
                user &&
                <div>
                    <h1>Name : {user.displayName}</h1>
                </div>
            }
        </div>
    );
};

export default Login;