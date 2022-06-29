import React from 'react'
import './style.scss'

import { useSelector } from 'react-redux'

import Product from './Product/Product'
const MainSectionList = () => {
    const { products } = useSelector(state => state.productState)


    return (
        <>
            <div className='main-section-list-container'>
                {products && products.map((product) => (
                    <Product product={product} key={product._id} />
                ))}

            </div>
        </>
    )
}
export default MainSectionList