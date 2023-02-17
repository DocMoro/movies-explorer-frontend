import './MoviesCard.scss';

export default function MoviesCard() {
  return (
    <li className='card'>
      <img className='card__image' href='../../images/card.jpg' alt='image film' />
      <div className='card__container'>
        <h3 className='card__title'>Киноальманах «100 лет дизайна»</h3>
        <button className='card__button-like'></button>
      </div>
      <p className='card__duration'>1ч 42м</p>
    </li>
  )
}