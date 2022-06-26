import React, { useState } from 'react'
import './style.scss'
import { FaAngleDown } from 'react-icons/fa'

const ColorFilter = () => {
    const [rotate, setRotate] = useState(true)
    const [colorList, setColorList] = useState([
        { label: 'Black', hex: '#000000' },
        { label: 'Dark Blue', hex: '#0C014D' },
        { label: 'Yellow', hex: '#FFFF21' },
        { label: 'Red', hex: '#FF0303' },
        { label: 'Gray', hex: '#BFBFBF' },
        { label: 'Silver', hex: '#EBEBEB' },
        { label: 'Green', hex: '#36C73B' },
        { label: 'Purple', hex: '#D604D6' },
        { label: 'Blue', hex: '#5EB4FF' },
        { label: 'Light Pink', hex: '#FF36A1' },
        { label: 'Gold', hex: '#36C73B' },
        { label: 'Pink', hex: '#E6007B' },
        { label: 'Nude', hex: '#F2DDD0' },
        { label: 'Light Mustard', hex: '#FBFF8A' },
        { label: 'Dark green', hex: '#0B4003' },
        { label: 'Mustard', hex: '#F1BE3D' },
        { label: 'Navy', hex: '#103B4E' },
        { label: 'Pale Khaki', hex: '#877687' },
        { label: 'Sage', hex: '#74B578' },
        { label: 'Khaki', hex: '#E19B12' },
        { label: 'White', hex: '#FFFFFF' },

    ])
    return (
        <>
            <div className={rotate ? 'colorFilter-wrapper' : 'colorFilter-wrapper rotate'}>
                <div className='colorFilter-header'>
                    <h2>COLOR</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='colorFilter-content'>

                    {colorList.map((item) => (
                        <label key={item.label} className='input-container'>
                            <div style={{ backgroundColor: item.hex, }} className='indicator'>1</div>
                            {item.label}
                            <input type='checkbox'></input>
                            <span className='checkmark'></span>
                            <span className='number'>0</span>
                        </label>
                    ))}

                </div>
            </div>
        </>
    )
}
export default ColorFilter