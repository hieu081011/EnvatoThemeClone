import React, { useState } from 'react'
import './style.scss'
import { FaAngleDown } from 'react-icons/fa'
const MaterialFilter = () => {
    const [rotate, setRotate] = useState(true)
    return (
        <>
            <div className={rotate ? 'material-filter-container' : 'material-filter-container rotate'}>
                <div className='material-filter-header'>
                    <h2>Clothing Material</h2>
                    <button onClick={() => { setRotate(!rotate) }}><FaAngleDown /></button>
                </div>
                <div className='material-filter-content'>
                    <select>
                        <option value="1">All</option>
                        <option value="2">Chiffon (2)</option>
                        <option value="3">Denim (2)</option>
                        <option value="4">Linen (2)</option>
                        <option value='5'>Other Material (2)</option>
                    </select>
                </div>

            </div>
        </>
    )
}
export default MaterialFilter