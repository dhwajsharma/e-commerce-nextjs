import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gray from "../assets/gray.jpg"
import tshirt from "../assets/tshirt.jpg"
import tshirts from "../assets/tshirts.jpg"

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-900 to-transparent bottom-0 z-20" />

            <Carousel
                autoPlay
                infiniteLoop
                showState={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://image.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://image.freepik.com/free-photo/young-man-black-glasses-wearing-grey-polo-shirt-looking-aside-with-serious-face-standing-blue-wall_141793-57048.jpg" alt="" />

                </div>

                <div>
                    <img loading="lazy" src="https://image.freepik.com/free-psd/white-t-shirt-mockup_125540-617.jpg" alt="" />

                </div>
            </Carousel>
        </div>
    )
}

export default Banner
