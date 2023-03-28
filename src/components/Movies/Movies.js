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
    let searchCards = JSON.parse(localStorage.getItem('search-cards'));

    if(searchCards) {
      searchCards = getLikeCards(searchCards);
      setCards(searchCards);
    }
  }, []);

  function getLikeCards(arr) {
    const userCards = JSON.parse(localStorage.getItem('user-cards'));

    arr = arr.map(card => {
      card.isLike = Boolean(userCards.find(userCard => userCard.movieId === card.id));
      return card;
    });

    return arr
  }

  function cbSearch(dataSearch) {
    function renderCards(dataCards) {
      const userCards = JSON.parse(localStorage.getItem('user-cards'));
      let arr = cardFilter(dataSearch, dataCards);
      localStorage.setItem('search-cards', JSON.stringify(arr));

      if(!arr.length) {
        handleInfoPopup('Ничего не найдено')
      } else if(userCards) {
        arr = getLikeCards(arr);
      }

      setCards(arr);
    }

    const dataCards = JSON.parse(localStorage.getItem('cards'));

    if(dataCards) {
      renderCards(dataCards);
    } else {
      handleLoader(true);
      moviesApi.getCards()
        .then(res => {
          localStorage.setItem('cards', JSON.stringify(res));
          renderCards(res);
        })
        .catch(() => handleInfoPopup(SEARCH_BASE_ERROR))
        .finally(() => handleLoader(false));
    }
  }

  function handleCardLike(card) {
    return mainApi.createCard(card)
      .then(newCard => {
        const userCards = JSON.parse(localStorage.getItem('user-cards'));

        userCards.push(newCard);
        localStorage.setItem('user-cards', JSON.stringify(userCards));
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