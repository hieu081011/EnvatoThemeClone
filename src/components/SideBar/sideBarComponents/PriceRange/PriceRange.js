import React, { useState, useEffect } from "react";
import './style.scss'
import { FaAngleDown } from 'react-icons/fa';
import { Slider } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";

const minDistance = 10;

const PriceRange = ({ filter, setFilter }) => {
    const [value, setValue] = React.useState([10.00, 30.00]);
    const [rotate, setRotate] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
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
                            value={[Number(filter.price[0]), Number((filter.price[1]))]}
                            onChange={(e, newValue) => (setFilter({ ...filter, price: (newValue) }))}
                            valueLabelDisplay="on"
                            min={0.00}
                            max={300.00}
                            step={0.01}
                            onMouseUp={() => { navigate(`${location.pathname}?p=${filter.price[0]}-${filter.price[1]}`) }}
                        />
                    </div>
                    <div className='price-display'>
                        <input type='number' onInput={(e) => (setFilter({ ...filter, price: [e.target.value, filter.price[1]] }))} value={filter.price[0]}></input>
                        <div>-</div>
                        <input type='number' onInput={(e) => (setFilter({ ...filter, price: [filter.price[0], e.target.value] }))} value={filter.price[1]}></input>
                        <h2>$</h2>
                        <button onClick={() => { navigate(`${location.pathname}?p=${filter.price[0]}-${filter.price[1]}`) }}>GO</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PriceRange