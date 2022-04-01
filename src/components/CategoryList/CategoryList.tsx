import React, { FC } from 'react';
import { getMovieGenres } from '../../utils/utils';
import { shallowEqual, useSelector } from 'react-redux';
import { moviesSelector } from '../../redux/selectors/movies';
import { CategoryListProps } from './interface';

const CategoryList: FC<CategoryListProps> = ({ genre_ids }) => {
  const { genres } = useSelector(moviesSelector, shallowEqual);
  return (
    <div className="category">
      {getMovieGenres(genres, genre_ids).map((genre: string, index: number) => (
        <span className={`cat-${index > 2 ? 0 : index}`} key={index}>
          {genre}
        </span>
      ))}
    </div>
  );
};

export default CategoryList;
