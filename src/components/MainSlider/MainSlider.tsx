import React from "react";
import './MainSlider.css'
import DefaultSlider from "../DefaultSlider/Default-Slider";
const MainSlider = () => {
    return (
        <div className='slider-container'>
            <div className='main_container'>
                <DefaultSlider />
            </div>
        </div>
    );
};

export default MainSlider;
