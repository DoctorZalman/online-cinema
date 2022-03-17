import { IGenre } from '../interface/general';

export const getMovieGenres = (genre_all: IGenre[], genre_ids: []) => {
  return genre_ids.reduce((acc: any, item: number) => {
    const genre = genre_all.find((element: IGenre) => element.id === item);
    if (genre) {
      return [...acc, genre.name];
    }
    return acc;
  }, []);
};
