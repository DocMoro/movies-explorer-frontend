import './Profile.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile() {
  const currentUser = useContext(CurrentUserContext);

  const [ data, setData ] = useState({
    name: '',
    email: ''
  })
  const [ edit, setEdit ] = useState(false);

  useEffect(() => {
    const { name, email } = currentUser;

    setData({
      name,
      email
    });
  }, [currentUser]);

  function handleEditClick() {
    setEdit(!edit);
  }

  return (
    <main className='main profile'>
      <form name='search' className='profile__form'>
        <div className='profile__attic'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <ul className='profile__list'>
            <li className='profile__cell'>
              <h2 className='profile__subtitle'>Имя</h2>
              <input className='profile__text' name='name' type='text' value={data.name} disabled={!edit ? 'disabled' : ''} required></input>
            </li>
            <li className='profile__cell'>
              <h2 className='profile__subtitle'>E-mail</h2>
              <input className='profile__text' name='email' type='email' value={data.email} disabled={!edit ? 'disabled' : ''} required></input>
            </li>
          </ul>
        </div>
        <div className='profile__basement'>
        {
          !edit
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