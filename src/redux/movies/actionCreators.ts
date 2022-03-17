import MoviesTypes from './types';
import { IMovie } from '../../interface/movie';
import { IGenre } from '../../interface/general';

export const getMovies = () => ({ type: MoviesTypes.GET_MOVIES });
export const getMoviesSuccess = (payload: IMovie[]) => ({ type: MoviesTypes.GET_MOVIES_SUCCESS, payload });
export const getMoviesError = (payload: string) => ({ type: MoviesTypes.GET_MOVIES_ERROR, payload });

export const getGenres = () => ({ type: MoviesTypes.GET_GENRES });
export const getGenresSuccess = (payload: IGenre[]) => ({ type: MoviesTypes.GET_GENRES_SUCCESS, payload });
export const getGenresError = (payload: string) => ({ type: MoviesTypes.GET_GENRES_ERROR, payload });

export const getSecondarySliderData = () => ({ type: MoviesTypes.GET_SECONDARY_SLIDER_DATA });
export const getSecondarySliderDataSuccess = (payload: IMovie[]) => ({
  type: MoviesTypes.GET_SECONDARY_SLIDER_DATA_SUCCESS,
  payload,
});
export const getSecondarySliderDataError = (payload: string) => ({
  type: MoviesTypes.GET_SECONDARY_SLIDER_DATA_ERROR,
  payload,
});
