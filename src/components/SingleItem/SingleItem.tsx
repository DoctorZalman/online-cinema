import React from 'react';
import './SingleItem.css';
import { POSTER_URL } from '../../consts';
import SocialButton from '../SocialButton/SocialButton';
import CategoryList from '../CategoryList/CategoryList';

const SingleItem = () => {
  return (
    <div className="single-page">
      <section className="main_container">
        <div className="poster-block">
          <div className="poster">
            <img src={`${POSTER_URL}w500/8GbtUB55JYQfo1xA48bbx5baxcO.jpg`} alt="poster" />
          </div>
          <div className="add-block">
            <div className="btn btn-more-detail defaultButton">
              <a href="#">Watch Trailer</a>
            </div>
          </div>
        </div>
        <div className="info-block">
          <div className="title">
            <span>
              Title <span>year</span>
            </span>
          </div>
          <div className="details">
            <span>Дата виходу: {}</span>
            <span>Рейтинг {}/10</span>
          </div>

          <SocialButton />
          {/*<CategoryList genre_ids={genre_ids}/>*/}
          <div className="description">
            <span>Опис</span>
            <span>
              Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes
              hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's
              mightiest heroes must come together once again to protect the world from global extinction.
            </span>
          </div>
        </div>
      </section>
      <section className="cast">
        <div className="actors">
          <img src={`${POSTER_URL}w500/8GbtUB55JYQfo1xA48bbx5baxcO.jpg`} alt="actor" />
          <span>name</span>
        </div>
      </section>
    </div>
  );
};

export default SingleItem;
