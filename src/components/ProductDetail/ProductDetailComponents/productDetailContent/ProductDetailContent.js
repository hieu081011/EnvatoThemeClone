import React, { useState } from "react";
import './style.scss'
import { FaCheckCircle, FaAngleDown, FaRulerHorizontal, FaHeart, FaExchangeAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa'
import CustomNumberInput from '../../../CustomNumberInput/CustomNumberInput'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../actions/auth";
const ProductDetailContent = () => {
    const [dropDown, setDropDown] = useState(false)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)
    const { product } = useSelector((state) => state.productState)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleAddToCart = (addNumber, productId) => {
        if (user) {
            dispatch(addToCart(user.result._id, addNumber, productId))
        }
        else {
            navigate('/login')
        }
    }
    if (!product) return null
    return (
        <>
            <div className="product-detail-content-container">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-stock-status">
                    <h3><i><FaCheckCircle /></i>In Stock</h3>
                    <a>Be The Fisrt To Review This Product</a>
                </div>
                <h3 className="product-sku">SKU <span>{product.sku}</span></h3>
                <h1 className="product-price">${product.price?.toFixed(2)}</h1>
                <div className={dropDown ? 'product-shipping' : 'product-shipping active'}>
                    <div className="product-shipping-header">
                        <div className="header-1">
                            <img src='http://unlimited-12ca8.kxcdn.com/media/codazon/themelayout/images/truck-icon.png' />
                            SHIP TO
                            <img src='http://unlimited-12ca8.kxcdn.com/media/codazon/flags/us.jpg' />
                        </div>
                        <div onClick={() => (setDropDown(!dropDown))} className="header-2">
                            Calculate Shipping Cost
                            <button ><FaAngleDown /></button>
                        </div>

                    </div>




                    <div className={dropDown ? 'product-shipping-content ' : 'product-shipping-content active'}>

                        <h3 >Country<span>*</span></h3>
                        <select>
                            <option>United State</option>
                            <option>Syria</option>
                        </select>
                        <h3>State/Province<span>*</span></h3>
                        <select>
                            <option>Please select a region, state or province</option>
                            <option>Hai Phong</option>
                        </select>
                        <h3>Zip/Postal Code<span>*</span></h3>
                        <input type='text' />
                        <button>Calculate</button>
                    </div>




                </div>
                <h4 style={{ fontSize: '1rem', marginTop: '30px' }}>QTY</h4>
                <div className="product-quality">
                    <CustomNumberInput input={input} setInput={setInput} />
                    <a><span><FaRulerHorizontal /></span>SIZE CHART</a>
                </div>
                <div className="product-buy-buttons">
                    <button className='button-1' onClick={() => handleAddToCart(input, product._id)}>ADD TO CART</button>
                    <button className='button-2'>BUY NOW</button>
                </div>
                <div className="product-social-media">
                    <div className="add-button">
                        <button><span><FaHeart /></span>ADD TO WISH LIST</button>
                        <button><span><FaExchangeAlt /></span>ADD TO COMPARE</button>

                    </div>
                    <div className="social-media-button">
                        <a><FaFacebookF /></a>
                        <a><FaTwitter /></a>
                        <a><FaLinkedinIn /></a>
                        <a><FaPinterest /></a>
                    </div>

                </div>
                <div className="product-overview">
                    <h2>QUICK OVERVIEW</h2>
                    <p>
                        {product.overView}
                    </p>
                </div>
                <div className="product-checkout">
                    <h3>Secured and trusted checkout with</h3>
                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/footer-payment.png' alt='checkout' />

                </div>
            </div>
        </>
    )
}
export default ProductDetailContent