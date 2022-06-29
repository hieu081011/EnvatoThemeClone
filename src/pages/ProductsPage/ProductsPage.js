import React, { useEffect, useState } from 'react'
import './style.scss'
import MainSection from '../../components/MainSectionGrid/MainSection'
import MainSectionList from '../../components/MainSectionList/MainSectionList'
import SideBar from '../../components/SideBar/SideBar'
import { BsFillGrid1X2Fill, BsFillGrid3X3GapFill, BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { AiFillWarning } from 'react-icons/ai'
import Paginate from '../../components/ProductDetail/ProductDetailComponents/Paginate/Paginate'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsDisplay } from '../../actions/products'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
function useQuery() {
    return new URLSearchParams(useLocation().search)

}

const ProductsPage = () => {

    const [displayOptions, setDisplayOptions] = useState({
        main: 'grid', sort: '_id', perPage: 12, type: '', increase: 1,
    })
    const [filter, setFilter] = useState({
        price: [0, 300.00], switch: true
    })
    const location = useLocation().pathname
    const query = useQuery()
    const dispatch = useDispatch()

    let type = ''
    if (location === '/homegarden') {
        type = 'Home Garden'

    }
    if (location === '/megafashion') {
        type = 'Mega Fashion'
    }
    const page = query.get('page') || 1;
    const p = query.get('p')
    const { products, isLoading } = useSelector(state => state.productState)
    useEffect(() => {
        setFilter({ ...filter, price: [0, 300.00] })
    }, [location])
    useEffect(() => {
        if (p && p.match(/\b((\d+|\d+\.\d+)\-(\d+|\d+\.\d+))\b/g)) {
            const priceFilter = p.split('-')
            priceFilter[0] = Number(priceFilter[0]).toFixed(2)
            priceFilter[1] = Number(priceFilter[1]).toFixed(2)
            setFilter({ ...filter, price: priceFilter, switch: !filter.switch })
        }
    }, [p])
    useEffect(() => {

        if (page) {
            dispatch(getProductsDisplay(page, type, displayOptions.sort, displayOptions.perPage, displayOptions.increase, filter.price[0], filter.price[1], location.split('/')[2]))
        }
    }, [dispatch, page, displayOptions, filter.switch, location])


    if (!products.length && !isLoading) return (
        <>
            <div className='products-page-container'>
                <div className='main-content'>
                    <SideBar filter={filter} setFilter={setFilter}></SideBar>
                    <div className='product-grid'>
                        <div className='error-message'>
                            <span><AiFillWarning /></span>
                            We can't find produtcs matching the selection.
                        </div>
                    </div>
                </div>
            </div >
        </>
    )


    return (
        <>
            <div className='products-page-container'>
                <div className='main-content'>

                    <SideBar filter={filter} setFilter={setFilter}></SideBar>
                    <div className='product-grid'>

                        {isLoading ?
                            <LoadingSpinner />
                            :
                            <>
                                <div className='display-product-options'>
                                    <div>
                                        <button className={displayOptions.main == 'grid' ? 'active' : null} onClick={() => (setDisplayOptions({ ...displayOptions, main: 'grid' }))}><BsFillGrid3X3GapFill /></button>
                                        <button className={displayOptions.main == 'list' ? 'active' : null} onClick={() => (setDisplayOptions({ ...displayOptions, main: 'list' }))}><BsFillGrid1X2Fill /></button>
                                        <span>10 items</span>
                                    </div>
                                    <div>
                                        <span>Sort by</span>
                                        <select value={displayOptions.sort} onChange={(e) => setDisplayOptions({ ...displayOptions, sort: e.target.value })}>
                                            <option value='_id'>Position</option>
                                            <option value='name'>Product Name</option>
                                            <option value='price'>Price</option>
                                        </select>
                                        {displayOptions.increase === 1 ?
                                            <span onClick={() => setDisplayOptions({ ...displayOptions, increase: -1 })}><BsFillArrowUpCircleFill /></span> :
                                            <span onClick={() => setDisplayOptions({ ...displayOptions, increase: 1 })}><BsFillArrowDownCircleFill /></span>
                                        }

                                    </div>
                                </div>
                                {displayOptions.main == 'grid' ? <MainSection /> : <MainSectionList />}

                                <div className='showPerPage-option'>
                                    <div><Paginate page={page} /></div>
                                    <div>
                                        Show
                                        <select value={displayOptions.perPage} onChange={(e) => setDisplayOptions({ ...displayOptions, perPage: e.target.value })}>
                                            <option value={12}>12</option>
                                            <option value={24}>24</option>
                                            <option value={36}>36</option>
                                        </select>
                                        per pages
                                    </div>
                                </div>
                            </>

                        }
                    </div>
                </div>
            </div >
        </>
    )
}
export default ProductsPage