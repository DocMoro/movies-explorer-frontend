import './MoviesCard.scss';

import { useCallback, useState } from 'react';

export default function MoviesCard({card, saved, cbButton}) {
  const { duration, image, nameRU, trailerLink } = card;
  const [ isLiked, setIsLiked ] = useState(card.isLike);

  const handleClickCreate = useCallback(() => {
    const { id, country, director, year, description, nameEN } = card;

    cbButton({ 
      country,
      director,
      duration,
      year,
      description,
      thumbnail: `https://api.nomoreparties.co/${image.url}`,
      movieId: id,
      image: `https://api.nomoreparties.co/${image.url}`,
      trailer: trailerLink,
      nameRU,
      nameEN
    })
      .then(() => {
        setIsLiked(true);
      })
      .catch(err => console.log(err));
  }, [card, cbButton, duration, image, nameRU, trailerLink])

  const handleClickDelete = useCallback(() => {
    cbButton(card)
      .then(() => {
        setIsLiked(false);
      })
      .catch(err => console.log(err));
  }, [cbButton, card])

  const getTimeString = useCallback(() => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`
  }, [duration])

  return (
    <li className='card'>
      <a className='card__trailer-link' href={trailerLink}>
        <img className='card__image' src={saved ? image : `https://api.nomoreparties.co/${image.url}`} alt={nameRU} />
      </a>
      <div className='card__container'>
        <h3 className='card__title'>{nameRU}</h3>
        {saved ? <button className='card__button-delete' onClick={handleClickDelete}></button>
               : <button className={`card__button-like${isLiked ? ' card__button-like_active' : ''} button` } onClick={handleClickCreate} disabled={isLiked ? 'disabled' : ''}></button>
        }
      </div>
      <p className='card__duration'>{getTimeString()}</p>
    </li>
  )
}