import './Movies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({cards, callback, buttonMore}) {
  return (
    <>
      <SearchForm/>
      <main>
        <MoviesCardList cards={cards} saved={false} callback={callback} buttonMore={buttonMore} />
      </main>
    </>
  )
}