import './MoviesCard.scss';

import { useState } from 'react';

export default function MoviesCard({card, saved}) {
  const { name, link, time } = card;
  const [like, setLike] = useState(false);

  function handleClickLike() {
    setLike(!like);
  }


  return (
    <li className='card'>
      <img className='card__image' src={link} alt={name} />
      <div className='card__container'>
        <h3 className='card__title'>{name}</h3>
        {saved ? <button className='card__button-delete'></button>
               : <button className={`card__button-like${like ? ' card__button-like_active' : ''} button`} onClick={handleClickLike}></button>
        }
      </div>
      <p className='card__duration'>{time}</p>
    </li>
  )
}