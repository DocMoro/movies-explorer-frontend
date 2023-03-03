import './NavPopup.scss';

export default function NavPopup({buttonMenu, callback}) {
  const { pathname } = useLocation();

  return (
    <nav className={`popup${buttonMenu ? ' popup_active' : ''}`}>
      <button onClick={callback} className='popup__close'></button>
      <NavLink to='' className={`popup__link${pathname === '/' ? ' popup__link_active' : ''} link`}>Главная</NavLink>
      <NavLink to='movies' className={`popup__link${pathname === '/movies' ? ' popup__link_active' : ''} link`}>Фильмы</NavLink>
      <NavLink to='saved-movies' className={`popup__link${pathname === '/saved-movies' ? ' popup__link_active' : ''} link`}>Сохраненные фильмы</NavLink>
      <NavLink to='profile' className={`popup__link${pathname === '/profile' ? ' popup__link_active' : ''} popup__link_profile link`}>Аккаунт</NavLink>
    </nav>
  )
}