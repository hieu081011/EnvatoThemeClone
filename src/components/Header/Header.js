import React from 'react'
import './styles.scss'
import { FaAngleDown, FaHeart, FaCircle, FaUserCircle, FaShoppingBasket, FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <div className="main-header-container">
                <div className="left-content">
                    <p>Need Help? Call us now: <a style={{ color: '#E1A512' }} href="facebook.com">(123) 455688719</a></p>
                </div>
                <div className="right-content">
                    <button type="button">USD-US Dollar <FaAngleDown /> </button>
                    <button type="button"> <img src='http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/flags/flag_store26_en.gif' />English<FaAngleDown />
                    </button>
                    <button type="button"><FaHeart />Wish List</button>
                    <button type="button"><FaUserCircle />Your Account</button>
                    <button type="button"><FaShoppingBasket />Your Cart</button>
                </div>
                <div className="menu-content">
                    <div className="menu-left">
                        <img src="http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/logo.svg"
                            alt="logo" />
                    </div>
                    <div className="menu-center">
                        <a href="facebook.com" className="furniture">
                            <div className='furniture-detail'>
                                <div className="furniture-list-1">
                                    <ul>
                                        <li>New</li>
                                        <li>Best sellers</li>
                                        <li>Denim Collection</li>
                                        <li>Online exclusive</li>
                                        <li className="no-hover">-</li>
                                        <li>Coats and jackets</li>
                                        <li>Puffer jackets</li>
                                        <li>Denim jackets</li>

                                    </ul>
                                </div>
                                <div className="furniture-list-2">
                                    <ul>
                                        <li>Knit</li>
                                        <li>T-shirts</li>
                                        <li>T-shirts</li>
                                        <li>Blourses & shirts</li>
                                        <li>Tops and bralettes</li>
                                        <li>Jeans</li>
                                        <li>Trousers</li>
                                        <li>Dresses</li>

                                    </ul>
                                </div>
                                <div className="furniture-picture">
                                    <img src="http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-23.jpg" alt="" />
                                </div>
                            </div>FURNITURE
                        </a>
                        <a href="facebook.com" className="mattersses">
                            <div className="furniture-detail mattersses-detail">
                                <div className="furniture-list-1" style={{ minWidth: '210px' }}>
                                    <ul>
                                        <li>Swimwear</li>
                                        <li>Skirts</li>
                                        <li>Dungarees & Jumpsuits</li>
                                        <li>Shorts</li>
                                        <li className="no-hover">-</li>
                                        <li>Matching sets</li>
                                        <li>Natural Stripes</li>
                                        <li>Giftcards</li>
                                    </ul>
                                </div>
                                <div className="furniture-picture">
                                    <img style={{ width: '100%', minWidth: '100px' }}
                                        src="http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-24.jpg" alt="" />
                                </div>

                            </div>MATTERSSES
                        </a>
                        <a href="facebook.com" className="renovation">
                            <div className="furniture-detail renovation-detail">
                                <div className="furniture-list-1 renovation-list-1">
                                    <ul>
                                        <li>See all</li>
                                        <li>What's new</li>
                                        <li>Best sellers</li>
                                        <li>Boots and ankle boots</li>
                                        <li>Flat shoes</li>
                                        <li>Trainers</li>
                                        <li>Heeled shoes</li>
                                        <li>Sandals</li>
                                    </ul>
                                </div>
                                <div className="furniture-list-2 renovation-list-2">
                                    <ul>
                                        <li>Special prices</li>
                                        <li className="no-hover">-</li>
                                        <li>Giftcards</li>
                                        <li>Wedges and platforms</li>
                                    </ul>
                                </div>
                                <div className="furniture-picture renovation-picture">
                                    <img style={{ width: '100%' }}
                                        src="http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-25.jpg" alt="" />
                                </div>
                            </div>RENOVATION
                        </a>
                        <a href="facebook.com" className="decor">
                            <div className="furniture-detail decor-detail">
                                <div className="furniture-list-1 decor-list-1">
                                    <ul>
                                        <li>What's new</li>
                                        <li>See all</li>
                                        <li>Beauty</li>
                                        <li>Wallets</li>
                                        <li>Scarves & foulards</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div className="furniture-list-2 decor-list-2">
                                    <ul>
                                        <li>Mobile Phone Cover</li>
                                        <li>Sunglasses</li>
                                        <li>Caps & Hats</li>
                                        <li>Tights & Socks</li>
                                        <li className="no-hover">-</li>
                                        <li>Giftcards</li>
                                    </ul>
                                </div>
                                <div className="furniture-picture decor-picture">
                                    <img style={{ width: '100%' }}
                                        src="http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-27.jpg" alt="" />
                                </div>
                            </div>Décor &amp; Pillows
                        </a>
                        <a href="facebook.com">BLOGS</a>
                        <a href="facebook.com">CONTACT US</a>

                    </div>
                    <div className="menu-right">
                        <button><FaSearch /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header