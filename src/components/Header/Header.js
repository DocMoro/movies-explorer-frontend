import './Header.scss';

import { Link, useLocation  } from 'react-router-dom';

import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';

export default function Header({loggedIn, cbNavPopup}) {
  const { pathname } = useLocation();

  return (
    <header className={`header${pathname === '/' ? ' header_blue' : ''}`}>
      <Link to='/' className='link'>
        <img className='header__logo logo' src={logo} alt='Логотип' />
      </Link>
      {
        loggedIn
        ? <Navigation cbNavPopup={cbNavPopup} />
        : <NavTab />
      }
    </header>
  )
}