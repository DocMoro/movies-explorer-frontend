import './NavTab.scss';

import { NavLink, Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function NavTab() {
  return (
  <section className='nav-tab'>
    <Link to='/' className='link'>
      <img className='nav-tab__logo logo' src={logo} alt='Логотип' />
    </Link>
    <nav className='nav-tab__container'>
      <NavLink to='/signup' className='nav-tab__link link'>Регистрация</NavLink>
      <NavLink to='/signin' className='nav-tab__link nav-tab__link_green link'>Войти</NavLink>
    </nav>
  </section>
  )
}