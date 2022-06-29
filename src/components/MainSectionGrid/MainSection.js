import React from 'react'
import './style.scss'

import { useSelector } from 'react-redux'
import Product from './Product/Product'
const MainSectionGrid = () => {
    const { products } = useSelector(state => state.productState)
    return (
        <>
            <div className='main-section-grid-container'>
                {
                    products && products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))
                }


            </div>
        </>
    )
}
export default MainSectionGrid