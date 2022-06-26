import React, { useState, useEffect } from 'react'
import './style.scss'
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
    const homeGardenLink = ['New', 'Best sellers', 'Denim Collection', 'Online Exclusive', '-', 'Coats and jackets', 'Puffer jackets', 'Denim jackets', '', 'Knit', 'T-shirt', 'T-shirts', 'Blouses & shirts', 'Tops and braleltes', 'Jeans', 'Trouser', 'Dreses']
    const megaFashionLink = ['Swimwear', 'Skirts', 'Dengarees & Jumpsuits', 'Short', ' ', 'Matching sets', 'Natural Stripes', 'Giftcards',]
    const brandsLink = ['See all', 'Whats new', 'Best sellers', 'Boots and ankle boots', 'Flat shoes', 'Trainers', 'Heeled shoes', 'Sandals', ' ', 'Special prices', '-', 'Giftcards', 'Wedges and platforms']
    const decorLink = ['Whats new', 'See all', 'Beauty', 'Wallets', 'Scarves & foulards', 'Belts', '', 'Mobile Phone Cover', 'Sunglasses', 'Caps & Hats', 'Tights & Socks', '-', 'Giftcards']
    const [activeTag, setActiveTag] = useState(1)
    const [menuTagDropDown, setMenuTagDropDown] = useState([false, false, false, false])
    const location = useLocation()
    useEffect(() => {
        setMobileMenu(false)
    }, [location])
    return (<>

        <div className={mobileMenu ? 'mobileMenu-container activeMenuMobile' : 'mobileMenu-container'}>
            <div className='menu-header'>
                <div onClick={() => { setActiveTag(1) }} className={activeTag === 1 ? 'active-tag' : null}>MENU</div>
                <div onClick={() => { setActiveTag(2) }} className={activeTag === 2 ? 'active-tag' : null}>ACCOUNT</div>
                <div onClick={() => { setActiveTag(3) }} className={activeTag === 3 ? 'active-tag' : null}>SETTINGS</div>
            </div>
            <div className='menu-content'>
                {activeTag === 1 &&
                    <div className='menu-tag'>
                        <div onClick={() => { setMenuTagDropDown([!menuTagDropDown[0], menuTagDropDown[1], menuTagDropDown[2], menuTagDropDown[3]]) }}>HOME GARDEN<span>{menuTagDropDown[0] ? <FaMinus /> : <FaPlus />}</span></div>
                        <div className={menuTagDropDown[0] ? `active-link` : null} >
                            <Link to='/homegarden'>GO TO HOME GARDEN <span><BsArrowUpRightSquareFill /></span></Link>
                            {homeGardenLink.map((tag) => (
                                <h2 key={`${tag}`}>{tag}</h2>
                            ))}
                            <div>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-23.jpg' alt='1' />
                            </div>
                        </div>

                        <div onClick={() => { setMenuTagDropDown([menuTagDropDown[0], !menuTagDropDown[1], menuTagDropDown[2], menuTagDropDown[3]]) }}>MEGA FASHION<span>{menuTagDropDown[1] ? <FaMinus /> : <FaPlus />}</span></div>
                        <div className={menuTagDropDown[1] ? `active-link` : null}>
                            <Link to='/megafashion'>GO TO MEGA FASHIONG <span><BsArrowUpRightSquareFill /></span></Link>
                            {megaFashionLink.map((tag) => (
                                <h2 key={`${tag}`}>{tag}</h2>
                            ))}
                            <div>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-24.jpg' alt='1' />
                            </div>
                        </div>
                        <div onClick={() => { setMenuTagDropDown([menuTagDropDown[0], menuTagDropDown[1], !menuTagDropDown[2], menuTagDropDown[3]]) }}>BRANDS<span>{menuTagDropDown[2] ? <FaMinus /> : <FaPlus />}</span></div>
                        <div className={menuTagDropDown[2] ? `active-link` : null}>
                            <a>GO TO BRANDS <span><BsArrowUpRightSquareFill /></span></a>
                            {brandsLink.map((tag) => (
                                <h2 key={`${tag}`}>{tag}</h2>
                            ))}
                            <div>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-25.jpg' alt='1' />
                            </div>
                        </div>
                        <div onClick={() => { setMenuTagDropDown([menuTagDropDown[0], menuTagDropDown[1], menuTagDropDown[2], !menuTagDropDown[3]]) }}>DECOR & PILLOWS<span>{menuTagDropDown[3] ? <FaMinus /> : <FaPlus />}</span></div>
                        <div className={menuTagDropDown[3] ? `active-link` : null}>
                            <a>GO TO DECOR & PILLOWS <span><BsArrowUpRightSquareFill /></span></a>
                            {decorLink.map((tag) => (
                                <h2 key={`${tag}`}>{tag}</h2>
                            ))}
                            <div>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/menu/banner-26.jpg' alt='1' />
                            </div>
                        </div>
                        <Link to='/blog'>BLOGS</Link>
                        <a>CONTACT</a>

                    </div>
                }
                {activeTag === 2 &&
                    <div className='account-tag'>
                        <a>My Account</a>
                        <a>My Wish List</a>
                        <a>Sign In</a>
                        <a>Default welcome msg!</a>
                        <a>Create an Account</a>
                    </div>
                }
                {activeTag === 3 &&
                    <div className='settings-tag'>
                        <h2>English<span><FaPlus /></span></h2>
                        <h2>USD - US Dollar<span><FaPlus /></span></h2>
                        <h2>Home Decor Store<span><FaPlus /></span></h2>
                    </div>
                }

            </div>
        </div>
        {mobileMenu &&
            <div onClick={() => { setMobileMenu(false) }} className='mobileMenu-background'>
                <span><FaTimes /></span>
            </div>
        }
    </>)
}
export default MobileMenu