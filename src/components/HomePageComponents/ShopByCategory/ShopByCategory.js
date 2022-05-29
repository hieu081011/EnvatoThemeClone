import React from 'react'
import { Splide, SplideSlide, SplideTrack, SplideEventHandlers } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import './style.scss'
const ShopByCategory = () => {
    return (
        <>
            <div className="shopByCategory-container">
                <h1>Shop by category</h1>
                <div className='slide-container'>

                    <Splide options={{
                        type: 'loop',
                        perPage: 6,


                    }}
                        hasTrack={false}
                        className='style-slide'>
                        <SplideTrack>

                            <SplideSlide>
                                <div className='content-detail' >
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate01.png' alt='img   ' />
                                    <h2>
                                        <div></div>Sofa Chair</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail' >
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate02.png' alt='img   ' />
                                    <h2><div></div>Bathroom</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate03.png' alt='img   ' />
                                    <h2><div></div>Decoration</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate08.png' alt='img   ' />
                                    <h2><div></div>Lighting</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate05.png' alt='img   ' />
                                    <h2><div></div>Funiture</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate06.png' alt='img   ' />
                                    <h2><div></div>Tableware</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate07.png' alt='img   ' />
                                    <h2><div></div>Bedroom</h2>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='content-detail'>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/wysiwyg/codazon/main-content-26/cate04.png' alt='img   ' />
                                    <h2><div></div>Kitchen</h2>
                                </div>
                            </SplideSlide>
                        </SplideTrack>

                    </Splide>
                </div>
                <h2>Top Deals of the Days</h2>
            </div>
        </>
    )
}
export default ShopByCategory