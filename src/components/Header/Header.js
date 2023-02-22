import './Header.scss';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <div className='header__container'>
        <Link to='movies' className='header__button button'>Фильмы</Link>
        <Link to='saved-movies' className='header__button button'>Сохраненные фильмы</Link>
      </div>
    </header>
  )
}