import './SavedMovies.scss';

import { useEffect, useState } from 'react';

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

  function cbSearch(dataSearch) {
    const arr = cardFilter(dataSearch, JSON.parse(localStorage.getItem('user-cards')));

    if(!arr.length) {
      handleInfoPopup('Ничего не найдено')
    }

    localStorage.setItem('search-user-cards', JSON.stringify(arr));
    setCards(arr);
  }

  function handleCardDelete(card) {
    return mainApi.deleteCard(card._id)
      .then(() => {
        const newUserCards = JSON.parse(localStorage.getItem('user-cards')).filter(c => c._id !== card._id);

        localStorage.setItem('user-cards', JSON.stringify(newUserCards));
        setCards(newUserCards);
      })
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm saved={true} cbSearch={cbSearch} loader={loader} />
        <MoviesCardList dataCards={cards} saved={true} loader={loader} cbButton={handleCardDelete} />
      </main>
      <Footer />
    </>
  )
}