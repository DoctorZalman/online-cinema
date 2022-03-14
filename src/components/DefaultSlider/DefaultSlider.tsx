import React from 'react';
import './DefaultSlider.css';
import SecondarySlider from '../SecondarySlider/SecondarySlider';

const DefaultSlider = () => {
  return (
    <div className="default-slider">
      <div className="title">
        <h2>in cinema</h2>
        <a href="#">view all</a>
      </div>
      <div className="tabs">
        <ul>
          <li className="active">
            <a href="#">#action</a>
          </li>
          <li>
            <a href="">#adventure</a>
          </li>
          <li>
            <a href="">#fantasy</a>
          </li>
        </ul>
      </div>
      <SecondarySlider />
    </div>
  );
};

export default DefaultSlider;
