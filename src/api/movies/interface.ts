import { IMovie } from '../../interface/movie';

export interface IGeneralResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export interface INowPlayingAndUpComing extends IGeneralResponse {
  dates: IDates;
}
interface IDates {
  maximum: string;
  minimum: string;
}
