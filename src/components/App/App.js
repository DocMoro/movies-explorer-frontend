import './App.scss';

import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AuthForm from '../AuthForm/AuthForm';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import NavPopup from '../NavPopup/NavPopup';

import { dataCards } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [ currentUser, setCurrentUser ] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });

  const [ buttonMore, setButtonMore ] = useState(dataCards.length < 17);
  const [ buttonMenu, setButtonMenu ] = useState(false);
  const [ cards, setCards ] = useState(dataCards.slice(0, 16));


  function handleButtonMore() {
    setCards(dataCards);
    setButtonMore(!buttonMore);
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
