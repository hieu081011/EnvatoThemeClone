import React, { useState } from 'react'
import './style.scss'
import { FaUserAlt, FaRegHeart, FaExchangeAlt, FaListAlt, FaRegEnvelope, FaRegMoneyBillAlt, FaGlobeAmericas, FaCaretDown, FaCaretUp } from 'react-icons/fa'
const LoginSideBar = () => {
    const [dropDown, setDropDown] = useState([true, true, true])
    return (
        <>
            <div className='login-sidebar-container'>
                <div className='sign-in-google-button'>
                    <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s' /></span>
                    <h2>Sign in with Google</h2>
                </div>
                <h4>Email</h4>
                <input type='text' />
                <h4>Password</h4>
                <input type='text' />
                <button>SIGN IN</button>
                <a>Forgot Your Password?</a>
                <div className='new-custommer'>
                    NEW CUSTOMER?<span><a>&nbsp;START HERE.</a></span>
                </div>
                <div className='login-menu'>
                    <a><span><FaUserAlt /></span>MY ACCOUNT</a>
                    <a><span><FaRegHeart /></span>MY WISH LIST</a>
                    <a><span><FaExchangeAlt /></span>COMPARE</a>
                    <a><span><FaListAlt /></span>MY ORDERS</a>
                    <a><span><FaRegEnvelope /></span>CONTACT US</a>
                    <div onClick={() => (setDropDown(dropDown.map((item, index) => (index === 0 ? (item = !item) : (item)))))}>
                        <span><img src='http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/flags/flag_store26_en.gif' /></span>
                        <div>
                            ENGLISH
                            {dropDown[0] ?
                                <><span ><FaCaretDown /></span></> :
                                <><span ><FaCaretUp /></span>
                                    <ul>
                                        <li><span style={{ marginRight: '10px' }}><img src='http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/flags/flag_store26_ar.gif' />
                                        </span>RTL</li>
                                    </ul></>
                            }

                        </div>
                    </div>
                    <div>
                        <span><FaRegMoneyBillAlt /></span>
                        <div onClick={() => (setDropDown(dropDown.map((item, index) => (index === 1 ? (item = !item) : (item)))))}>
                            CORRENCY: USD - US DOLLAR
                            {dropDown[1] ?
                                <><span ><FaCaretDown /></span></> :
                                <><span ><FaCaretUp /></span>
                                    <ul>
                                        <li>EUR-EURO</li>
                                    </ul></>
                            }

                        </div>
                    </div>
                    <div>
                        <span><FaGlobeAmericas /></span>
                        <div onClick={() => (setDropDown(dropDown.map((item, index) => (index === 2 ? (item = !item) : (item)))))}>
                            HOME DECOR STORE
                            {dropDown[2] ?
                                <><span ><FaCaretDown /></span></> :
                                <><span > <FaCaretUp /></span>
                                    <ul>
                                        <li>BABY KIDS STORE</li>
                                        <li>FASHION MEGASTORE</li>
                                        <li>NEGANAKK STIRE</li>
                                        <li>FURNITURE STORE</li>
                                        <li>SKIN BUEATY STORE</li>
                                        <li>FOOD & DRINK STORE</li>
                                        <li>FASHION STORE</li>
                                        <li>FASHION ACCESSORIES STORE</li>
                                        <li>ELECTRONIC - OMBILE STORE</li>
                                        <li>SPORT STORE</li>
                                        <li>SUPERMARKET STORE</li>

                                    </ul></>
                            }

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default LoginSideBar