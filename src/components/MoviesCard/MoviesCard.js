import './MoviesCard.scss';

export default function MoviesCard({card, saved}) {
  const { name, link, time } = card;

  return (
    <li className='card'>
      <img className='card__image' href={link} alt={name} />
      <div className='card__container'>
        <h3 className='card__title'>{name}</h3>
        {saved ? <button className='card__button-like button'></button>
               : <button className='card__button-delete'></button>
        }
      </div>
      <p className='card__duration'>{time}</p>
    </li>
  )
}