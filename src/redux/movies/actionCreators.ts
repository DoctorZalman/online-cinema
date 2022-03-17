import MoviesTypes from './types';
import { IMovie } from '../../interface/movie';
import { IGenre } from '../../interface/general';

export const getMovies = () => ({ type: MoviesTypes.GET_MOVIES });
export const getMoviesSuccess = (payload: IMovie[]) => ({ type: MoviesTypes.GET_MOVIES_SUCCESS, payload });
export const getMoviesError = (payload: string) => ({ type: MoviesTypes.GET_MOVIES_ERROR, payload });

export const getGenres = () => ({ type: MoviesTypes.GET_GENRES });
export const getGenresSuccess = (payload: IGenre[]) => ({ type: MoviesTypes.GET_GENRES_SUCCESS, payload });
export const getGenresError = (payload: string) => ({ type: MoviesTypes.GET_GENRES_ERROR, payload });

export const getNowPlaying = () => ({ type: MoviesTypes.GET_NOW_PLAYING });
export const getNowPlayingSuccess = (payload: IMovie[]) => ({
  type: MoviesTypes.GET_NOW_PLAYING_SUCCESS,
  payload,
});
export const getNowPlayingError = (payload: string) => ({ type: MoviesTypes.GET_NOW_PLAYING_ERROR, payload });
