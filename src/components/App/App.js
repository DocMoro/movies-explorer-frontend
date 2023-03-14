import './App.scss';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

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
import { ESC } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });

  const [ buttonMenu, setButtonMenu ] = useState(false);
  const [ loader, setLoader ] = useState(true);
  const [ loggin, setLoggin ] = useState(true);

  useEffect(() => {
    moviesApi.getCards()
      .then(data => localStorage.setItem('cards', JSON.stringify(data)))
      .then(() => setLoader(false))
      .catch(err => console.log(err));
 
    return () => {
      localStorage.removeItem('cards');
    }
  }, []);

  const handlerButtonMenu = useCallback(() => {
    function _handleEscClose(e) {
      if (e.keyCode === ESC) {
        setButtonMenu(false);
      }
    }

    if(!buttonMenu) {
      document.addEventListener('keydown', _handleEscClose);
    } else {
      document.removeEventListener('keydown', _handleEscClose);
    }

    setButtonMenu(!buttonMenu);
  }, [buttonMenu]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/saved-movies'>
            <Header 
              loggin={loggin} 
              callback={handlerButtonMenu} 
            />
            <SavedMovies 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header 
              loggin={loggin} 
              callback={handlerButtonMenu} 
            />
            <Movies 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header 
              loggin={loggin} 
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
            <Header loggin={loggin} />
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
