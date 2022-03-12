import React from "react";
import Slider from 'react-slick';
import './Default-Slider.css';


function DefaultSlider() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6
        }
        return (
            <div className="default-slider">
                <div className="title">
                    <h2>in cinema</h2>
                    <a href="#">view all</a>
                </div>
                <div className="tabs">
                    <ul>
                        <li className='active'><a href="#">#action</a></li>
                        <li><a href="">#adventure</a></li>
                        <li><a href="">#fantasy</a></li>
                    </ul>
                </div>
                <Slider {...settings}>
                    <div className='item'>

                        <div className="poster">
                            <div className="hvr-inner ">
                                <button className='defaultButton'>Read more </button>
                            </div>
                            <div className="title-in">
                                <h6><a href="#">Interstellar</a></h6>
                                <p>Rating: <span>7.4</span> /10</p>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
export default DefaultSlider;