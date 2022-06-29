import React, { useRef, useEffect, useState } from "react";
import './style.scss'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useSelector } from "react-redux";

const ProductSlide = () => {
    const { product } = useSelector((state) => state.productState)
    const mainRef = useRef();
    const thumbRef = useRef();

    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([460, 570]);

    const [showMagnifier, setShowMagnifier] = useState(false);
    const magnifierHeight = 320
    const magnifieWidth = 320
    const zoomLevel = 2.0
    let location;
    if (product.type == "Home Garden") location = 'homegarden'
    if (product.type == 'Mega Fashion') location = 'megafashion'

    useEffect(() => {
        if (mainRef.current && thumbRef.current && thumbRef.current.splide) {
            mainRef.current.sync(thumbRef.current.splide)
        }
    }, [product]);

    if (product && product.length == 0) return (null)
    if (product.image.length == 4) {
        var imgsSrc = [
            `http://localhost:5000/image/product/${location}/${product.image[0]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[1]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[2]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[3]}.jpg`,

        ]


    }
    else {
        var imgsSrc = [
            `http://localhost:5000/image/product/${location}/${product.image[0]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[1]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[2]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[3]}.jpg`,
            `http://localhost:5000/image/product/${location}/${product.image[4]}.jpg`,


        ]
    }
    const thumbImgsSrc = imgsSrc




    return (
        <>
            <div className="product-slide-container">
                <div className="main-slide-container">

                    <Splide
                        ref={mainRef}
                        hasTrack={false}

                        options={{
                            type: 'loop', perPage: 1, rewind: true, width: '540px', pagination: false,

                        }}>
                        <SplideTrack>
                            {
                                imgsSrc.map((imgsrc) => (

                                    <SplideSlide key={imgsrc}>
                                        <div className="slide-detail">
                                            <img
                                                onMouseEnter={(e) => {
                                                    // update image size and turn-on magnifier
                                                    const elem = e.currentTarget;
                                                    // const { width, height } = elem.getBoundingClientRect();
                                                    // setSize([width, height]);
                                                    setShowMagnifier(true);
                                                }}
                                                onMouseMove={(e) => {
                                                    // update cursor position
                                                    const elem = e.currentTarget;
                                                    const { top, left } = elem.getBoundingClientRect();

                                                    // calculate cursor position on the image
                                                    const x = e.pageX - left - window.pageXOffset;
                                                    const y = e.pageY - top - window.pageYOffset;
                                                    setXY([x, y]);
                                                }}
                                                onMouseLeave={() => {
                                                    // close magnifier
                                                    setShowMagnifier(false);
                                                }}
                                                src={imgsrc}></img>
                                            <div
                                                className="magnifier-glass"
                                                style={{
                                                    display: showMagnifier ? "" : "none",


                                                    // prevent magnifier blocks the mousemove event of img
                                                    pointerEvents: "none",
                                                    // set size of magnifier
                                                    height: `${magnifierHeight}px`,
                                                    width: `${magnifieWidth}px`,
                                                    // move element center to cursor pos
                                                    top: `${y - magnifierHeight / 2}px`,
                                                    left: `${x - magnifieWidth / 2}px`,
                                                    opacity: "1", // reduce opacity so you can verify position
                                                    border: "1px solid lightgray",
                                                    backgroundColor: "white",
                                                    backgroundImage: `url(${imgsrc})`,
                                                    backgroundRepeat: "no-repeat",

                                                    //calculate zoomed image size
                                                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                                                        }px`,

                                                    //calculate position of zoomed image.
                                                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                                                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                                                }}
                                            ></div>
                                        </div>
                                    </SplideSlide>
                                ))
                            }

                        </SplideTrack>
                    </Splide>
                </div>
                <div className="thumb-slide-container">
                    <Splide ref={thumbRef}
                        options={{
                            type: 'slide', direction: 'ttb', perPage: 4, pagination: false, width: '100%', drag: false, height: '100%', isNavigation: true, gap: '1rem',
                        }}>
                        {
                            thumbImgsSrc.map((imgsrc) => (
                                <SplideSlide key={imgsrc}>
                                    <div className="img-wrapper">

                                        <img src={imgsrc} />
                                    </div>
                                </SplideSlide>
                            ))
                        }

                    </Splide>
                </div>
            </div>
        </>
    )
}
export default ProductSlide