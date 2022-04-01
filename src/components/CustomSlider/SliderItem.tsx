import React, { FC } from 'react';
import { MovieListProps } from './interface';
import Slider from 'react-slick';
import { POSTER_URL } from '../../consts';
import './SliderItem.css';
import SocialButton from '../SocialButton/SocialButton';
import CategoryList from '../CategoryList/CategoryList';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};

const SliderItem: FC<MovieListProps> = ({ movies }) => {
  return (
    <Slider {...settings}>
      {movies?.map(({ id, genre_ids, title, original_title, release_date, poster_path, vote_average }) => (
        <div className="item-slider" key={id}>
          <div className="slider-details">
            <div className="description">
              <CategoryList genre_ids={genre_ids} />
              <div className="movie-title">{title}</div>
              <div className="movie-orig-title">Оригінальна назва: {original_title}</div>
              <div className="movie-details">
                <span>Дата виходу: {release_date}</span>
                <br />
                <span>Рейтинг {vote_average}/10</span>
              </div>
              <SocialButton />
              <div className="btn btn-more-detail defaultButton">
                <a href="#">More detail</a>
              </div>
            </div>
            <div className="poster">
              <img src={`${POSTER_URL}w500${poster_path}`} alt="poster" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderItem;
