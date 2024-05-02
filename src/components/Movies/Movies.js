import './Movies.scss';

import { useCallback, useEffect, useState } from 'react';

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

  const setLikeCards = useCallback((arr) => {
    const userCards = JSON.parse(localStorage.getItem('user-cards'));

    if(userCards) {
      arr = arr.map(card => {
        card.isLike = Boolean(userCards.find(userCard => userCard.movieId === card.id));
        return card;
      });
    }

    return arr
  }, [])

  const handleCardLike = useCallback((card) => {
    return mainApi.createCard(card)
      .then(newCard => {
        const userCards = JSON.parse(localStorage.getItem('user-cards'));

        userCards.push(newCard);
        localStorage.setItem('user-cards', JSON.stringify(userCards));
      })
  }, [])

  const renderCards = useCallback((dataSearch, Cards) => {
    let filteredCards = cardFilter(dataSearch, Cards);
    localStorage.setItem('search-cards', JSON.stringify(filteredCards));

    if(!filteredCards.length) {
      handleInfoPopup('Ничего не найдено', false)
    } else {
      filteredCards = setLikeCards(filteredCards);
    }

    setCards(filteredCards);
  }, [handleInfoPopup, setLikeCards])

  const cbCheckbox = useCallback((dataSearch) => {
    const dataCards = JSON.parse(localStorage.getItem('cards'));

    if(dataCards) {
      renderCards(dataSearch, dataCards);
    } else {
      handleLoader(true);
      moviesApi.getCards()
        .then(res => {
          localStorage.setItem('cards', JSON.stringify(res));
          renderCards(dataSearch, res);
        })
        .catch(() => handleInfoPopup(SEARCH_BASE_ERROR, false))
        .finally(() => handleLoader(false));
    }
  }, [handleInfoPopup, handleLoader, renderCards])

  const cbSearch = useCallback((dataSearch) => {
    const dataCards = JSON.parse(localStorage.getItem('cards'));

    if(dataCards) {
      renderCards(dataSearch, dataCards);
    } else {
      handleLoader(true);
      moviesApi.getCards()
        .then(res => {
          localStorage.setItem('cards', JSON.stringify(res));
          renderCards(dataSearch, res);
        })
        .catch(() => handleInfoPopup(SEARCH_BASE_ERROR, false))
        .finally(() => handleLoader(false));
    }
  }, [handleInfoPopup, handleLoader, renderCards])

  useEffect(() => {
    let searchCards = JSON.parse(localStorage.getItem('search-cards'));

    if(searchCards) {
      searchCards = setLikeCards(searchCards);
      setCards(searchCards);
    }
  }, [setLikeCards])

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm saved={false} cbSearch={cbSearch} cbCheckbox={cbCheckbox} loader={loader} />
        <MoviesCardList dataCards={cards} saved={false} loader={loader} cbButton={handleCardLike} />
      </main>
      <Footer />
    </>
  )
}