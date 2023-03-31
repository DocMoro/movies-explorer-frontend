import './NavPopup.scss';

import { useLocation, NavLink } from 'react-router-dom';
import { useCallback } from 'react';

export default function NavPopup({navPopup, cbNavPopup}) {
  const { pathname } = useLocation();

  const handleClickLink = useCallback((e) => {
    if(pathname !== e.target.pathname) {
      cbNavPopup();
    }
  }, [cbNavPopup, pathname])

  const handlerClickClose = useCallback((e) => {
    if(e.target === e.currentTarget) {
      cbNavPopup();
    }
  }, [cbNavPopup])

  return (
    <div className={`menu${navPopup ? ' menu_active' : ''}`} onClick={handlerClickClose} >
      <nav className='menu__container'>
        <button onClick={cbNavPopup} className='menu__close button'></button>
        <div className='menu__nav'>
          <NavLink onClick={handleClickLink} to='' className={`menu__link${pathname === '/' ? ' menu__link_active' : ''} link`}>Главная</NavLink>
          <NavLink onClick={handleClickLink} to='movies' className={`menu__link${pathname === '/movies' ? ' menu__link_active' : ''} link`}>Фильмы</NavLink>
          <NavLink onClick={handleClickLink} to='saved-movies' className={`menu__link${pathname === '/saved-movies' ? ' menu__link_active' : ''} link`}>Сохраненные фильмы</NavLink>
        </div>
        <NavLink onClick={handleClickLink} to='profile' className='menu__link menu__link_profile link'>Аккаунт</NavLink>
      </nav>
    </div>
  )
}