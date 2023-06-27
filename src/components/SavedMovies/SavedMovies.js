import './SavedMovies.scss';

import { useCallback, useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import mainApi from '../../utils/MainApi';

export default function SavedMovies({loggedIn, loader, cbNavPopup, handleInfoPopup}) {
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    const searchCards = JSON.parse(localStorage.getItem('search-user-cards'));

    if(searchCards) {
      setCards(searchCards);
    } else {
      const userCards = JSON.parse(localStorage.getItem('user-cards'));

      if(userCards) {
        setCards(userCards);
      }
    }
  }, []);

  const cbSearch = useCallback((dataSearch) => {
    const arr = cardFilter(dataSearch, JSON.parse(localStorage.getItem('user-cards')));

    if(!arr.length) {
      handleInfoPopup('Ничего не найдено', false)
    }

    if(dataSearch.name === '' && !dataSearch.checkbox) {
      localStorage.removeItem('search-user-cards');
    } else {
      localStorage.setItem('search-user-cards', JSON.stringify(arr));
    }

    setCards(arr);
  }, [handleInfoPopup])

  const handleCardDelete = useCallback((card) => {
    return mainApi.deleteCard(card._id)
      .then(() => {
        const newUserCards = JSON.parse(localStorage.getItem('user-cards')).filter(c => c._id !== card._id);
        const searchCards = JSON.parse(localStorage.getItem('search-user-cards'));

        if(searchCards) {
          const newSearchCards = searchCards.filter(c => c._id !== card._id);

          localStorage.setItem('search-user-cards', JSON.stringify(newSearchCards));
          setCards(newSearchCards);
        } else {
          setCards(newUserCards);
        }

        localStorage.setItem('user-cards', JSON.stringify(newUserCards));
      })
  }, [])

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm saved={true} cbSearch={cbSearch} cbCheckbox={cbSearch} loader={loader} />
        <MoviesCardList dataCards={cards} saved={true} loader={loader} cbButton={handleCardDelete} />
      </main>
      <Footer />
    </>
  )
}