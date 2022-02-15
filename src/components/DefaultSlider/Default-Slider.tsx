import React from "react";
import Slider from 'react-slick';
import './Default-Slider.css';

function DefaultSlider() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1
        }
        return (
            <div className="main-slider">
                <Slider {...settings}>
                    <div className='item'>
                        <div className="desc">1</div>
                        <div className="poster">1</div>
                    </div>
                </Slider>
            </div>
        );
    }
export default DefaultSlider;