import { getGenresError, getGenresSuccess, getMoviesError, getMoviesSuccess } from '../../redux/movies/actionCreators';
import { call, put } from 'typed-redux-saga';
import { moviesAPI } from '../../api';

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
