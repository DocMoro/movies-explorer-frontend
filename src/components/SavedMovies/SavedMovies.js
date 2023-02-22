import './SavedMovies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({cards}) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList cards={cards} saved={true}/>
    </main>
  )
}