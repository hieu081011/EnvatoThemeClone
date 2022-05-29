import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import './style.scss'
import { FaAngleRight, FaStar, FaQuoteRight } from 'react-icons/fa';
const InfoSlider = () => {
    return (
        <>
            <div className='infoSlider-container'>

                <div className='slide-container'>
                    <Splide options={{

                        perPage: 1,


                    }}
                        hasTrack={false}>
                        <div style={{ position: 'relative' }}>

                            <SplideTrack>

                                <SplideSlide>
                                    <div className='content-detail'>
                                        <div>
                                            <div><FaQuoteRight /></div>
                                            <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-01/testimonial/test-01.jpg' alt='img' />
                                        </div>
                                        <h2>JoAnn wrote on August 26</h2>
                                        <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                        <p>So pretty! Can't wait to use this for miltiple projects.</p>

                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className='content-detail'>
                                        <div>
                                            <div><FaQuoteRight /></div>
                                            <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-01/testimonial/test-02.jpg' alt='img' />
                                        </div>
                                        <h2>Feary wrote on August 27</h2>
                                        <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                        <p>Amazing! Thank you so much !x</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className='content-detail'>
                                        <div>
                                            <div><FaQuoteRight /></div>
                                            <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-01/testimonial/test-03.jpg' alt='img' />
                                        </div>
                                        <h2>Monika wrote on August 28</h2>
                                        <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                        <p>Incredible craftsmanship excited about this one</p>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </div>




                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev"><FaAngleRight /></button>
                            <button className="splide__arrow splide__arrow--next"><FaAngleRight /></button>
                        </div>

                    </Splide>
                </div>
            </div>
        </>
    )
}
export default InfoSlider