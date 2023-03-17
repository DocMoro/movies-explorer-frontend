import './SavedMovies.scss';

import { useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import mainApi from '../../utils/MainApi';

const dataCards = JSON.parse(localStorage.getItem('user-cards'));

export default function SavedMovies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState(dataCards);

  useEffect(() => {
    localStorage.setItem(localStorage.setItem('user-cards', JSON.stringify(cards)));
  }, [cards])

  function cbSearch(data) {
    setLoader(true);
    const arr = cardFilter(data, dataCards);

    if(!arr.length) {
      handleInfoPopup('Ничего не найдено')
    }

    setCards(arr);
    setLoader(false);
  }

  function handleCardDelete(card) {
    mainApi.deleteCard(card._id)
      .then(() => setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm cbSearch={cbSearch} />
        <MoviesCardList cards={cards} setCards={setCards} saved={true} loader={loader} cbButton={handleCardDelete} />
      </main>
      <Footer />
    </>
  )
}