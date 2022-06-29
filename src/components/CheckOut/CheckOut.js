import React, { useEffect, Fragment, useState } from 'react'
import './style.scss'
import { FaRegHeart, FaPen, FaTimes, FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { TiArrowSync } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, deleteInCart, updateCart } from '../../actions/auth'
import { Link } from 'react-router-dom'
const CheckOut = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const { cart } = useSelector((state) => state.auth)
    const [shippingFee, setShippingFee] = useState(15)


    const [dropDown, setDropDown] = useState([false, false])
    const handleDelete = (userId, productId) => {


        dispatch(deleteInCart(userId, productId))
    }
    const handleUpdate = (userId, cart) => {
        dispatch(updateCart(userId, cart))
    }

    const handleChangeQty = (event, id) => {
        if (event.target.value < 0) {
            dispatch({ type: 'CHANGE QTY CART', payload: { id: id, qty: Number(1) } })
        }
        else if (event.target.value > 99) {
            dispatch({ type: 'CHANGE QTY CART', payload: { id: id, qty: Number(99) } })
        }
        else {
            dispatch({ type: 'CHANGE QTY CART', payload: { id: id, qty: event.target.value } })
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            dispatch(getCart(user.result._id))

            // console.log(ca)
        }
    }, [])


    return (
        <>
            <div className='checkOut-page-container'>
                <h1>Shopping Cart</h1>
                <div className='checkOut-page-content'>
                    <div className='item-display'>
                        <div className='table-title'>
                            <h4>ITEM</h4>
                            <h4>&nbsp;</h4>
                            <h4>PRICE</h4>
                            <h4>QTY</h4>
                            <h4>SUBTOTAL</h4>
                        </div>
                        <div className='products-list'>
                            {Array.isArray(cart?.items) && cart.items.map((product) => (<Fragment key={product.productId}>

                                <div className='product'>
                                    <Link className='product-image' to={`/${product.productId}`}>
                                        <img alt={product.productId} src={`https://evento-clone-project.herokuapp.com/image/product/${product.type === 'Mega Fashion' ? `megafashion` : `homegarden`}/${product && product.image[0]}.jpg`} />
                                    </Link>

                                    <Link className='product-title' to={`/${product.productId}`}>

                                        {product.name}
                                    </Link>
                                    <h4 className='product-price'>${(product.price).toFixed(2)}</h4>
                                    <input type='number' value={product.qty} onChange={(e) => { handleChangeQty(e, product.productId) }} />
                                    <h4 className='product-subtitle'>${(Number(product.price) * Number(product.qty)).toFixed(2)}</h4>
                                    <div className='product-buttons'>
                                        <span><FaRegHeart /></span>
                                        <span ><FaPen /></span>
                                        <span onClick={() => handleDelete(user.result._id, product.productId)}><FaTimes /></span>
                                    </div>
                                </div>
                            </Fragment>))}
                        </div>
                        <div className='bottom-buttons'>
                            <button><span><FaAngleLeft /></span>CONTINUE SHOPPING</button>
                            <div></div>
                            <button>MOVE ALL TO WISH LIST</button>
                            <button onClick={() => handleUpdate(user.result._id, cart)}><span><TiArrowSync /></span>UPDATE SHOPPING CART</button>
                        </div>
                    </div>
                    <div className='cart-summary'>
                        <div>SUMMARY</div>
                        <div onClick={() => setDropDown([!dropDown[0], dropDown[1]])}>ESTIMATE SHIPPING AND TAX <span >{dropDown[0] ? <FaAngleUp /> : <FaAngleDown />}</span></div>
                        {dropDown[0] &&
                            <div className='shipping-option'>
                                <h4>Enter your desination to get a shipping estimate.</h4>
                                <h4>Country</h4>
                                <select>
                                    <option>Viet Nam</option>
                                    <option>Lao</option>
                                    <option>Campuchia</option>
                                </select>
                                <h4>State/Province</h4>
                                <input type='text' />
                                <h4>Zip/Postal Code</h4>
                                <input type='text' />
                                <h5>Best Way</h5>
                                <label><input type='radio' onChange={(e) => setShippingFee(e.target.value)} value={15.00} checked={Number(shippingFee) === 15} />Table Rate $15.00</label>
                                <h5>Flat Rate</h5>
                                <label><input type='radio' onChange={(e) => setShippingFee(e.target.value)} value={40.00} checked={Number(shippingFee) === 40} /> Fixed $40.00</label>
                            </div>
                        }
                        <div className='summary-content'>
                            <div>Subtotal <span>${(cart?.totalPrice ? cart.totalPrice : 0).toFixed(2)}</span></div>
                            <div>Shipping {Number(shippingFee) === 15 ? `(Best Way - Table Rate)` : `(Flat Rate - Fixed)`} <span>${(Number(shippingFee) === 15 ? 15 : 40).toFixed(2)}</span></div>
                            <div>Order Total<span>${(Number(shippingFee) + Number(cart?.totalPrice ? cart.totalPrice : 0)).toFixed(2)}</span></div>
                        </div>

                        <div className="subTitle2" onClick={() => setDropDown([dropDown[0], !dropDown[1]])}>APPLY DISCOUNT CODE<span>{dropDown[1] ? <FaAngleUp /> : <FaAngleDown />}</span></div>
                        {dropDown[1] &&
                            <div className='discount'>
                                <h4>Enter discount code</h4>
                                <input type='text' placeholder='Enter discount code' />
                                <button>APPLY DISCOUNT</button>
                            </div>
                        }
                        <button>PROCEED TO CHECKOUT</button>
                        <h4>Check Out with Multiple Addresses</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckOut