import './MoviesCard.scss';

import { useState } from 'react';

export default function MoviesCard({card, saved}) {
  const { nameRU, image, duration, trailerLink } = card;
  const [like, setLike] = useState(false);

  function handleClickLike() {
    setLike(true);
  }

  function getTimeString() {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`
  }

  return (
    <li className='card'>
      <a className='card__trailer-link' href={trailerLink}>
        <img className='card__image' src={`https://api.nomoreparties.co/${image.url}`} alt={nameRU} />
      </a>
      <div className='card__container'>
        <h3 className='card__title'>{nameRU}</h3>
        {saved ? <button className='card__button-delete'></button>
               : <button className={`card__button-like${like ? ' card__button-like_active' : ''} button`} onClick={handleClickLike}></button>
        }
      </div>
      <p className='card__duration'>{getTimeString()}</p>
    </li>
  )
}