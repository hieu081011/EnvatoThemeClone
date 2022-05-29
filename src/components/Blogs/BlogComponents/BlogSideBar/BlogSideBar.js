import React, { useState } from 'react'
import './style.scss'
import { FaSearch } from 'react-icons/fa'
import { text } from '@fortawesome/fontawesome-svg-core'
const BlogSideBar = () => {
    const [dropDown, setDropDown] = useState([true, true, true, true, true, true])
    let tags = "fashion home streetstyle home ideas decor hand tools home design design food and health bags shoes technology pink men's fashion kids future of food outfit idea vegetable food and the environment valentine's day gift ideas canon camera sports sneakers smart casual mobile luxury fashion"
    return (
        <>
            <div className='blog-sideBar-container'>
                <div className='sideBar-search'>
                    <div className='input-container'>
                        <input type='text' placeholder='Search posts here...' />
                        <button><FaSearch /></button>
                    </div>
                </div>
                <div className='sideBar-categories'>
                    <div className='sideBar-categories-header'>
                        <h1>Categories</h1>
                    </div>

                    <h2>Motorcycle</h2>
                    <h2>Car</h2>
                    <h2>Food & Drink</h2>
                    <h2>Drug Pharmacy</h2>
                    <h2>Kids</h2>
                    <h2>Beauty Skin</h2>
                    <h2>Accessories
                        {dropDown[1] ?
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 1) ? (item = !item) : item)))}>+</span></> :
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 1) ? (item = !item) : item)))}>-</span>
                                <ul>
                                    <li>Gift</li>
                                </ul>
                            </>}

                    </h2>
                    <h2>Handbag</h2>
                    <h2>Watches</h2>
                    <h2>Tools</h2>
                    <h2>Wind</h2>
                    <h2>Book</h2>
                    <h2>Home Decor
                        {dropDown[2] ?
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 2) ? (item = !item) : item)))}>+</span></> :
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 2) ? (item = !item) : item)))}>-</span>
                                <ul>
                                    <li>Ceramics</li>
                                    <li>Decoration</li>
                                </ul>
                            </>}


                    </h2>
                    <h2>Technology
                        {dropDown[3] ?
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 3) ? (item = !item) : item)))}>+</span></> :
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 3) ? (item = !item) : item)))}>-</span>
                                <ul>
                                    <li>Laptop & Computer</li>
                                    <li>Cell Phones & Accessories</li>
                                    <li>Camera, Photo & Video</li>
                                </ul>
                            </>}


                    </h2>
                    <h2>Beauty
                        {dropDown[0] ?
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 0) ? (item = !item) : item)))}>+</span></> :
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 0) ? (item = !item) : item)))}>-</span>
                                <ul>
                                    <li>Beauty trends</li>
                                </ul>
                            </>}

                    </h2>
                    <h2>Jewellery</h2>
                    <h2>Watches</h2>
                    <h2>Fashion
                        {dropDown[4] ?
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 4) ? (item = !item) : item)))}>+</span></> :
                            <>
                                <span onClick={() => setDropDown(dropDown.map((item, index) => ((index === 4) ? (item = !item) : item)))}>-</span>
                                <ul>
                                    <li>Fashion Trends</li>
                                    <li>Baby - Kids</li>
                                    <li>Stylist Fashionista</li>
                                    <li>Mens fashion</li>
                                    <li>Mega fashion</li>
                                </ul>
                            </>}

                    </h2>
                    <h2>Flowers</h2>
                    <h2>Garden</h2>
                    <h2>Sport</h2>
                    <h2>Furniture</h2>

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
                        {tags.split(" ").map((item) => (<span>{item}</span>))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogSideBar