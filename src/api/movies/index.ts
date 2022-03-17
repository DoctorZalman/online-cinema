import { get } from '../../axios';
import { API_KEY, LANGUAGE } from '../../consts';
import { IGeneralResponse, INowPlayingAndUpComing } from './interface';
import { IGenre } from '../../interface/general';

export const getPopularMovies = async (): Promise<IGeneralResponse> => await get(`movie/popular${API_KEY}${LANGUAGE}`);

export const getGenres = async (): Promise<IGenre> => await get(`genre/movie/list${API_KEY}${LANGUAGE}`);

export const getNowPlaying = async (): Promise<INowPlayingAndUpComing> =>
  await get(`movie/now_playing${API_KEY}${LANGUAGE}`);

export const getUpcoming = async (): Promise<INowPlayingAndUpComing> =>
  await get(`movie/upcoming${API_KEY}${LANGUAGE}`);

export const getTopRated = async (): Promise<IGeneralResponse> => await get(`movie/top_rated${API_KEY}${LANGUAGE}`);
