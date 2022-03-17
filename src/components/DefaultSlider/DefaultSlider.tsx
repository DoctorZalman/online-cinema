import React, { useEffect, useState, MouseEvent } from 'react';
import './DefaultSlider.css';
import { shallowEqual, useSelector } from 'react-redux';
import { moviesSelector } from '../../redux/selectors/movies';
import CircularProgress from '@mui/material/CircularProgress';
import { ToggleButtonGroup } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import { SecondSliderData } from '../../interface/movie';
import SecondarySlider from '../SecondarySlider/SecondarySlider';

const DefaultSlider = () => {
  const { secondSliderData } = useSelector(moviesSelector, shallowEqual);
  const { NOW_PLAYING, UP_COMING, TOP_RATED } = SecondSliderData;

  const [alignment, setAlignment] = useState(NOW_PLAYING); //

  const [sliderData, setSecondSliderData] = useState(secondSliderData[alignment]);

  useEffect(() => {
    setSecondSliderData(secondSliderData[alignment]);
  }, [alignment, secondSliderData]);

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: SecondSliderData) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="default-slider">
      <div className="title">
        <h2>in cinema</h2>
        <a href="#">view all</a>
      </div>

      <div className="tabs">
        <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value={NOW_PLAYING}>Now Playing</ToggleButton>
          <ToggleButton value={TOP_RATED}>Top Rated</ToggleButton>
          <ToggleButton value={UP_COMING}>Up Coming</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {!sliderData ? <CircularProgress color="secondary" /> : <SecondarySlider sliderData={sliderData} />}
    </div>
  );
};

export default DefaultSlider;
