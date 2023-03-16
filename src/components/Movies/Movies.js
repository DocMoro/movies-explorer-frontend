import './Movies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({loader, loggedIn, handleMenu}) {
  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        handleMenu={handleMenu} 
      />
      <main className='main'>
        <SearchForm />
        <MoviesCardList saved={false} loader={loader} />
      </main>
      <Footer />
    </>
  )
}