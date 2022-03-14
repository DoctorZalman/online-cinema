import { takeEvery } from 'typed-redux-saga';
import MoviesTypes from '../../redux/movies/types';
import { workerGetGenres, workerGetMovies } from './index';

const movieWatchers = [
  takeEvery(MoviesTypes.GET_MOVIES, workerGetMovies),
  takeEvery(MoviesTypes.GET_GENRES, workerGetGenres),
];

export default movieWatchers;
