import './AuthForm.scss';

import { Link } from 'react-router-dom';

import AuthInput from '../AuthInput/AuthInput';

import logo from '../../images/logo.svg';

export default function AuthForm({register}) {
  const [ data, setData ] = useState(register ? {
    name: '',
    email: '',
    password: ''
  } : {
    email: '',
    password: ''
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <main className='main auth'>
      <form name='auth' className='auth__form'>
        <div className='auth__content'>
          <Link to='/' className='link'>
            <img className='auth__logo logo' src={logo} alt='Логотип' />
          </Link>
          <h1 className='auth__title'>{register ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
          { 
            register && <AuthInput text='Имя' cbChange={handleChange} value={data.name} /> 
          }
          <AuthInput text='E-mail' cbChange={handleChange} value={data.email} />
          <AuthInput text='Пароль' cbChange={handleChange} value={data.password} />
        </div>
        <div className='auth__content'>
          <button className='auth__submit button' type='submit'>{register ? 'Зарегистрироваться' : 'Войти'}</button>
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