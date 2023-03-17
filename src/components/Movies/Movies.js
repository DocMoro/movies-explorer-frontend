import './Movies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import cardFilter from '../../utils/CardFilter';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

import { SEARCH_BASE_ERROR } from '../../utils/constans';

export default function Movies({loggedIn, cbNavPopup, handleInfoPopup}) {
  const [ loader, setLoader ] = useState(false);
  const [ cards, setCards ] = useState([]);

  function cbSearch(dataUser) {
    function renderCards(data) {
      const arr = cardFilter(dataUser, data);

      if(!arr.length) {
        handleInfoPopup('Ничего не найдено')
      }
  
      setCards(arr);
    }

    const dataCards = JSON.parse(localStorage.getItem('cards'));
    setLoader(true);

    if(dataCards) {
      renderCards(dataCards);
      return
    }

    moviesApi.getCards()
      .then(res => {
        localStorage.setItem('cards', res);
        renderCards(res);
      })
      .catch(() => handleInfoPopup(SEARCH_BASE_ERROR))
      .finally(() => setLoader(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const method = isLiked ? 'DELETE' : 'PUT';
    
    return mainApi.likeCard(card._id, method)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
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
        <MoviesCardList cards={cards} setCards={setCards} saved={false} loader={loader} cbButton={handleCardLike} />
      </main>
      <Footer />
    </>
  )
}