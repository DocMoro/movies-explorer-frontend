import './App.scss';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AuthForm from '../AuthForm/AuthForm';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import NavPopup from '../NavPopup/NavPopup';

import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });

  const [ buttonMore, setButtonMore ] = useState(false);
  const [ buttonMenu, setButtonMenu ] = useState(false);
  const [ dataCards, setDataCards ] = useState([])
  const [ cards, setCards ] = useState([]);
  const [ format, setFormat ] = useState({});
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    function handlerResize() {
      const width = document.documentElement.clientWidth;

      let obj = { columns: 4, rows: 4 };
  
      if(width < 630) {
        obj = { columns: 1, rows: 5 };
      } else 
        if(width < 930) {
          obj = { columns: 2, rows: 4 };
        } else 
          if(width < 1280) {
            obj = { columns: 3, rows: 4 };
          }

      setFormat(obj)
    }

    handlerResize();
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  }, []);

  useEffect(() => {
    moviesApi.getCards()
      .then(data => setDataCards(data))
      .then(() => setLoader(false))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setCards(dataCards.slice(0, format.columns * format.rows));
  }, [format, dataCards]);

  useEffect(() => {
    setButtonMore(cards.length < dataCards.length);
  }, [cards, dataCards])

  function handleButtonMore() {
    setCards(dataCards.slice(0, cards.length + format.columns));
  }

  function handlerButtonMenu() {
    setButtonMenu(!buttonMenu);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/saved-movies'>
            <Header 
              main={false} 
              callback={handlerButtonMenu} 
            />
            <SavedMovies 
              cards={cards} 
              callback={handleButtonMore} 
              buttonMore={buttonMore} 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header 
              main={false} 
              callback={handlerButtonMenu} 
            />
            <Movies 
              cards={cards} 
              callback={handleButtonMore} 
              buttonMore={buttonMore} 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header 
              main={false} 
              callback={handlerButtonMenu} 
            />
            <Profile />
          </Route>
          <Route path='/signup'>
            <AuthForm register={true} />
          </Route>
          <Route path='/signin'>
            <AuthForm register={false} />
          </Route>
          <Route exact path='/'>
            <Header main={true} />
            <Main />
            <Footer />
          </Route>
          <Route path='/'>
            <NotFound />
          </Route>
        </Switch>
        <NavPopup 
          buttonMenu={buttonMenu} 
          callback={handlerButtonMenu} 
        />
      </div>
    </CurrentUserContext.Provider>
  )
}
