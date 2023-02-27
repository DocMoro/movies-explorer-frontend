import './NavTab.scss';

import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function NavTab() {
  return (
  <section className='nav-tab'>
    <img className='nav-tab__logo logo' src={logo} alt='Логотип' />
    <nav className='nav-tab__container'>
      <NavLink className='nav-tab__link link'>Регистрация</NavLink>
      <NavLink className='nav-tab__link link'>Войти</NavLink>
    </nav>
  </section>
  )
}