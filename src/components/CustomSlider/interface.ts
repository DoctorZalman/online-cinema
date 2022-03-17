import { IMovie } from '../../interface/movie';
import { IGenre } from '../../interface/general';

export interface MovieListProps {
  movies: IMovie[];
  genres: IGenre[];
}
