import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/Home';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    
    return (
        <div className='login-info'>
           < h1 className='text-4xl text-center font-bold p-8'>Login Our Page</h1>
           <div className='text-center p-8'>
               <SocialLogin></SocialLogin>
           </div>
            <form onSubmit={handleUserSignIn} className='text-center'>
                <div className='p-4'>
                <input onBlur={handleEmailBlur} type="email" className='form-info-email' placeholder='Enter your email' />
                </div>
                <div className='p-4'>
                <input onBlur={ handlePasswordBlur} type="password" className='form-info-pass' placeholder='Enter Password' />
                </div>
                <input type="submit" className='submit w-12 h-8' value="Login" />
            </form>
            <p className='text-center'>
                New to Now? <Link className='form-link' to="/SingUp">Create Account</Link>
            </p>
        </div>
    );
};

export default Login;