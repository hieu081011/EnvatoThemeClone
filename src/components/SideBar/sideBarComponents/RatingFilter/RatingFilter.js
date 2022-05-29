import React, { useState } from 'react'
import './style.scss'
import { FaAngleDown, FaStar, FaRegStar } from 'react-icons/fa'
const RatingFilter = () => {
    const [rotate, setRotate] = useState(true)
    return (
        <>
            <div className={rotate ? 'rating-filter-wrapper' : 'rating-filter-wrapper rotate'}>
                <div className='rating-filter-header'>
                    <h2>RATING</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='rating-filter-content'>
                    <label className='input-container'>
                        <span className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><span><FaRegStar /></span></span>
                        and above
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>2</span>
                    </label>
                    <label className='input-container'>
                        <span className='rating'><FaStar /><FaStar /><FaStar /><span><FaRegStar /><FaRegStar /></span></span>
                        and above
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>4</span>
                    </label>
                    <label className='input-container'>
                        <span className='rating'><FaStar /><FaStar /><span><FaRegStar /><FaRegStar /><FaRegStar /></span></span>
                        and above
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>4</span>
                    </label>
                    <label className='input-container'>
                        <span className='rating'><FaStar /><span><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></span></span>
                        and above
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>4</span>
                    </label>

                </div>

            </div>
        </>
    )
}
export default RatingFilter