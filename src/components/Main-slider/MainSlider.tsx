import React from 'react';
import './MainSlider.css'

const MainSlider = () => {
    return (
        <div className='slider-container'>
            <div className='main_container'>
                <div className="main-slider">
                    <div className="slider-items">
                        <img src="../../img/slider1.jpg" alt="img-poster"/>
                        <img src="../../img/slider2.jpg" alt="img-poster"/>
                        <img src="../../img/slider3.jpg" alt="img-poster"/>
                        <img src="../../img/slider4.jpg" alt="img-poster"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;
