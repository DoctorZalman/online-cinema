import Slider from 'react-slick';
import { POSTER_URL } from '../../consts';
import React from 'react';
import './SecondarySlider.css';

function SecondarySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <div className="poster">
          <img src={`${POSTER_URL}w500/8M6c2sxgPr7PQGWqGclN5whRw7Z.jpg`} alt="poster" />
          <div className="container">
            <div className="btn btn-more-detail defaultButton default-slider-btn-hide">
              <a href="#">More detail</a>
            </div>
            <div className="title-movie">
              <h6>Interstellar</h6>
              <p>
                Rating: <span>7.4</span> /10
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default SecondarySlider;
