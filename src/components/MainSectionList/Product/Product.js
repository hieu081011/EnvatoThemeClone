import React from 'react'
import './style.scss'
import { useLocation, Link } from 'react-router-dom'
import { FaHeart, FaRegCopy, FaRegEye } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../actions/auth'
const Product = ({ product }) => {
    const dispatch = useDispatch()
    const location = useLocation().pathname.split('/')[1]
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleAdd = (userId, addNumber, productId) => {
        if (user) {
            dispatch(addToCart(userId, addNumber, productId))
        }
    }
    return (
        <>
            <div className='productOfMainSectionList'>
                <div className='img-container'>
                    <button>
                        <FaRegEye />
                    </button>


                    <Link to={`/${product._id}`}>
                        <img className='main-img' alt={product.image[0]} src={`https://evento-clone-project.herokuapp.com/image/product/${product.type === 'Home Garden' ? 'homegarden' : 'megafashion'}/${product.image[0]}.jpg`} />
                        <img className='sub-img' alt={product.image[1]} src={`https://evento-clone-project.herokuapp.com/image/product/${product.type === 'Home Garden' ? 'homegarden' : 'megafashion'}/${product.image[1]}.jpg`} />
                    </Link>


                </div>
                <div className='product-detail'>
                    <Link to={`/${product._id}`}>

                        <h2>{product?.name}</h2>
                    </Link>

                    <h3>${product.price.toFixed(2)}</h3>
                    <div className='buttons'>
                        <button className='button-1' onClick={() => handleAdd(user.result._id, 1, product._id)}>ADD TO CART</button>
                        <button className='button-2'><FaHeart /></button>
                        <button className='button-3'><FaRegCopy /></button>
                    </div>
                    <p>
                        {product.overView}
                    </p>
                </div>
            </div>
        </>)
}
export default Product