import React from 'react'
import './style.scss'
import PriceRange from './sideBarComponents/PriceRange/PriceRange'
import Manufacture from './sideBarComponents/ManufacturerSelect/Manufacture'
import ColorFilter from './sideBarComponents/ColorSelect/ColorFilter'
import MaterialFilter from './sideBarComponents/ClothingMaterial/CloththingMaterial'
import StockFilter from './sideBarComponents/StockFilter/StockFilter'
import RatingFilter from './sideBarComponents/RatingFilter/RatingFilter'
import BrandFilter from './sideBarComponents/BrandFilter/BrandFilter'
import SearchBrand from './sideBarComponents/SearchBrand/SearchBrand'
const SideBar = ({ filter, setFilter }) => {
    return (
        <>  <div className='sideBar'>

            <div className='sidebar-container'>
                <h2>Shop By</h2>
                <h3>SHOPPING OPTIONS</h3>
                <PriceRange filter={filter} setFilter={setFilter}></PriceRange>
                <Manufacture></Manufacture>
                <ColorFilter></ColorFilter>
                <MaterialFilter></MaterialFilter>
                <StockFilter></StockFilter>
                <RatingFilter></RatingFilter>

            </div>
            <SearchBrand></SearchBrand>
            <BrandFilter></BrandFilter>

        </div>


        </>
    )
}
export default SideBar