import React from 'react';
import loginSignupImage from '../assest/login-animation.gif';

const Signup = () => {
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/*<h1 className='text-center text-2xl font-bold'>Signup</h1>*/}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src={loginSignupImage} className='w-full' alt="login" />
            </div>
            <form className='w-full py-3' action="">
                <label htmlFor="firstName">First Name</label>
                <input type={"text"} id="firstName" name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' />
                <label htmlFor="lastName">Last Name</label>
                <input type={"text"} id="lastName" name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' />
                <label htmlFor="email">Email</label>
                <input type={"email"} id="email" name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' />
                <label htmlFor="password">Password</label>
                <input type={"password"} id="password" name='password' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type={"password"} id="confirmPassword" name='confirmPassword' className='mt-1 w-full bg-slate-200 px-2 py-1 rounded' />
            </form>
        </div>
    </div>
  )
}

export default Signup;