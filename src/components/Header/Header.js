import './Header.scss';

export default function Header() {
  <header className='header'>
    <img className='header__logo' src={logo} alt='Логотип' />
    <div className='header__container'>
      <button>Регистрация</button>
      <button>Войти</button>
    </div>
  </header>
}