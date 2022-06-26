import './style.scss'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
const LogoSlider = () => {
    return (
        <>

            <div className='logo-slider-container'>
                <div className='slide-container'>
                    <Splide options={{
                        gap: '1.5rem',
                        pagination: false,
                        perPage: 6,
                        breakpoints: {
                            1000: {
                                perPage: 5,
                            },
                            700: {
                                perPage: 4,
                            }
                        }

                    }}>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/calvin-klein-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/chicco-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/citizen-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/converse-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/fisher-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/fitbit.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/gucci-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/hm-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/johnson-logo.jpg' />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='img-container'>
                                <img src='http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/220x150/wysiwyg/codazon/Brand/lacoste-logo.jpg' />
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>
        </>
    )
}
export default LogoSlider