import MoviesTypes from './types';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  genres: [],
  secondSliderData: [],
};

const moviesReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case MoviesTypes.GET_MOVIES:
      return { ...state, isLoading: true };

    case MoviesTypes.GET_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: payload };

    case MoviesTypes.GET_MOVIES_ERROR:
      return { ...state, isLoading: false, error: payload };

    // genres
    case MoviesTypes.GET_GENRES:
      return { ...state, isLoading: true };

    case MoviesTypes.GET_GENRES_SUCCESS:
      return { ...state, isLoading: false, genres: payload };

    case MoviesTypes.GET_GENRES_ERROR:
      return { ...state, isLoading: false, error: payload };

    // now playing
    case MoviesTypes.GET_NOW_PLAYING:
      return { ...state, isLoading: true };

    case MoviesTypes.GET_NOW_PLAYING_SUCCESS:
      return { ...state, isLoading: false, secondSliderData: payload };

    case MoviesTypes.GET_NOW_PLAYING_ERROR:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
export default moviesReducer;
