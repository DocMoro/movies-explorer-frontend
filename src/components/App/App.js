import './App.scss';

import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
