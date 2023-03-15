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
import mainApi from '../../utils/MainApi';
import { ESC } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: '', email: '' });

  const [ menu, setMenu ] = useState(false);
  const [ loader, setLoader ] = useState(true);
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    if(loggedIn) {
      moviesApi.getCards()
        .then(data => localStorage.setItem('cards', JSON.stringify(data)))
        .then(() => setLoader(false))
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
    tokenCheck(token);
  }, []);

  const handleMenu = useCallback(() => {
    function _handleEscClose(e) {
      if (e.keyCode === ESC) {
        setMenu(false);
      }
    }

    if(!menu) {
      document.addEventListener('keydown', _handleEscClose);
    } else {
      document.removeEventListener('keydown', _handleEscClose);
    }

    setMenu(!menu);
  }, [menu]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/saved-movies'>
            <Header 
              loggin={loggedIn} 
              handleMenu={handleMenu} 
            />
            <SavedMovies 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header 
              loggin={loggedIn} 
              handleMenu={handleMenu} 
            />
            <Movies 
              loader={loader}
            />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header 
              loggin={loggedIn} 
              handleMenu={handleMenu} 
            />
            <Profile />
          </Route>
          <Route path='/signup'>
            <AuthForm 
              register={true}
              cbSubmit={cbRegister}
              loggedIn={loggedIn}
            />
          </Route>
          <Route path='/signin'>
            <AuthForm 
              register={false} 
              cbSubmit={cbLogin}
              loggedIn={loggedIn}
            />
          </Route>
          <Route exact path='/'>
            <Header loggin={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path='/'>
            <NotFound />
          </Route>
        </Switch>
        <NavPopup 
          menu={menu} 
          handleMenu={handleMenu} 
        />
      </div>
    </CurrentUserContext.Provider>
  )
}
