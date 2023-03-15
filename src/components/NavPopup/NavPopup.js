import './NavPopup.scss';

import { useLocation, NavLink } from 'react-router-dom';

export default function NavPopup({menu, callback}) {
  const { pathname } = useLocation();

  function handleClickLink(e) {
    if(pathname !== e.target.pathname) {
      callback();
    }
  }

  function handlerClickClose (e) {
    if(e.target === e.currentTarget) {
      callback();
    }
  }

  return (
    <div className={`popup${menu ? ' popup_active' : ''}`} onClick={handlerClickClose} >
      <nav className='popup__container'>
        <button onClick={callback} className='popup__close button'></button>
        <div className='popup__nav'>
          <NavLink onClick={handleClickLink} to='' className={`popup__link${pathname === '/' ? ' popup__link_active' : ''} link`}>Главная</NavLink>
          <NavLink onClick={handleClickLink} to='movies' className={`popup__link${pathname === '/movies' ? ' popup__link_active' : ''} link`}>Фильмы</NavLink>
          <NavLink onClick={handleClickLink} to='saved-movies' className={`popup__link${pathname === '/saved-movies' ? ' popup__link_active' : ''} link`}>Сохраненные фильмы</NavLink>
        </div>
        <NavLink onClick={handleClickLink} to='profile' className='popup__link popup__link_profile link'>Аккаунт</NavLink>
      </nav>
    </div>
  )
}