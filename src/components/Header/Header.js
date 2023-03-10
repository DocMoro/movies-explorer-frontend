import './Header.scss';

import { Link  } from 'react-router-dom';

import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';

export default function Header({main, callback}) {
  return (
    <header className={`header${main ? ' header_blue' : ''}`}>
      <Link to='/' className='link'>
        <img className='header__logo logo' src={logo} alt='Логотип' />
      </Link>
      {
        main
        ? <NavTab />
        : <Navigation callback={callback} />
      }
    </header>
  )
}