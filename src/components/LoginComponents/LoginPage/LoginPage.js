import React, { useState } from 'react'
import './style.scss'
import { FaGoogle } from 'react-icons/fa'
import { signin } from '../../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [signIn, setSignIn] = useState({ email: '', password: '' })

    return (
        <>
            <div className='login-page-container'>
                <h1 className='login-page-header'>CUSTOMER LOGIN</h1>
                <div className='sign-in-google-button'>
                    <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s' /></span>
                    <h2>Sign in with Google</h2>
                </div>
                <div className='login-form'>
                    <div className='login-form-top'>
                        <h2>REGISTERED CUSTOMERS</h2>
                        <h3>If you have an account, sign in with your email address.</h3>
                        <h4>Email<span>*</span></h4>
                        <input type='text' value={signIn.email} onChange={(e) => { setSignIn({ ...signIn, email: e.target.value }) }}></input>
                        <h4>Password<span>*</span></h4>
                        <input type='text' value={signIn.password} onChange={(e) => { setSignIn({ ...signIn, password: e.target.value }) }}></input>

                        <label ><input type='checkbox' /> Show Password</label><br></br>
                        <button onClick={() => { dispatch(signin(signIn)); navigate('/') }}>SIGN IN</button>
                        <a>FORGOT YOUR PASSWORDS?</a>


                    </div>
                    <div className='login-form-bottom'>
                        <h2>NEW CUSTOMERS</h2>
                        <h3>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</h3>
                        <button>CREATE AN ACCOUNT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage