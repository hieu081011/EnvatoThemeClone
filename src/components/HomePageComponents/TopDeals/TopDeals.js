import React from "react";
import './style.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'
import CustomImage from "../../CustomImage/CustomImage";
import CustomNumberInput from "../../CustomNumberInput/CustomNumberInput";

const TopDeals = () => {
    return (
        <>
            <div className='topDeals-container'>
                <div className='slide-container-1'>
                    <Splide options={{
                        perPage: 1,
                        pagination: false,
                    }}>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='content-detail'>
                                    <h2> ColourMatch 40 Piece Procelain Dinner Starter Set - Striped</h2>
                                    <h5>SKU:  kitchen_010</h5>
                                    <div>$56.26<h4>$122.00</h4></div>
                                    <p>A decompression valve allows you to get every bit of air out to keep your gear snug. Vertical and horizontal compression straps help you further...</p>
                                    <CustomNumberInput />
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='content-detail'>
                                    <h2> Garden Gazebo</h2>
                                    <h5>SKU:  garden_002</h5>
                                    <div>$55.00<h4>$132.00</h4></div>
                                    <p>This backpack features a dual compartment design and includes two side mesh pockets to hold water bottles as well as a front organizer compartment</p>
                                    <CustomNumberInput />
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='content-detail'>
                                    <h2> Clark 4 Piece Acessory Set - White</h2>
                                    <h5>SKU:  bathroom_002</h5>
                                    <div>$99.00<h4>$122.00</h4></div>
                                    <p>Toss your beach gear, campus books and electronics into the Vortex Day Pack on your next outing. With two main compartments, you'll be organized for...</p>
                                    <CustomNumberInput />
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className='slide-container-2'>
                    <Splide
                        options={{
                            perPage: 2,
                            pagination: false,
                            gap: '2rem',
                            breakpoints: {
                                800: {
                                    gap: '15px'
                                }
                            }
                        }}>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-wrap'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='detail'>
                                    <h3>Clark 4 Piece Acessory Set - White</h3>
                                    <div>$99.00<h3>$122.00</h3></div>
                                    <div>
                                        <CustomNumberInput />
                                        <button >Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-wrap'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='detail'>
                                    <h3>Garden Gazebo</h3>
                                    <div>$55.00<h3>$132.00</h3></div>
                                    <div>
                                        <CustomNumberInput />
                                        <button >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-wrap'>
                                    <CustomImage></CustomImage>
                                </div>
                                <div className='detail'>
                                    <h3>Colour Match 40 Piece Porcelain Dinne...</h3>
                                    <div>$56.00<h3>$122.00</h3></div>
                                    <div>
                                        <CustomNumberInput />
                                        <button >Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </>
    )
}
export default TopDeals