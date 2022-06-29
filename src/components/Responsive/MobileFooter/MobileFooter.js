import React from 'react'
import './style.scss'
import { BsSearch, BsHouseFill, BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
const MobibleFooter = () => {
    return (
        <>


            <div className='mobile-footer-container'>
                <a href='/'><BsHouseFill /></a>
                <button><BsSearch /></button>
                <div className='cart-button'>
                    <span><BsCart3 /></span>
                </div>
                <a href='/'><FaRegUser /></a>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

        </>
    )
}
export default MobibleFooter