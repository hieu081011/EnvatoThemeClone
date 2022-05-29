import React from 'react'
import './style.scss'
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaYoutube, FaTruck, FaLock, FaMoneyBill, FaEnvelopeOpen, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className='footer-wraper'>
                <div className='footer-1'>
                    <div className='footer-1_1'>
                        <span><FaEnvelopeOpen /></span>
                        <div>

                            <h2>Subscribe Us &amp; get up to 30% OFF</h2>
                            <h3>Join The Community To Be Updates Firstly?</h3>
                        </div>
                    </div>
                    <div className='footer-1_2' >
                        <i><FaEnvelope /></i>
                        <input type='text' placeholder='Enter your email address'></input>
                        <button>SUBCRIBE</button>
                    </div>
                </div>
                <div className='footer-2'>
                    <div>
                        <span><FaTruck /></span>
                        <h3>Free Shipping over $100</h3>
                    </div>
                    <div>
                        <span><FaLock /></span>
                        <h3>All payment secured and trusted</h3>

                    </div>
                    <div>
                        <span><FaMoneyBill /></span>
                        <h3>25 days money back guarantee</h3>

                    </div>
                </div>
                <div className='footer-3'>
                    <div>
                        <h2>About shop</h2>
                        <h3>Although, thoday we're even more excited to release our Wireframe Kit.</h3>
                        <h3>Address: Cosmetics Store, United States</h3>
                        <h3>Call us: 1234567890</h3>
                        <h3>Email us: support@company.com</h3>
                    </div>
                    <div>
                        <h2>Codazon.com</h2>
                        <ul>
                            <li>Privacy and Cookie Policy</li>
                            <li>About Us</li>
                            <li>Search Terms</li>
                            <li>Advanced Search</li>
                            <li>Orders and Returns</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Custom Service</h2>
                        <ul>
                            <li>Return Policy</li>
                            <li>Product Recalls</li>
                            <li>Int'I Customers</li>
                            <li>Tax Exempt Program</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Get to know us</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Corporate</li>
                            <li>Suppliers</li>
                            <li>Careers</li>
                            <li>The Digital Museum</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-4'>
                    <div className='footer-4_1'>
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaPinterest /></button>
                        <button><FaLinkedin /></button>
                        <button><FaYoutube /></button>
                    </div>
                    <div>&copy; 2018 Codazon Ltd. Trademarks and brands</div>
                    <div className='footer-4_3'>
                        <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/footer-payment.png' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer