import './Movies.scss';

import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

import { SEARCH_BASE_ERROR } from '../../utils/constans';

const userCards = JSON.parse(localStorage.getItem('user-cards'));

export default function Movies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    const cardsList = JSON.parse(localStorage.getItem('search-cards'));

    if(cardsList) {
      setCards(cardsList);
    }
  });

  function cbSearch(dataUser) {
    function renderCards(data) {
      const arr = cardFilter(dataUser, data);

      if(!arr.length) {
        handleInfoPopup('Ничего не найдено')
      }

      arr = arr.map(card => {
        card.isLike = Boolean(userCards.find(userCard => userCard.movieId === card.id));
      });
  
      setCards(arr);
      localStorage.setItem('search-cards', JSON.stringify(arr));
    }

    const dataCards = JSON.parse(localStorage.getItem('cards'));
    setLoader(true);

    if(dataCards) {
      renderCards(dataCards);
      return
    }

    moviesApi.getCards()
      .then(res => {
        localStorage.setItem('cards', res);
        renderCards(res);
      })
      .catch(() => handleInfoPopup(SEARCH_BASE_ERROR))
      .finally(() => setLoader(false));
  }

  function handleCardLike(card) {
    return mainApi.createCard(card)
      .then(newCard => {
        const dataCards = JSON.parse(localStorage.getItem('user-cards'));

        localStorage.setItem('user-cards', JSON.stringify({
          ...dataCards,
          newCard
        }));
      })
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm saved={false} cbSearch={cbSearch} />
        <MoviesCardList cards={cards} setCards={setCards} saved={false} loader={loader} cbButton={handleCardLike} />
      </main>
      <Footer />
    </>
  )
}