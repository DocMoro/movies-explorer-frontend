import './SavedMovies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';

const dataCards = JSON.parse(localStorage.getItem('user-cards'));

export default function SavedMovies({loggedIn, handleMenu}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState(dataCards);
  const [ submitError, setSubmitError ] = useState('');

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
        handleMenu={handleMenu} 
      />
      <main className='main'>
        <SearchForm cbSearch={cbSearch} submitError={submitError} />
        <MoviesCardList cards={cards} setCards={setCards} saved={true} loader={loader} />
      </main>
      <Footer />
    </>
  )
}