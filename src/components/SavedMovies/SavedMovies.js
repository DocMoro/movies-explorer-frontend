import './SavedMovies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';

import { SEARCH_BASE_ERROR } from '../../utils/constans';

const dataCards = JSON.parse(localStorage.getItem('user-cards'));

export default function SavedMovies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState(dataCards);

  function cbSearch(data) {
    setLoader(true);
    const arr = cardFilter(data, dataCards);

    if(!arr.length) {
      handleInfoPopup('Ничего не найдено')
    }

    setCards(arr);
    setLoader(false);
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm cbSearch={cbSearch} />
        <MoviesCardList cards={cards} setCards={setCards} saved={true} loader={loader} />
      </main>
      <Footer />
    </>
  )
}