import './MoviesCard.scss';

export default function MoviesCard({saved}) {
  return (
    <li className='card'>
      <img className='card__image' href='../../images/card.jpg' alt='image film' />
      <div className='card__container'>
        <h3 className='card__title'>Киноальманах «100 лет дизайна»</h3>
        {saved ? <button className='card__button-like button'></button>
               : <button className='card__button-delete'></button>
        }
      </div>
      <p className='card__duration'>1ч 42м</p>
    </li>
  )
}