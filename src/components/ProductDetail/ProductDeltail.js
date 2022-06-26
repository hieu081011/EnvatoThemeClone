import React from "react";
import './style.scss'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductSlide from './ProductDetailComponents/productDetailSlide/ProductSlide'
import ProductDetailContent from "./ProductDetailComponents/productDetailContent/ProductDetailContent";
import ProductDetailTabs from "./ProductDetailComponents/productDetailTabs/ProductDetailTabs";
const ProductDetail = () => {
    return (
        <>
            <div className="product-detail-container">
                <ProductDetailContent></ProductDetailContent>
            </div>
        </>
    )
}
export default ProductDetail