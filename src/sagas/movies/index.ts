// @ts-nocheck
import {
  getGenresError,
  getGenresSuccess,
  getMoviesError,
  getMoviesSuccess,
  getNowPlayingError,
  getNowPlayingSuccess,
} from '../../redux/movies/actionCreators';
import { call, put } from 'typed-redux-saga';
import { moviesAPI } from '../../api';
import { SecondSliderData } from '../../interface/movie';

export function* workerGetMovies() {
  try {
    const { data } = yield call(moviesAPI.getPopularMovies);
    yield put(getMoviesSuccess(data));
  } catch ({ message }) {
    // @ts-ignore
    yield put(getMoviesError(message));
  }
}

export function* workerGetGenres() {
  try {
    const { data } = yield call(moviesAPI.getGenres);
    yield put(getGenresSuccess(data.genres));
  } catch ({ message }) {
    // @ts-ignore
    yield put(getGenresError(message));
  }
}

export function* workerGetDataSecondSlider() {
  try {
    const { getNowPlaying, getTopRated, getUpcoming } = moviesAPI;
    const promises = [getNowPlaying(), getTopRated(), getUpcoming()];
    let data = {};
    yield Promise.allSettled(promises).then((result) => {
      const { NOW_PLAYING, UP_COMING, TOP_RATED } = SecondSliderData;
      data = {
        [NOW_PLAYING]: result[0].value.data.results,
        [UP_COMING]: result[1].value.data.results,
        [TOP_RATED]: result[2].value.data.results,
      };
    });
    console.log(data);
    yield put(getNowPlayingSuccess(data));
  } catch ({ message }) {
    yield put(getNowPlayingError(message));
  }
}
