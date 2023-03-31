import './Profile.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect, useContext, useCallback } from 'react';

import Header from '../Header/Header';

import { REGEX } from '../../utils/constans';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({loggedIn, cbNavPopup, handleExit, cbUpdate}) {
  const currentUser = useContext(CurrentUserContext);

  const [values, setValues] = useState({ name: '', email: '' });
  const [isValid, setIsValid] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const {name, email} = currentUser;

    setValues({
      name,
      email
    });
  }, [currentUser]);

  function handleEditClick() {
    setIsEdit(!isEdit);
  }

  const identityVerification = useCallback((obj) => {
    return JSON.stringify(currentUser) !== JSON.stringify(obj);
  }, [currentUser])

  const handleChange = useCallback((e) => {
    const target = e.target;
    const currentDate = {
      ...values, 
      [target.name]: target.value
    };

    setValues(currentDate);
    setIsValid(identityVerification(currentDate) && target.closest("form").checkValidity());
  }, [identityVerification, values])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsValid(false);
    setLoading(true);

    cbUpdate(values)
      .finally(() => {
        setIsEdit(false);
        setLoading(false);
      });
  }, [cbUpdate, values])

  return (
    <>
      <Header 
        loggedIn={loggedIn} 
        cbNavPopup={cbNavPopup} 
      />
      <main className='main profile'>
        <form name='search' className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__attic'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <ul className='profile__list'>
              <li className='profile__cell'>
                <h2 className='profile__subtitle'>Имя</h2>
                <input 
                  className='profile__text' 
                  name='name' 
                  type='text' 
                  value={values.name} 
                  onChange={handleChange} 
                  pattern={REGEX} 
                  disabled={!isEdit || loading ? 'disabled' : ''} 
                  required
                ></input>
              </li>
              <li className='profile__cell'>
                <h2 className='profile__subtitle'>E-mail</h2>
                <input 
                  className='profile__text' 
                  name='email' 
                  type='email' 
                  value={values.email} 
                  onChange={handleChange} 
                  disabled={!isEdit || loading ? 'disabled' : ''} 
                  required
                ></input>
              </li>
            </ul>
          </div>
          <div className='profile__basement'>
          {
            !isEdit
            ? <>
                <button 
                  className='profile__button button' 
                  type='button' 
                  onClick={handleEditClick}
                >Редактировать</button>
                <Link 
                  to='/' 
                  className='profile__button profile__button_red link'
                  onClick={handleExit}
                >Выйти из аккаунта</Link>
              </>
            : <>
                <label className='auth-input__input-error'></label>
                <button 
                  className={`profile__submit ${isValid ? ' button' : ' profile__submit_disabled'}`} 
                  type='submit' 
                  disabled={!isValid ? 'disabled' : ''}
                >Сохранить</button>
              </>
          }
          </div>
        </form>
      </main>
    </>
  )
}