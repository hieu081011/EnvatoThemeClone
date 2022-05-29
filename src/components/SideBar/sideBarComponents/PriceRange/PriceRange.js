import React, { useState, useEffect } from "react";
import './style.scss'
import { FaAngleDown } from 'react-icons/fa';
import { Slider } from "@material-ui/core";


const minDistance = 10;

const PriceRange = () => {
    const [value, setValue] = React.useState([10.00, 30.00]);
    const [rotate, setRotate] = useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <div className={rotate ? 'priceRange-container rotate' : 'priceRange-container'}>
                <div className='header'>
                    <h2>PRICE</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='input-wrapper'>
                    <div className='slider-display'>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            min={10.00}
                            max={30.00}
                            step={0.01}
                        />
                    </div>
                    <div className='price-display'>
                        <input type='number' onInput={(e) => { setValue([e.target.value, value[1]]) }} value={value[0]}></input>
                        <div>-</div>
                        <input type='number' onInput={(e) => { setValue([value[0], e.target.value]) }} value={value[1]}></input>
                        <h2>$</h2>
                        <button>GO</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PriceRange