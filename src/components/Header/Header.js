import './Header.scss';

import { Link  } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo logo' src={logo} alt='Логотип' />
      </Link>
      <Navigation />
    </header>
  )
}