import React from 'react'
import './style.scss'
import CustomImage from '../CustomImage/CustomImage'
import CustomNumberInput from '../CustomNumberInput/CustomNumberInput'
const MainSectionGrid = () => {
    return (
        <>
            <div className='main-section-grid-container'>
                <div className='product'>
                    <div class='effect'>
                        <CustomNumberInput />
                        <button >Add to Cart</button>
                    </div>
                    <CustomImage />
                    <div className='product-content'>
                        <a>product-name</a>
                        <h2>$123</h2>
                    </div>
                </div>
                <div className='product'>
                    <div class='effect'>
                        <CustomNumberInput />
                        <button >Add to Cart</button>
                    </div>
                    <CustomImage />
                    <div className='product-content'>
                        <a>product-name</a>
                        <h2>$123</h2>
                    </div>
                </div>
                <div className='product'>
                    <div class='effect'>
                        <CustomNumberInput />
                        <button >Add to Cart</button>
                    </div>
                    <CustomImage />
                    <div className='product-content'>
                        <a>product-name</a>
                        <h2>$123</h2>
                    </div>
                </div>
                <div className='product'>
                    <div class='effect'>
                        <CustomNumberInput />
                        <button >Add to Cart</button>
                    </div>
                    <CustomImage />
                    <div className='product-content'>
                        <a>product-name</a>
                        <h2>$123</h2>
                    </div>
                </div>
                <div className='product'>
                    <div class='effect'>
                        <CustomNumberInput />
                        <button >Add to Cart</button>
                    </div>
                    <CustomImage />
                    <div className='product-content'>
                        <a>product-name</a>
                        <h2>$123</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainSectionGrid