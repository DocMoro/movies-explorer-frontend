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

import { dataCards } from '../../utils/constans';

export default function App() {
  const [buttonMore, setButtonMore] = useState(dataCards.length < 17);
  const [cards, setCards] = useState(dataCards.slice(0, 16))


  function handleButtonMore() {
    setCards(dataCards);
    setButtonMore(!buttonMore)
  }

  return (
    <div className='page'>
      <Switch>
        <Route path='/saved-movies'>
          <Header main={false} />
          <SavedMovies cards={cards} callback={handleButtonMore} buttonMore={buttonMore} />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header main={false} />
          <Movies cards={cards} callback={handleButtonMore} buttonMore={buttonMore} />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header main={false} />
          <Profile />
        </Route>
        <Route path='/signup'>
          <AuthForm register={true}/>
        </Route>
        <Route path='/signin'>
          <AuthForm register={false}/>
        </Route>
        <Route path='/'>
          <Main main={true} />
          <Footer />
        </Route>
      </Switch>
    </div>
  )
}
