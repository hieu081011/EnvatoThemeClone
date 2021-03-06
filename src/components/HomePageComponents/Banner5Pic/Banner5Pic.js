import React from "react";
import './style.scss'

const Banner5Pic = () => {
    return (
        <>
            <div className="banner5pic-container">
                <div className="img1">
                    <img src="/images/banner04.jpg" alt="" />
                    <div className='img-content'>
                        <h3>Lowest Prices</h3>
                        <h2>Big Sale 15% Off</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="img2">
                    <img src="/images/banner02.jpg" alt="" />
                    <div className='img-content'>
                        <h2>Decoration</h2>
                    </div>
                </div>
                <div className="img3">
                    <img src="/images/banner03.jpg" alt="" />
                    <div className='img-content'>

                        <h2>Living Room</h2>

                    </div>
                </div>
                <div className="img4">
                    <img src="/images/banner01.jpg" alt="" />
                    <div className='img-content'>

                        <h2>Bathroom</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="img5">
                    <img src="/images/banner05.jpg" alt="" />
                    <div className='img-content'>

                        <h2>Trending 2021</h2>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner5Pic;