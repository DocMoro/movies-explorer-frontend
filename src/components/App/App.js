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
import LoadPopup from '../LoadPopup/LoadPopup';

import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import { ESC } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: '', email: '' });

  const [ navPopup, setNavPopup ] = useState(false);
  const [ infoPopup, setInfoPopup ] = useState({ state: false, message: '', success: false });
  const [ loggedIn, setLoggedIn ] = useState(null);
  const [ loader, setLoader ] = useState(false);

  const handleInfoPopup = useCallback((message = infoPopup.message, success = infoPopup.success) => {
    const { state } = infoPopup;

    function _handleEscClose(e) {
      if (e.keyCode === ESC) {
        setInfoPopup({
          ...infoPopup,
          state: !state
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
      message,
      success
    });
  }, [infoPopup])

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
  }, [navPopup])

  const tokenCheck = useCallback((token) => {
    if(token) {
      mainApi.getContent(token)
        .then(res => {
          setCurrentUser({ 
            name: res.name, 
            email: res.email 
          });
          setLoggedIn(true);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, [])

  const cbLogin = useCallback((data) => {
    return mainApi.authorize(data)
      .then(res => {
        localStorage.setItem('token', res.token);
        tokenCheck(res.token);
      })
  }, [tokenCheck])

  const cbExit = useCallback(() => {
    localStorage.clear();
    setLoggedIn(false);
  }, [])

  const cbUpdate = useCallback((data) => {
    return mainApi.setUserInfo(data)
      .then(res => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
        handleInfoPopup('Сохраненно', true);
      })
      .catch(() => handleInfoPopup('Ошибка', false));
  }, [handleInfoPopup])

  const cbRegister = useCallback((data) => {
    const { email, password } = data;

    return mainApi.register(data)
      .then(() => cbLogin({ email, password }))
  }, [cbLogin])

  useEffect(() => {
    const token = localStorage.getItem('token');

    tokenCheck(token);
  }, [tokenCheck]);

  useEffect(() => {
    if(loggedIn) {
      setLoader(true);
      mainApi.getUserCards()
        .then(data => {
          localStorage.setItem('user-cards', JSON.stringify(data));
        })
        .catch(err => console.log(err))
        .finally(() => setLoader(false));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {loggedIn === null
        ?
        <LoadPopup />
        :
        <Switch>
          <Route path='/saved-movies'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              loader={loader}
              cbNavPopup={handleNavPopup}
              handleInfoPopup={handleInfoPopup}
              component={SavedMovies}
            />
          </Route>
          <Route path='/movies'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              loader={loader}
              handleLoader={setLoader}
              cbNavPopup={handleNavPopup}
              handleInfoPopup={handleInfoPopup}
              component={Movies}
            />
          </Route>
          <Route path='/profile'>
            <ProtectedRoute 
              loggedIn={loggedIn}
              cbNavPopup={handleNavPopup}
              handleExit={cbExit}
              cbUpdate={cbUpdate}
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
        </Switch>}
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
