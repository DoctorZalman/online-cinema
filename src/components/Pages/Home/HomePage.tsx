import React, { useEffect } from 'react';
import MainSlider from '../../MainSlider/MainSlider';
import DefaultSlider from '../../DefaultSlider/DefaultSlider';
import { useDispatch } from 'react-redux';
import { getGenres, getMovies, getNowPlaying } from '../../../redux/movies/actionCreators';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
    dispatch(getNowPlaying());
  }, []);

  return (
    <>
      <MainSlider />
      <DefaultSlider />
    </>
  );
};

export default HomePage;
