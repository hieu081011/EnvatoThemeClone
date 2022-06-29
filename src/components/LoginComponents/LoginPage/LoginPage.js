import React, { useState } from 'react'
import './style.scss'
import { useSelector } from 'react-redux'
import { signin } from '../../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { errors } = useSelector(state => state.auth)
    const [signIn, setSignIn] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const handleKeyPress = (e) => {
        console.log(e)
        if (e.code === 'Enter') {
            dispatch(signin(signIn))
        }
    }

    return (
        <>
            <div className='login-page-container' >
                <h1 className='login-page-header'>CUSTOMER LOGIN</h1>
                <div className='sign-in-google-button'>
                    <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s' /></span>
                    <h2>Sign in with Google</h2>
                </div>
                <div className='login-form' onKeyDown={(e) => handleKeyPress(e)}>
                    <div className='login-form-top'>
                        <h2>REGISTERED CUSTOMERS</h2>
                        <h3>If you have an account, sign in with your email address.</h3>
                        <h4>Email<span>*</span></h4>
                        <input type='text' value={signIn.email} onChange={(e) => { setSignIn({ ...signIn, email: e.target.value }); dispatch({ type: 'SET ERROR', data: null }) }}></input>
                        <h4>Password<span>*</span></h4>
                        <input type={showPassword ? 'text' : 'password'} value={signIn.password} onChange={(e) => { setSignIn({ ...signIn, password: e.target.value }); dispatch({ type: 'SET ERROR', data: null }) }} ></input>

                        <label ><input type='checkbox' checked={showPassword === true} onChange={() => setShowPassword(!showPassword)} /> Show Password</label><br></br>
                        {errors &&
                            <div className='error-message'>{errors}</div>
                        }
                        <button onClick={() => { dispatch(signin(signIn)); }}>SIGN IN</button>
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