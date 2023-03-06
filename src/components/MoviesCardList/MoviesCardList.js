import './MoviesCardList.scss';

import Card from '../MoviesCard/MoviesCard';

export default function MoviesCardList({cards, saved, callback, buttonMore}) {
  console.log(cards.length);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {cards.map((card) => (
          <Card card={card} saved={saved} key={card._id}/>
        ))}
      </ul>
      <button className={`movies__button${!buttonMore ? ' movies__button_activated button' : ''}`} onClick={callback} disabled={buttonMore}>Eщё</button>
    </section>
  )
}