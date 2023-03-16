import './SavedMovies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies({loader, loggedIn, handleMenu}) {
  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        handleMenu={handleMenu} 
      />
      <main className='main'>
        <SearchForm />
        <MoviesCardList saved={true} loader={loader} />
      </main>
      <Footer />
    </>
  )
}