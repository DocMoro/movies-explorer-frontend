import './SavedMovies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({cards, callback, buttonMore}) {
  return (
    <>
      <SearchForm />
      <main>
        <MoviesCardList cards={cards} saved={true} callback={callback} buttonMore={buttonMore} />
      </main>
    </>
  )
}