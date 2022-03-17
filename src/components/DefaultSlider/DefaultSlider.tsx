import React from 'react';
import './DefaultSlider.css';
import SecondarySlider from '../SecondarySlider/SecondarySlider';
import { shallowEqual, useSelector } from 'react-redux';
import { moviesSelector } from '../../redux/selectors/movies';
import CircularProgress from '@mui/material/CircularProgress';

const DefaultSlider = () => {
  const { nowPlaying, isLoading } = useSelector(moviesSelector, shallowEqual);

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
      {isLoading && !nowPlaying.lenght ? (
        <CircularProgress color="secondary" />
      ) : (
        // @ts-ignore
        <SecondarySlider a />
      )}
    </div>
  );
};

export default DefaultSlider;
