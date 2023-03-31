import './AuthForm.scss';

import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthInput from '../AuthInput/AuthInput';

import logo from '../../images/logo.svg';

import { ERR_SUBMIT, AUTH_BASE_ERROR } from '../../utils/constans'

export default function AuthForm({register, cbSubmit, loggedIn}) {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(isValid) {
      setErrorSubmit('');
    }
  }, [isValid]);

  useEffect(() => {
    setDefaultValues();
    setIsValid(false);
    setErrors({});
    setErrorSubmit('');
  }, [register]);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = register ? values : { email: values.email, password: values.password };

    setIsValid(false);
    setLoading(true);

    cbSubmit(obj)
      .catch(err => {
        const replaceError = register ? ERR_SUBMIT.registration : ERR_SUBMIT.loggin;
        const message = replaceError[err.message] || AUTH_BASE_ERROR;

        setErrorSubmit(message);
      })
      .finally(() => {
        setDefaultValues();
        setLoading(false);
      });
  }

  function setDefaultValues() {
    setValues({ name: '', email: '', password: '' });
  }
  
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

  if (loggedIn) {
    return <Redirect to="/movies"/>;
  }

  return (
    <main className='main auth'>
      <form name='auth' className='auth__form' onSubmit={handleSubmit}>
        <div className='auth__content'>
          <Link to='/' className='auth__logo link'>
            <img className='logo' src={logo} alt='Логотип' />
          </Link>
          <h1 className='auth__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
          { 
            register && 
            <AuthInput 
              text='Имя' 
              cbChange={handleChange} 
              value={values.name} 
              error={errors.name}
              loading={loading}
            /> 
          }
          <AuthInput 
            text='E-mail' 
            cbChange={handleChange} 
            value={values.email} 
            error={errors.email} 
            loading={loading}
          />
          <AuthInput 
            text='Пароль' 
            cbChange={handleChange} 
            value={values.password} 
            error={errors.password}
            loading={loading}
          />
        </div>
        <div className='auth__content'>
          <label className='auth__error'>{errorSubmit}</label>
          <button 
            className={`auth__submit${isValid ? ' button' : ' auth__submit_disabled'}`} 
            type='submit' 
            disabled={!isValid ? 'disabled' : ''} 
          >{register ? 'Зарегистрироваться' : 'Войти'}</button>
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