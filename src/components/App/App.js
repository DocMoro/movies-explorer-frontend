import './App.scss';

import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {
  const loggedIn = false;

  return (
    <div className="page">
      {loggedIn && <Header />}
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
