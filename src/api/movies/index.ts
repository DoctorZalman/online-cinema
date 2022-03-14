import { get } from '../../axios';
import { API_KEY, LANGUAGE } from '../../consts';

export const getPopularMovies = async () => await get(`movie/popular${API_KEY}${LANGUAGE}`);

export const getGenres = async () => await get(`genre/movie/list${API_KEY}${LANGUAGE}`);
