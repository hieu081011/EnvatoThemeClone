import React, { useState } from 'react'
import './style.scss'
import { Link, useLocation } from 'react-router-dom'
import CustomImage from '../../CustomImage/CustomImage'
import CustomNumberInput from '../../CustomNumberInput/CustomNumberInput'
import { addToCart } from '../../../actions/auth'
import { useDispatch } from 'react-redux'
const Product = ({ product }) => {
    const location = useLocation().pathname
    const dispatch = useDispatch()
    const [input, setInput] = useState(1)
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleAdd = (userId, addNumber, productId) => {
        if (user) {
            dispatch(addToCart(userId, addNumber, productId))
        }
    }


    return (<>
        <div className='productOfMainSectionGrid'>
            <div className='effect'>
                <CustomNumberInput input={input} setInput={setInput} />
                <button onClick={() => handleAdd(user.result._id, input, product._id)} >Add to Cart</button>
            </div>
            <Link to={`/${product._id}`}>
                <CustomImage img1={`http://localhost:5000/image/product${location}/${product.image[0]}.jpg`} img2={`http://localhost:5000/image/product${location}/${product.image[1]}.jpg`} />
            </Link>
            <div className='product-content'>
                <Link to={`/${product._id}`}>{product.name}</Link>

                <h2>${(product.price).toFixed(2)}</h2>
            </div>
        </div>
    </>)
}
export default Product