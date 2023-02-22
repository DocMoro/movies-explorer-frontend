import './MoviesCardList.scss';

import Card from '../MoviesCard';

export default function MoviesCardList({cards}) {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </ul>
      <button className='movies__button movies__button_activated button'>Eщё</button>
    </section>
  )
}