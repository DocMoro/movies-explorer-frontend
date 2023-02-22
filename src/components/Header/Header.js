import './Header.scss';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <div className='header__container'>
        <button className='header__button button'>Фильмы</button>
      </div>
    </header>
  )
}