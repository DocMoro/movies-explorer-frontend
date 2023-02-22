import './App.scss';

import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import { cards } from '../../utils/constans';

export default function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies cards={cards} />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies cards={cards} />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
