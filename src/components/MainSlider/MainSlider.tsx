import React from 'react';
import './MainSlider.css';
import SliderItem from '../CustomSlider/SliderItem';
import { shallowEqual, useSelector } from 'react-redux';
import { moviesSelector } from '../../redux/selectors/movies';
import CircularProgress from '@mui/material/CircularProgress';

function MainSlider() {
  const { movies, isLoading } = useSelector(moviesSelector, shallowEqual);
  return (
    <div className="background-container">
      <div className="main_container">
        <div className="main-slider">
          {isLoading && !movies.lenght ? (
            <CircularProgress color="secondary" />
          ) : (
            <SliderItem movies={movies.results} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
