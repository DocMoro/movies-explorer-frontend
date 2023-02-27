import './Navigation.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink to='movies' className='navigation__link link'>Фильмы</NavLink>
      <NavLink to='saved-movies' className='navigation__link navigation__link_to_saved-movies link'>Сохраненные фильмы</NavLink>
      <NavLink to='profile' className='navigation__link navigation__link_to_profile link'>Аккаунт</NavLink>
    </nav>
  )
}