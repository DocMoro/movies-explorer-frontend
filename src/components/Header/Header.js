import './Header.scss';

import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo logo' src={logo} alt='Логотип' />
      <Navigation />
    </header>
  )
}