import './MoviesCardList.scss';

import Card from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({cards, saved, callback, buttonMore, loader}) {
  return (
    <section className='movies'>
      {loader
        ? <Preloader />
        : <>
            <ul className='movies__list'>
              {cards.map((card) => (
                <Card card={card} saved={saved} key={card.id}/>
              ))}
            </ul>
            <button className={`movies__button${buttonMore ? ' movies__button_activated button' : ''}`} onClick={callback} disabled={!buttonMore ? 'disabled' : ''}>Eщё</button>
          </>
      }
    </section>
  )
}