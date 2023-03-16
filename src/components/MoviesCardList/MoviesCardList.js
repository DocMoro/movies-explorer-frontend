import './MoviesCardList.scss';

import { useState, useEffect } from 'react';

import Card from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const dataCards = JSON.parse(localStorage.getItem('cards'));

export default function MoviesCardList({saved, loader}) {
  const [ format, setFormat ] = useState({});
  const [ cards, setCards ] = useState([]);
  
  const [ buttonMore, setButtonMore ] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;

      let obj = { columns: 4, rows: 4 };
  
      if(width < 630) {
        obj = { columns: 1, rows: 5 };
      } else 
        if(width < 930) {
          obj = { columns: 2, rows: 4 };
        } else 
          if(width < 1280) {
            obj = { columns: 3, rows: 4 };
          }

      setFormat(obj)
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    setCards(dataCards.slice(0, format.columns * format.rows));
  }, [format]);

  useEffect(() => {
    setButtonMore(cards.length < dataCards.length);
  }, [cards]);

  function handleButtonMore() {
    setCards(dataCards.slice(0, cards.length + format.columns));
  }

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
            <button className={`movies__button${buttonMore ? ' movies__button_activated button' : ''}`} onClick={handleButtonMore} disabled={!buttonMore ? 'disabled' : ''}>Eщё</button>
          </>
      }
    </section>
  )
}