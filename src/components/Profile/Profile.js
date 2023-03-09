import './Profile.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile() {
  const currentUser = useContext(CurrentUserContext);

  const [ values, setValues ] = useState({})
  const [ isEdit, setIsEdit ] = useState(false);

  useEffect(() => {
    const { name, email } = currentUser;

    setValues({
      name,
      email
    });
  }, [currentUser]);

  function handleEditClick() {
    setIsEdit(!isEdit);
  }

  return (
    <main className='main profile'>
      <form name='search' className='profile__form'>
        <div className='profile__attic'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <ul className='profile__list'>
            <li className='profile__cell'>
              <h2 className='profile__subtitle'>Имя</h2>
              <input className='profile__text' name='name' type='text' value={values.name} disabled={!isEdit ? 'disabled' : ''} required></input>
            </li>
            <li className='profile__cell'>
              <h2 className='profile__subtitle'>E-mail</h2>
              <input className='profile__text' name='email' type='email' value={values.email} disabled={!isEdit ? 'disabled' : ''} required></input>
            </li>
          </ul>
        </div>
        <div className='profile__basement'>
        {
          !isEdit
          ? <>
              <button className='profile__button button' type='button' onClick={handleEditClick}>Редактировать</button>
              <Link to='/' className='profile__button profile__button_color_red link'>Выйти из аккаунта</Link>
            </>
          : <>
              <label className='auth-input__input-error searchRegister'></label>
              <button className='profile__button profile__button_color_blue button' type='submit'>Сохранить</button>
            </>
        }
        </div>
      </form>
    </main>
  )
}