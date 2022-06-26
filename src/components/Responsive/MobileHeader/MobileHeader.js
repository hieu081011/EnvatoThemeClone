import React, { useEffect } from 'react'
import './style.scss'
import { FaBars, FaSearch } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const MobileHeader = ({ mobileMenu, setMobileMenu }) => {
    useEffect(() => {

        mobileMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
        console.log(mobileMenu)
    }, [mobileMenu]);
    return (
        <>
            <div className='mobile-header-container'>
                {!mobileMenu &&
                    <button onClick={() => setMobileMenu(true)}><FaBars /></button>
                }
                <div className='img-container'>
                    <Link to='/'>

                        <img src='http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/logo.svg' alt='logo' />
                    </Link>


                </div>
                <button><FaSearch /></button>
                <div className='cart-button'>
                    <span><BsCart3 /></span>
                </div>
            </div>
        </>
    )
}
export default MobileHeader