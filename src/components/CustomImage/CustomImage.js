import React from 'react'
import './style.scss'
import { TiHeartOutline, TiArrowSync, TiEyeOutline } from 'react-icons/ti'

const CustomImage = ({ img1, img2 }) => {
    return (
        <>
            <div className='customImage-container'>
                <div className='image-container'>
                    <img className='first-img' src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/38a282bb8f6400790e777b08232a08f4/b/a/bathroom_10_2.jpg' />
                    <img src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/38a282bb8f6400790e777b08232a08f4/b/a/bathroom_10_1.jpg' />
                    <div className='button-container'>
                        <button><TiHeartOutline /></button>
                        <button className='second-button'><TiArrowSync /></button>
                        <button><TiEyeOutline /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomImage