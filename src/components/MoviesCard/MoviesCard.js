import './MoviesCard.scss';

import { useState } from 'react';

const dataCards = localStorage.getItem('user-cards');

export default function MoviesCard({card, saved, cbButton}) {
  const { country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId } = card;
  const [like, setLike] = useState(dataCards.map((c => JSON.stringify(c))).indexOf(JSON.stringify(card)) !== -1);

  function handleClickLike() {
    cbButton({ 
      country,
      director, 
      duration, 
      year, 
      description, 
      image, 
      trailer, 
      nameRU, 
      nameEN, 
      thumbnail, 
      movieId 
    });
  }

  function getTimeString() {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`
  }

  function handleClickDelete() {
    cbButton(card);
  }

  return (
    <li className='card'>
      <a className='card__trailer-link' href={trailerLink}>
        <img className='card__image' src={`https://api.nomoreparties.co/${image.url}`} alt={nameRU} />
      </a>
      <div className='card__container'>
        <h3 className='card__title'>{nameRU}</h3>
        {saved ? <button className='card__button-delete' onClick={handleClickDelete}></button>
               : <button className={`card__button-like${like ? ' card__button-like_active' : ''} button` } onClick={handleClickLike}></button>
        }
      </div>
      <p className='card__duration'>{getTimeString()}</p>
    </li>
  )
}