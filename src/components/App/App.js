import './App.scss';

import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
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
    <div className="page">
      <Switch>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies cards={cards} callback={handleButtonMore} buttonMore={buttonMore} />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies cards={cards} callback={handleButtonMore} buttonMore={buttonMore} />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
