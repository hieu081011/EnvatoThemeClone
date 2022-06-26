import react, { useState, useEffect } from 'react'
import './style.scss'
import { Splide, SplideSlide, SplideTrack, SplideEventHandlers } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';

import { FaAngleRight } from 'react-icons/fa';


const SliderBanner = () => {

    const [state, setState] = useState('animated');
    const handleEvent = () => {
        setState('')
    }
    useEffect(() => {
        if (state == '') {
            setState('animated')
        }
    }, [state])
    return (

        <>

            <div className="banner-slider-wrapper">
                <Splide options={{
                    type: 'loop',
                    breakpoints: {
                        800: {
                            pagination: false,

                        }
                    }

                }}
                    onDragged={handleEvent}
                    aria-labelledby="My Favorite Images"
                    hasTrack={false}
                >
                    <SplideTrack>

                        <SplideSlide >
                            <div className='banner-slider-container'>
                                <img src="http://unlimited-12ca8.kxcdn.com/media/slideshow/cache/1900x910/wysiwyg/codazon/main-content-26/slideshow02.jpg" alt="Image 1" />
                                <div className='banner-detail-1'>
                                    <h4>NEW COLLECTION</h4>
                                    <h1 className={state}>HOME DECOR IDEAS</h1>
                                    <p className={state}>One that believes it is perfectly possible to create the perfect home at perfectly<br></br>reasonable prices.Everything we make is designed with one thing in mind: to <br></br> comple ment your home beautifully.</p>
                                    <button className={state}>SHOP NOW</button>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='banner-slider-container'>

                                <img src="http://unlimited-12ca8.kxcdn.com/media/slideshow/cache/1900x910/wysiwyg/codazon/main-content-26/slideshow03.jpg" alt="Image 2" />
                                <div className='banner-detail-2'>
                                    <h4>MAX LOOKS, MIN PRICES</h4>
                                    <h1 className={state}>MUST-HAVES ARE BACK!</h1>
                                    <button className={state}>SHOP NOW</button>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>

                </Splide>
            </div>
        </>
    )
}
export default SliderBanner