import React from 'react'
import './style.scss'
import { FaHeart, FaRegCopy, FaRegEye } from 'react-icons/fa'

const MainSectionList = () => {
    return (
        <>
            <div className='main-section-list-container'>
                <div className='product'>
                    <div className='img-container'>
                        <button>
                            <FaRegEye />
                        </button>
                        <a >
                            <img className='main-img' src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/ec687f2343a93f5658792e9126c40440/m/e/megafashion_7_1.jpg' />
                            <img className='sub-img' src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/ec687f2343a93f5658792e9126c40440/m/e/megafashion_7_2.jpg' />
                        </a>

                    </div>
                    <div className='product-detail'>
                        <h2>Cat-eye sunglasses</h2>
                        <h3>$12.99</h3>
                        <div className='buttons'>
                            <button className='button-1'>ADD TO CART</button>
                            <button className='button-2'><FaHeart /></button>
                            <button className='button-3'><FaRegCopy /></button>
                        </div>
                        <p>
                            Calling all backpackers! The Arrowhead Internal Frame Pack is ready for a multi-day adventure out in the backcountry or a single day outing. Crafted out of durable polyester/ripstop fabric and designed with your comfort in mind, this pack features adjustable sternum and waist straps, aluminum stays, padded shoulder straps, and a deluxe cool mesh padded back to keep you cool.
                        </p>
                    </div>
                </div>
                <div className='product'>
                    <div className='img-container'>
                        <button>
                            <FaRegEye />
                        </button>
                        <a >
                            <img className='main-img' src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/ec687f2343a93f5658792e9126c40440/m/e/megafashion_7_1.jpg' />
                            <img className='sub-img' src='http://unlimited-12ca8.kxcdn.com/media/catalog/product/cache/ec687f2343a93f5658792e9126c40440/m/e/megafashion_7_2.jpg' />
                        </a>

                    </div>
                    <div className='product-detail'>
                        <h2>Cat-eye sunglasses</h2>
                        <h3>$12.99</h3>
                        <div className='buttons'>
                            <button className='button-1'>ADD TO CART</button>
                            <button className='button-2'><FaHeart /></button>
                            <button className='button-3'><FaRegCopy /></button>
                        </div>
                        <p>
                            Calling all backpackers! The Arrowhead Internal Frame Pack is ready for a multi-day adventure out in the backcountry or a single day outing. Crafted out of durable polyester/ripstop fabric and designed with your comfort in mind, this pack features adjustable sternum and waist straps, aluminum stays, padded shoulder straps, and a deluxe cool mesh padded back to keep you cool.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainSectionList