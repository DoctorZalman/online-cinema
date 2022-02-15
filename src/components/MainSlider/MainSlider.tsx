import React from "react";
import './MainSlider.css';
import Slider from "react-slick";

function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    }
    return (
        <div className="slider-container">
            <div className='main_container'>
                <div className="main-slider">
                    <Slider {...settings}>
                        <div className='item-slider'>
                            <div className="slider-details">
                                <div className="description">
                                    <div className="category">
                                        <span className='action-cat'>Action</span>
                                        <span className='adventure-cat'>Advanture</span>
                                        <span className='fantasy-cat'>Fantasy</span>
                                    </div>
                                    <div className='movie-title'>guardians of the galaxy</div>
                                    <div className="movie-details">
                                        <span>Rating</span>
                                    </div>
                                    <div className="add-bnt">
                                        <a href="#">Watch trailer</a>
                                        <a href="#">Add to favorite</a>
                                        <a href="#">Share</a>
                                    </div>

                                    <div className="btn btn-more-detail defaultButton">
                                        <a href='#'>More detail</a>
                                    </div>
                                </div>
                                <div className="poster">
                                    {/*<img src="../../img/slider1.jpg" alt="poster"/>*/}
                                </div>
                            </div>
                        </div>
                        <div className='item-slider'>
                            <div className="desc">1</div>
                            <div className="poster">1</div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;

