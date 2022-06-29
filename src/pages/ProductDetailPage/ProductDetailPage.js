import React, { useEffect } from 'react'
import './style.scss'
import ProductDetailContent from '../../components/ProductDetail/ProductDetailComponents/productDetailContent/ProductDetailContent'
import ProductDetailTabs from '../../components/ProductDetail/ProductDetailComponents/productDetailTabs/ProductDetailTabs'
import ProductDetailSlide from '../../components/ProductDetail/ProductDetailComponents/productDetailSlide/ProductSlide'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../actions/products'
import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
const ProductDetailPage = () => {
    window.scrollTo(0, 0);
    const { productId } = useParams()

    const dispatch = useDispatch()
    const { product, isLoading } = useSelector((state) => state.productState)

    useEffect(() => {
        dispatch(getProduct(productId))
    }, [dispatch, productId])

    if (!productId.match(/^[0-9a-fA-F]{24}$/) || !product) {
        return (<>
            <ErrorPage />
        </>)

    } else {
        return (<>
            <div className='product-detail-page-container'>
                {isLoading ?
                    <LoadingSpinner />
                    :
                    <>
                        <div className='top-section'>
                            <ProductDetailSlide></ProductDetailSlide>
                            <ProductDetailContent></ProductDetailContent>
                        </div>
                        <ProductDetailTabs></ProductDetailTabs>
                    </>
                }
            </div>
        </>)
    }

}
export default ProductDetailPage