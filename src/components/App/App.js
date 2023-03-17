import './App.scss';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AuthForm from '../AuthForm/AuthForm';
import NotFound from '../NotFound/NotFound';
import NavPopup from '../NavPopup/NavPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import { ESC } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: '', email: '' });

  const [ navPopup, setNavPopup ] = useState(false);
  const [ infoPopup, setInfoPopup ] = useState({ state: false, error: '' });
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    if(loggedIn) {
      mainApi.getCards()
        .then(data => localStorage.setItem('user-cards', JSON.stringify(data)))
        .catch(err => console.log(err));

      return () => {
        localStorage.removeItem('cards');
      }
    }
  }, [loggedIn]);

  function cbLogin(data) {
    return mainApi.authorize(data)
      .then(res => {
        localStorage.setItem('token', res.token);
        return tokenCheck(res.token);
      })
  }

  function cbRegister(data) {
    return mainApi.register(data)
      .then(res => cbLogin(res))
  }

  function tokenCheck(token) {
    if(token) {
      return mainApi.getContent(token)
        .then(res => {
          setCurrentUser({ 
            name: res.name, 
            email: res.email 
          });
          setLoggedIn(true);
        })
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    tokenCheck(token)
      .catch(err => console.log(err.message));
  }, []);

  const handleNavPopup = useCallback(() => {
    function _handleEscClose(e) {
      if (e.keyCode === ESC) {
        setNavPopup(false);
      }
    }

    if(!navPopup) {
      document.addEventListener('keydown', _handleEscClose);
    } else {
      document.removeEventListener('keydown', _handleEscClose);
    }

    setNavPopup(!navPopup);
  }, [navPopup]);

  const handleInfoPopup = useCallback((error = infoPopup.error) => {
    const { state } = infoPopup;

    function _handleEscClose(e) {
      if (e.keyCode === ESC) {
        setInfoPopup({
          state: !state,
          error: error
        });
      }
    }

    if(!state) {
      document.addEventListener('keydown', _handleEscClose);
    } else {
      document.removeEventListener('keydown', _handleEscClose);
    }

    setInfoPopup({
      state: !state,
      error: error
    });
  }, [infoPopup]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/saved-movies'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              cbNavPopup={handleNavPopup}
              component={SavedMovies}
            />
          </Route>
          <Route path='/movies'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              cbNavPopup={handleNavPopup}
              component={Movies}
            />
          </Route>
          <Route path='/profile'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              cbNavPopup={handleNavPopup}
              component={Profile}
            />
          </Route>
          <Route path='/signup'>
            <AuthForm 
              loggedIn={loggedIn}
              register={true}
              cbSubmit={cbRegister}
            />
          </Route>
          <Route path='/signin'>
            <AuthForm 
              loggedIn={loggedIn}
              register={false} 
              cbSubmit={cbLogin}
            />
          </Route>
          <Route exact path='/'>
            <Main 
              loggedIn={loggedIn}
              cbNavPopup={handleNavPopup}
            />
          </Route>
          <Route path='/'>
            <NotFound />
          </Route>
        </Switch>
        <NavPopup 
          navPopup={navPopup} 
          cbNavPopup={handleNavPopup} 
        />
        <InfoTooltip 
          infoPopup={infoPopup}
          cbInfoPopup={handleInfoPopup}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}
