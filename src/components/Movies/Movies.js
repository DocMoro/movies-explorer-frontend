import './Movies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import moviesApi from '../../utils/MoviesApi';

export default function Movies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState([]);
  const [ submitError, setSubmitError ] = useState('');

  function cbSearch(data) {
    function setFilterCards(cards) {
      cardFilter(data, cards)
        .then(res => setCards(res))
        .catch(err => handleInfoPopup(err.message))
        .finally(() => setLoader(false));
    }

    const dataCards = JSON.parse(localStorage.getItem('cards'));
    setSubmitError('');
    setLoader(true);

    if(dataCards) {
      setFilterCards(dataCards);
      return
    }

    moviesApi.getCards(data)
      .then(res => {
        localStorage.setItem('cards', res);
        setFilterCards(res);
      })
  }

  async function cbSearch(data) {
    setSubmitError('');
    setLoader(true);
    return cardFilter(data, dataCards)
      .then(cards => setCards(cards))
      .catch(err => setSubmitError(err))
      .finally(() => setLoader(false));
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main'>
        <SearchForm cbSearch={cbSearch} submitError={submitError} />
        <MoviesCardList cards={cards} setCards={setCards} saved={false} loader={loader} />
      </main>
      <Footer />
    </>
  )
}