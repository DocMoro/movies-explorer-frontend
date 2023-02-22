import './Movies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({cards}) {
  return (
    <main>
      <SearchForm/>
      <MoviesCardList cards={cards} saved={false}/>
    </main>
  )
}