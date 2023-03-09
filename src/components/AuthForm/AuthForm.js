import './AuthForm.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthInput from '../AuthInput/AuthInput';

import logo from '../../images/logo.svg';

export default function AuthForm({register}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  
  function handleChange(e) {
    const target = e.target;
    const {name, value} = target;

    setValues({
      ...values, 
      [name]: value
    });

    setErrors({
      ...errors, 
      [name]: target.validationMessage 
    });

    setIsValid(target.closest("form").checkValidity());
  }

  return (
    <main className='main auth'>
      <form name='auth' className='auth__form'>
        <div className='auth__content'>
          <Link to='/' className='auth__logo link'>
            <img className='logo' src={logo} alt='Логотип' />
          </Link>
          <h1 className='auth__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
          { 
            register && <AuthInput text='Имя' cbChange={handleChange} value={values.name} error={errors.name} /> 
          }
          <AuthInput text='E-mail' cbChange={handleChange} value={values.email} error={errors.email} />
          <AuthInput text='Пароль' cbChange={handleChange} value={values.password} error={errors.password} />
        </div>
        <div className='auth__content'>
          <button className={`auth__submit${isValid ? ' button' : ' auth__submit_disabled'}`} type='submit' disabled={!isValid ? 'disabled' : ''} >{register ? 'Зарегистрироваться' : 'Войти'}</button>
          <div className='auth__container'>
          {
            !register
              ? <>
                  <p className='auth__text'>Ещё не зарегистрированы?</p>
                  <Link to='/signup' className="auth__link link">Регистрация</Link>
                </>
              : <>
                  <p className='auth__text'>Ужу зарегестрированы?</p>
                  <Link to='/signin' className="auth__link link">Войти</Link>
                </>
          }
          </div>
        </div>
      </form>
    </main>
  )
}