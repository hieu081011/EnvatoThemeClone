import React from 'react'
import './style.scss'
import { FaQuestionCircle } from 'react-icons/fa'
const RegisterPage = () => {
    return (
        <>
            <div className='register-page-container'>
                <h1 className='register-page-header'>CREATE A NEW CUSTOMER ACCOUNT</h1>
                <div className='sign-in-google-button'>
                    <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s' /></span>
                    <h2>Sign in with Google</h2>
                </div>
                <div className='register-form'>
                    <div className='form-header'>
                        PERSONAL INFORMATION
                    </div>
                    <h4>Name Prefix<span>*</span></h4>
                    <input type='text' />
                    <h4>First Name<span>*</span></h4>
                    <input type='text' />
                    <h4>Middle Name/Intial</h4>
                    <input type='text' />
                    <h4>Last Name<span>*</span></h4>
                    <input type='text' />
                    <h4>Suffix</h4>
                    <input type='text' />
                    <label ><input type='checkbox' /> Sign Up for Newsletter</label><br></br>
                    <h4>Tax/VAT Number</h4>
                    <input type='text' />
                    <h4>Gender</h4>
                    <select>
                        <option> </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Not Specified</option>
                    </select>
                    <label >
                        <input type='checkbox' />
                        Allow remote shopping assistance
                        <span><FaQuestionCircle /></span>
                    </label><br></br>
                    <div className='form-header'>
                        SIGN-IN INFORMATION
                    </div>
                    <h4>Email<span>*</span></h4>
                    <input type='text' />
                    <h4>Tax/VAT Number<span>*</span></h4>
                    <input type='text' />
                    <h4>Tax/VAT Number<span>*</span></h4>
                    <input type='text' />
                    <label ><input type='checkbox' /> Show Password</label><br></br>
                    <button>CREATE AN ACCOUNT</button>


                </div>

            </div>
        </>
    )
}
export default RegisterPage