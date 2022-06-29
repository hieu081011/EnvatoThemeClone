import React, { useState, useEffect } from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { FaAngleDown, FaHeart, FaCircle, FaUserCircle, FaShoppingBasket, FaSearch } from 'react-icons/fa'
import { BsSearch, BsGearWideConnected, BsXLg, BsPencilFill } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getCart, deleteInCart } from '../../actions/auth'
const Header = ({ setLoginModal, loginModal }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const user = JSON.parse(localStorage.getItem('profile'));
    const { cart } = useSelector((state) => state.auth)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {

        navigate(`/search/${searchQuery}`)
        setOpenSearch(false)
    }
    const handleKeyPress = (e) => {
        if (e.code === 'Enter' && searchQuery !== '') {
            navigate(`/search/${searchQuery}`)
            setOpenSearch(false)
        }
    }
    useEffect(() => {
        setOpenCart(false)
        setLoginModal(false)
    }, [location])
    useEffect(() => {
        if (user) {
            dispatch(getCart(user.result._id))
        }
    }, [])
    useEffect(() => {
        loginModal == true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }, [loginModal]);

    return (
        <>
            <div className="main-header-container">
                <div className="left-content">
                    <p>Need Help? Call us now: <a style={{ color: '#E1A512' }} href="#">(123) 455688719</a></p>
                </div>
                <div className="right-content">
                    <button type="button">USD-US Dollar <FaAngleDown /> </button>
                    <button type="button"> <img src='http://unlimited-12ca8.kxcdn.com/static/version1652433738/frontend/Codazon/unlimited_home_decor/en_US/images/flags/flag_store26_en.gif' />English<FaAngleDown />
                    </button>
                    <button type="button"><FaHeart />Wish List</button>
                    <button type="button" onClick={() => { setLoginModal(true) }}><FaUserCircle />Your Account</button>
                    <div className='cart' type="button"><span onClick={() => setOpenCart(!openCart)}><FaShoppingBasket />&nbsp;Your Cart</span>
                        {openCart &&
                            <div>
                                <div className='cart-heading'>
                                    YOUR CART <span>{Object.keys(cart).length ? `${cart.items?.length} Items` : null}</span>
                                </div>
                                {Object.keys(cart).length !== 0 ?
                                    <>
                                        <div className='product-container'>
                                            {cart?.items && cart.items.map(
                                                (product) => (

                                                    <div className='product' key={product.productId}>
                                                        <div className='left-section'>
                                                            <button onClick={() => { dispatch(deleteInCart(user?.result._id, product.productId)); setOpenCart(true) }}><BsXLg /></button>
                                                            <button><BsPencilFill /></button>
                                                        </div>
                                                        <Link to={`/${product.productId}`} className='image-container'>

                                                            <img src={`http://localhost:5000/image/product/${product.type == 'Mega Fashion' ? `megafashion` : `homegarden`}/${product.image[0]}.jpg`} />
                                                            <div >{product.name}</div>
                                                        </Link>

                                                        <div className='right-section'>
                                                            <h3>${(product.price)?.toFixed(2)}</h3>
                                                            <label>QTY:<input type='text' value={product.qty} readOnly /></label>
                                                        </div>
                                                    </div>
                                                )
                                            )}

                                        </div>
                                        <div className='product-footer'>
                                            <label>CART SUBTOTAL:<span>${(cart.totalPrice)?.toFixed(2)}</span></label>
                                            <Link to='/checkout'>
                                                <button>VIEW AND EDIT CART</button>
                                            </Link>
                                            <Link to='/checkout'>
                                                <button>GO TO CHECKOUT</button>
                                            </Link>
                                        </div>
                                    </> :
                                    <>
                                        <div style={{ color: "black", textAlign: 'center', marginBottom: '20px', }}>You have no items in your shopping cart.</div>
                                    </>
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="menu-content">
                    <div className="menu-left">
                        <Link to='/'>
                            <img src="/images/logo.svg"
                                alt="logo" />
                        </Link>

                    </div>
                    <div className="menu-center">
                        <Link to='/homegarden' className="furniture" >
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
                            </div>HOME GARDEN
                        </Link>

                        <Link to='/megafashion' className="mattersses">

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

                            </div>MEGA FASHION

                        </Link>
                        <a href="#" className="renovation">
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
                            </div>BRANDS
                        </a>
                        <a href="#" className="decor">
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
                        <Link to="/blogs">BLOGS</Link>
                        <Link to="/create">Create</Link>


                    </div>
                    <div className="menu-right">
                        <button onClick={() => { setOpenSearch(!openSearch) }}>{openSearch ? <BsXLg /> : <BsSearch />}</button>
                    </div>
                </div>
                {openSearch &&

                    <div className='menu-search-bar'>
                        <div className='select-search-options'>
                            <select>
                                <option>All Category</option>
                                <option>Sport</option>
                                <option>Jewellery</option>
                                <option>Toys</option>
                                <option>Beauty</option>
                                <option>Watches</option>
                            </select>
                        </div>
                        <input value={searchQuery} onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => setSearchQuery(e.target.value)} type='text' placeholder='SEARCH ENTIRE STORE HERE...' />
                        <a><BsGearWideConnected /></a>
                        <a onClick={handleSearch}><span ><BsSearch /></span></a>
                    </div>
                }
            </div>
        </>
    )
}
export default Header