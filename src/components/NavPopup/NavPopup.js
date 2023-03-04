import './NavPopup.scss';

import { useLocation, NavLink } from 'react-router-dom';

export default function NavPopup({buttonMenu, callback}) {
  const { pathname } = useLocation();

  return (
    <div className={`popup${buttonMenu ? ' popup_active' : ''}`}>
      <nav className='popup__container'>
        <button onClick={callback} className='popup__close button'></button>
        <div className='popup__nav'>
          <NavLink to='' className={`popup__link${pathname === '/' ? ' popup__link_active' : ''} link`}>Главная</NavLink>
          <NavLink to='movies' className={`popup__link${pathname === '/movies' ? ' popup__link_active' : ''} link`}>Фильмы</NavLink>
          <NavLink to='saved-movies' className={`popup__link${pathname === '/saved-movies' ? ' popup__link_active' : ''} link`}>Сохраненные фильмы</NavLink>
        </div>
        <NavLink to='profile' className='popup__link popup__link_profile link'>Аккаунт</NavLink>
      </nav>
    </div>
  )
}