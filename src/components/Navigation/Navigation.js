import './Navigation.scss';

import { NavLink, useLocation } from 'react-router-dom';

export default function Navigation({cbNavPopup}) {
  const { pathname } = useLocation();

  return (
    <>
      <nav className='navigation'>
        <NavLink to='movies' className={`navigation__link link${pathname === '/movies' ? ' navigation__link_active' : ''}`}>Фильмы</NavLink>
        <NavLink to='saved-movies' className={`navigation__link navigation__link_to_saved-movies link${pathname === '/saved-movies' ? ' navigation__link_active' : ''}`}>Сохраненные фильмы</NavLink>
        <NavLink to='profile' className={`navigation__link navigation__link_to_profile link${pathname === '/profile' ? ' navigation__link_active' : ''}`}>Аккаунт</NavLink>
      </nav>
      <button onClick={cbNavPopup} className='button-menu button'></button>
    </>
  )
}