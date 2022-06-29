import './styles.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import { FaCalendarWeek } from 'react-icons/fa'
const StayInformed = () => {
    return (
        <>
            <div className='stayInformed-container'>
                <h2>Stay Informed @Infinit</h2>
                <div className='slide-container'>
                    <Splide options={{
                        gap: '1.5rem',
                        pagination: false,
                        perPage: 3,


                    }}>
                        <SplideSlide >
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <div className='img-date'>
                                        <FaCalendarWeek />
                                        <h3>Dec 15, 2021</h3>
                                    </div>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/450x293/magefan_blog/blog022.jpg' alt='blog22' />
                                </div>
                                <h2>Dining and Living Room Decor Ideas</h2>
                                <p>You can see colors, patterns and metal finishes online, but digital images are mere approximations...</p>
                                <a >Read more</a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <div className='img-date'>
                                        <FaCalendarWeek />
                                        <h3>Dec 08, 2021</h3>
                                    </div>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/450x293/magefan_blog/blog012.jpg' alt='blog12' />
                                </div>
                                <h2>How to Decorate Your Home</h2>
                                <p>Moving into a new home can be one of life's great joys, but it can also be a time of uncertainly,...</p>
                                <a >Read more</a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <div className='img-date'>
                                        <FaCalendarWeek />
                                        <h3>Dec 08, 2021</h3>
                                    </div>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/450x293/magefan_blog/blog042.jpg' alt='blog42' />
                                </div>
                                <h2>Kitchens and Bathroom</h2>
                                <p>Changing kitchen counters is no small undertaking, but switching from an inexpensive material, like...</p>
                                <a >Read more</a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='slide-detail'>
                                <div className='img-container'>
                                    <div className='img-date'>
                                        <FaCalendarWeek />
                                        <h3>Dec 08, 2021</h3>
                                    </div>
                                    <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/450x293/magefan_blog/blog032.jpg' alt='blog32' />
                                </div>
                                <h2>Bedroom Decor Ideas</h2>
                                <p>It's called a bedroom for a reason: the bed is the key piece of furniture. As such, it should be...</p>
                                <a >Read more</a>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

            </div>
        </>
    )
}

export default StayInformed