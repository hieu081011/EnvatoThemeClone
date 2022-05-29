import React, { useState } from 'react'
import './style.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
const BrandFilter = () => {
    const [logoList, setLogoList] = useState([
        {
            logo1: 'britax',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/britax-logo.jpg',
            logo2: 'calvin',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/calvin-klein-logo.jpg',
            logo3: 'chicco',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/chicco-logo.jpg'
        },
        {
            logo1: 'citizen',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/citizen-logo.jpg',
            logo2: 'converse',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/converse-logo.jpg',
            logo3: 'fisher',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/fisher-logo.jpg'
        },
        {
            logo1: 'fitbit',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/fitbit.jpg',
            logo2: 'channel',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/gucci-logo.jpg',
            logo3: 'h&m',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/hm-logo.jpg'
        },
        {
            logo1: 'johnson',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/johnson-logo.jpg',
            logo2: 'lacoste',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/lacoste-logo.jpg',
            logo3: 'lego',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/lego-logo.jpg'
        },
        {
            logo1: 'mac',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/mac-logo.jpg',
            logo2: 'opti',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/opti-logo.jpg',
            logo3: 'oralb',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/oral-b-logo.jpg'
        },
        {
            logo1: 'pull&bear',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/pullbear-logo.jpg',
            logo2: 'puma',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/puma-logo.jpg',
            logo3: 'samsung',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/samsung-logo.jpg'
        },
        {
            logo1: 'senkonda',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/senkoda-logo.jpg',
            logo2: 'sony',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/sony-logo.jpg',
            logo3: 'tommee',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/tommee-logo.jpg'
        },
        {
            logo1: 'usn',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/usn-logo.jpg',
            logo2: 'verawang',
            logo2src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/vera-wang-logo.jpg',
            logo3: 'victoria',
            logo3src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/victoria-logo.png'
        },
        {
            logo1: 'zara',
            logo1src: 'http://unlimited-12ca8.kxcdn.com/media/codazon_cache/brand/150x150/wysiwyg/codazon/Brand/zara-logo.png',
            logo2: '',
            logo2src: '',
            logo3: '',
            logo3src: ''
        },
    ])
    return (
        <>
            <div className='brand-filter-wrapper'>
                <h2>Featured Brands</h2>
                <div className='logo-slider-container'>

                    <Splide
                        options={{

                            perPage: 3,
                            rewind: false,
                            perMove: 1,
                            pagination: false,
                        }}
                    >
                        {logoList.map((item) => (
                            <SplideSlide>
                                <div className='slide-content'>
                                    <a>
                                        <img src={item.logo1src} />
                                    </a>
                                    <a>
                                        <img src={item.logo2src} />
                                    </a>
                                    <a>
                                        <img src={item.logo3src} />
                                    </a>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    )
}
export default BrandFilter