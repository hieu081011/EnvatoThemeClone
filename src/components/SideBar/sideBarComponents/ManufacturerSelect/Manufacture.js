import React, { useState } from 'react'
import './style.scss'
import { FaAngleDown } from 'react-icons/fa'
const Manufacture = () => {
    const [rotate, setRotate] = useState(true)
    return (
        <>
            <div className={rotate ? 'manufacture-wrapper' : 'manufacture-wrapper rotate'}>
                <div className='manufacture-header'>
                    <h2>MANUFACTURER</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='manufacture-content'>
                    <label className='input-container'>HM
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>2</span>
                    </label>
                    <label className='input-container'>Zara
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>4</span>
                    </label>
                    <label className='input-container'>Pull and Bear
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>5</span>
                    </label>
                </div>

            </div>
        </>
    )
}
export default Manufacture