import './SavedMovies.scss';

import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import mainApi from '../../utils/MainApi';

export default function SavedMovies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    const searchCards = JSON.parse(localStorage.getItem('search-user-cards'));

    if(searchCards) {
      setCards(searchCards);
    } else {
      const userCards = JSON.parse(localStorage.getItem('user-cards'));

      if(userCards) {
        setCards(userCards);
      } else {
        mainApi.getUserCards()
          .then(data => {
            localStorage.setItem('user-cards', JSON.stringify(data));
            setCards(data);
          })
          .catch(err => console.log(err));
      }
    }
  }, []);

  function cbSearch(data) {
    setLoader(true);
    const arr = cardFilter(data, JSON.parse(localStorage.getItem('user-cards')));

    if(!arr.length) {
      handleInfoPopup('Ничего не найдено')
    }

    localStorage.setItem('search-user-cards', JSON.stringify(arr));
    setCards(arr);
    setLoader(false);
  }

  function handleCardDelete(card) {
    return mainApi.deleteCard(card._id)
      .then(() => {
        const newUserCards = JSON.parse(localStorage.getItem('user-cards')).filter(c => c._id !== card._id);

        localStorage.setItem('user-cards', JSON.stringify(newUserCards));
        setCards((state) => state.filter(c => c._id !== card._id));
      })
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm saved={true} cbSearch={cbSearch} />
        <MoviesCardList dataCards={cards} saved={true} loader={loader} cbButton={handleCardDelete} />
      </main>
      <Footer />
    </>
  )
}