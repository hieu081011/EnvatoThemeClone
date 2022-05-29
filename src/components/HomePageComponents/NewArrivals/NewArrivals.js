import React from 'react'
import './style.scss'
import CustomImage from '../../CustomImage/CustomImage'
import CustomNumberInput from '../../CustomNumberInput/CustomNumberInput'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
const NewArrivals = () => {
    return (
        <>
            <div className='newArrivals-container'>
                <h2>New Arrivals</h2>
                <div className='slide-container'>
                    <Splide options={{

                        perPage: 4,

                        gap: '1rem',
                        pagination: false,
                    }}>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div class='effect'>
                                    <CustomNumberInput />
                                    <button >Add to Cart</button>
                                </div>
                                <CustomImage></CustomImage>
                                <h3>DOUBLE DOOR MIRRORED BATHROOM CABINET - STAINLESS STEEL</h3>
                                <h4>$23.00<h4>$170.00</h4></h4>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </>
    )
}
export default NewArrivals