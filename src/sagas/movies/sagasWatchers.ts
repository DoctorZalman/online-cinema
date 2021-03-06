import { takeEvery } from 'typed-redux-saga';
import MoviesTypes from '../../redux/movies/types';
import { workerGetDataSecondSlider, workerGetGenres, workerGetMovies } from './index';

const movieWatchers = [
  takeEvery(MoviesTypes.GET_MOVIES, workerGetMovies),
  takeEvery(MoviesTypes.GET_GENRES, workerGetGenres),
  takeEvery(MoviesTypes.GET_SECONDARY_SLIDER_DATA, workerGetDataSecondSlider),
];

export default movieWatchers;
