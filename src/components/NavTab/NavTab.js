import './NavTab.scss';

import { NavLink } from 'react-router-dom';

export default function NavTab() {
  return (
  <nav className='nav-tab'>
    <NavLink to='/signup' className='nav-tab__link link'>Регистрация</NavLink>
    <NavLink to='/signin' className='nav-tab__link nav-tab__link_green link'>Войти</NavLink>
  </nav>
  )
}