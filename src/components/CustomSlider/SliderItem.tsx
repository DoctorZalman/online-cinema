import React, { FC } from 'react';
import { MovieListProps } from '../../redux/movies/interface';
import Slider from 'react-slick';
import { getMovieGenres } from '../../utils/utils';
import { POSTER_URL } from '../../consts';
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};

const SliderItem: FC<MovieListProps> = ({ movies, genres }) => {
  return (
    <Slider {...settings}>
      {movies?.map(({ id, genre_ids, title, original_title, release_date, poster_path, vote_average }) => (
        <div className="item-slider" key={id}>
          <div className="slider-details">
            <div className="description">
              <div className="category">
                {getMovieGenres(genres, genre_ids).map((genre: string, index: number) => (
                  <span className={`cat-${index > 2 ? 0 : index}`} key={index}>
                    {genre}
                  </span>
                ))}
              </div>
              <div className="movie-title">{title}</div>
              <div className="movie-orig-title">Оригінальна назва: {original_title}</div>
              <div className="movie-details">
                <span>Дата виходу: {release_date}</span>
                <br />
                <span>Рейтинг {vote_average}/10</span>
              </div>
              <div className="add-bnt">
                <a href="#">Watch trailer</a>
                <a href="#">Add to favorite</a>
                <a href="#">Share</a>
              </div>
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
