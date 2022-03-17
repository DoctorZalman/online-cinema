import Slider from 'react-slick';
import { POSTER_URL } from '../../consts';
import React, { FC } from 'react';
import './SecondarySlider.css';
import { SecondSliderProps } from './interface';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
};
const SecondarySlider: FC<SecondSliderProps> = ({ sliderData }) => {
  console.log(sliderData);
  return (
    <Slider {...settings}>
      {sliderData.map(({ id, title, poster_path, vote_average }) => (
        <div className="item" key={id}>
          <div className="poster">
            <img src={`${POSTER_URL}w500/${poster_path}`} alt="poster" />
            <div className="container">
              <div className="btn btn-more-detail defaultButton default-slider-btn-hide">
                <a href="#">More detail</a>
              </div>
              <div className="title-movie">
                <h6>{title}</h6>
                <p>
                  Rating: <span>{vote_average}</span> /10
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SecondarySlider;
