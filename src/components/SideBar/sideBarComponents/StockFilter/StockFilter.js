import React, { useState } from 'react'
import './style.scss'
import { FaAngleDown } from 'react-icons/fa'
const StockFilter = () => {
    const [rotate, setRotate] = useState(true)
    return (
        <>
            <div className={rotate ? 'stock-filter-wrapper' : 'stock-filter-wrapper rotate'}>
                <div className='stock-filter-header'>
                    <h2>STOCK STATUS</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='stock-filter-content'>
                    <label className='input-container'>
                        In Stock
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>2</span>
                    </label>
                    <label className='input-container'>
                        Out of Stock
                        <input type='checkbox'></input>
                        <span className='checkmark'></span>
                        <span className='number'>4</span>
                    </label>

                </div>

            </div>
        </>
    )
}
export default StockFilter