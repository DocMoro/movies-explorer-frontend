import './NavTab.scss';

import logo from '../../images/logo.svg';

export default function NavTab() {
  return (
  <section className='nav-tab'>
    <img className='nav-tab__logo' src={logo} alt='Логотип' />
    <div className='nav-tab__container'>
      <button className='link nav-tab__link'>Регистрация</button>
      <button className='link nav-tab__link'>Войти</button>
    </div>
  </section>
  )
}