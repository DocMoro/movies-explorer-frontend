import './MoviesCardList.scss';

import Card from '../MoviesCard';

export default function MoviesCardList({cards, saved}) {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        {cards.map((card) => (
          <Card card={card} saved={saved} />
        ))}
      </ul>
      <button className='movies__button movies__button_activated button'>Eщё</button>
    </section>
  )
}