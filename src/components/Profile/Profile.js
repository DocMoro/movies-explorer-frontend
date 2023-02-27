import './Profile.scss';

import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <ul className='profile__list'>
        <li className='profile__cell'>
          <h2 className='profile__subtitle'>Имя</h2>
          <p className='profile__text'>Виталий</p>
        </li>
        <li className='profile__cell'>
          <h2 className='profile__subtitle'>E-mail</h2>
          <p className='profile__text'>pochta@yandex.ru</p>
        </li>
      </ul>
      <button className='profile__button button'>Редактировать</button>
      <Link to='/' className='profile__button profile__button_red link'>Выйти из аккаунта</Link>
    </main>
  )
}