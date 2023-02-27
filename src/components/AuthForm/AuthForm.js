import './AuthForm.scss';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function AuthForm({register}) {
  return (
    <main className='authForm'>
      <Link to='/'>
        <img className='authForm__logo logo' src={logo} alt='Логотип' />
      </Link>
      <h1 className='authForm__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className='authForm__form'>
        {
          register && 
          <>
            <h2 className='authForm__subtitle'>Имя</h2>
            <input className='authForm__input input' name='name' type='text' required></input>
            <span className='authForm__input-error registerName'></span>
          </>
        }
        <h2 className='authForm__subtitle'>E-mail</h2>
        <input className='authForm__input input' name='email' type='email' required></input>
        <span className='authForm__input-error registerEmail'></span>
        <h2 className='authForm__subtitle'>Пароль</h2>
        <input className='authForm__input input' name='password' type='password' required></input>
        <span className='authForm__input-error registerPassword'>Что-то пошло не так...</span>
        <button className='authForm__submit' type='submit'>{register ? 'Зарегистрироваться' : 'Войти'}</button>
        <div className='authForm__container'>
        {
          register
            ? <>
                <p className='authForm__text'>Ещё не зарегистрированы?</p>
                <Link to='/signup' className="authForm__link link">Регистрация</Link>
              </>
            : <>
                <p className='authForm__text'>Ужу зарегестрированы?</p>
                <Link to='/signin' className="authForm__link link">Войти</Link>
              </>
        }
        </div>
      </form>
    </main>
  )
}