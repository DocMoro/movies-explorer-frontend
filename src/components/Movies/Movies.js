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

export default function Movies({loggedIn, loader, handleLoader, cbNavPopup, handleInfoPopup}) {
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    const searchCards = JSON.parse(localStorage.getItem('search-cards'));

    if(searchCards) {
      setCards(searchCards);
    }
  }, []);

  function cbSearch(dataSearch) {
    function renderCards(dataCards) {
      const userCards = JSON.parse(localStorage.getItem('user-cards'));
      let arr = cardFilter(dataSearch, dataCards);

      if(!arr.length) {
        handleInfoPopup('Ничего не найдено')
      } else if(userCards) {
        arr = arr.map(card => {
          card.isLike = Boolean(userCards.find(userCard => userCard.movieId === card.id));
          return card;
        });
      }

      localStorage.setItem('search-cards', JSON.stringify(arr));
      setCards(arr);
    }

    const dataCards = JSON.parse(localStorage.getItem('cards'));
    handleLoader();

    if(dataCards) {
      renderCards(dataCards);
      handleLoader();
    } else {
      moviesApi.getCards()
        .then(res => {
          localStorage.setItem('cards', JSON.stringify(res));
          renderCards(res);
        })
        .catch(() => handleInfoPopup(SEARCH_BASE_ERROR))
        .finally(() => handleLoader());
    }
  }

  function handleCardLike(card) {
    return mainApi.createCard(card)
      .then(newCard => {
        const userCards = JSON.parse(localStorage.getItem('user-cards'));

        localStorage.setItem('user-cards', JSON.stringify({
          ...userCards,
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
        <SearchForm saved={false} cbSearch={cbSearch} loader={loader} />
        <MoviesCardList dataCards={cards} saved={false} loader={loader} cbButton={handleCardLike} />
      </main>
      <Footer />
    </>
  )
}