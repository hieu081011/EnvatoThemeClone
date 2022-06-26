import React, { useEffect, useState } from 'react'
import './style.scss'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogsBySearch } from '../../../../actions/blogs'
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom'

const BlogSideBar = () => {
    var dropDownNumber = 0;
    const [dropDown, setDropDown] = useState([, , , , , , true, , , , , , true, true, true, , , true])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation().pathname

    const { id: searchParams } = useParams()
    const categories = ['Motorcycle', 'Car', 'Food & Drink', 'Drug Pharmacy', 'Kids', 'Beauty Skin', ['Accessories', 'Gift'], 'Handbag', 'Watches', 'Tools', 'Wind', 'Book', ['Home Decor', 'Ceramics', 'Decoration'], ['Technology', 'Laptop & Computer', 'Cell Phone & Accessories', 'Camera, Photo & Video'], ['Beauty', 'Beauty trends'], 'Jewellery', 'Watches', ['Fashion', 'Fashion Trends', 'Baby - Kids', 'Mens fashion', 'Mega fashion'], 'Flowers', 'Garden', 'Sport', 'Furniture']
    let tags = "fashion home streetstyle home ideas decor hand tools home design design food and health bags shoes technology pink men's fashion kids future of food outfit idea vegetable food and the environment valentine's day gift ideas canon camera sports sneakers smart casual mobile luxury fashion"
    const handleSearch = () => {
        if (search) {

            navigate(`/blogs/search/${search}`)
            dispatch(getBlogsBySearch(search))

        }
    }
    useEffect(() => {
        if (location.slice(0, 13) === '/blogs/search') {

            dispatch(getBlogsBySearch(searchParams))
        }



    }, [location])
    const handlePresskey = (e) => {
        if (e.keyCode === 13) {
            setSearch(e.target.value)
            navigate(`/blogs/search/${search}`)
            dispatch(getBlogsBySearch(search))
        }
    }
    return (
        <>
            <div className='blog-sideBar-container'>
                <div className='sideBar-search'>
                    <div className='input-container'>
                        <input onKeyDown={handlePresskey} onChange={(e) => (setSearch(e.target.value))} value={search} type='text' placeholder='Search posts here...' />
                        <button onClick={handleSearch}><FaSearch /></button>
                    </div>
                </div>
                <div className='sideBar-categories'>
                    <div className='sideBar-categories-header' >
                        <h1>Categories</h1>
                    </div>
                    {categories.map(
                        (category, i) => (Array.isArray(category) ?
                            <>
                                <h2><Link to={`/blogs/category/${category[0]}`} onClick={() => dispatch(getBlogsBySearch(`${category[0]}`))}>{category[0]}<span>&nbsp;(1)</span></Link>

                                    {dropDown[i] ?
                                        <>
                                            <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === i) ? (item = !item) : item)))}>+</span></> :
                                        <>
                                            <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === i) ? (item = !item) : item)))}>-</span>
                                            <ul>
                                                {category.map((listItem, index) => (index == 0 ? null :
                                                    <li><Link to={`/blogs/category/${listItem}`} onClick={() => dispatch(getBlogsBySearch(`${listItem}`))}>{listItem}</Link></li>
                                                ))}

                                            </ul>
                                        </>}

                                </h2>
                            </>
                            :
                            <><h2><Link to={`/blogs/category/${category}`} onClick={() => dispatch(getBlogsBySearch(`${category}`))}>{category}</Link></h2></>

                        )
                    )}


                </div>
                <div className='sideBar-recentPosts'>
                    <div className='recentPosts-header'>
                        <h1>Recent Post</h1>
                    </div>
                    <div className='recent-post'>
                        <div className='img-container'>
                            <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/276x/magefan_blog/blog012.jpg' />

                        </div>
                        <h2>Kitchens and Bathrooms</h2>
                        <h3>December 08, 2021</h3>
                    </div>
                    <div className='recent-post'>
                        <div className='img-container'>
                            <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/276x/magefan_blog/blog022.jpg' />

                        </div>
                        <h2>Kitchens and Bathrooms</h2>
                        <h3>December 08, 2021</h3>
                    </div>
                    <div className='recent-post'>
                        <div className='img-container'>
                            <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/276x/magefan_blog/blog032.jpg' />

                        </div>
                        <h2>Kitchens and Bathrooms</h2>
                        <h3>December 08, 2021</h3>
                    </div>
                    <div className='recent-post'>
                        <div className='img-container'>
                            <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/276x/magefan_blog/blog042.jpg' />

                        </div>
                        <h2>Kitchens and Bathrooms</h2>
                        <h3>December 08, 2021</h3>
                    </div>
                </div>
                <div className='sideBar-archive'>
                    <div className='archive-header'>
                        <h1>Archive</h1>
                    </div>
                    <h2>December 2021</h2>
                    <h2>November 2021</h2>
                    <h2>October 2021</h2>
                    <h2>September 2021</h2>
                    <h2>May 2021</h2>
                    <h2>April 2021</h2>
                    <h2>December 2020</h2>
                    <h2>November 2020</h2>
                    <h2>July 2020</h2>
                    <h2>June 2020</h2>
                    <h2>October 2019</h2>
                    <h2>May 2019</h2>
                    <h2>July 2018</h2>
                    <h2>June 2018</h2>
                    <h2>May 2018</h2>
                    <h2>April 2018</h2>
                    <h2>March 2018</h2>
                    <h2>February 2018</h2>

                </div>
                <div className='sideBar-tags'>
                    <div className='tags-header'>
                        <h1>Tags</h1>
                    </div>
                    <div className='tags-container'>
                        {tags.split(" ").map((item) => (<span key={Math.floor(Math.random() * 100000)}>{item}</span>))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogSideBar