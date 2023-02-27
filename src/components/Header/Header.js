import './Header.scss';

import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <nav className='header__container'>
        <NavLink to='movies' className='header__nav-link button'>Фильмы</NavLink>
        <NavLink to='saved-movies' className='header__nav-link header__nav-link_to_saved-movies button'>Сохраненные фильмы</NavLink>
        <NavLink to='profile' className='header__nav-link header__nav-link_to_profile button'>Аккаунт</NavLink>
      </nav>
    </header>
  )
}