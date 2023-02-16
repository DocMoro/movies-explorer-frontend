import './Promo.scss';

import NavTab from '../NavTab/NavTab';

export default function Promo() {
  return (
    <section className='promo'>
      <NavTab />
      <div className='promo__container'>
        <div className='promo__left-side'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='button promo__button'></button>
        </div>
        <div className='promo_logo'></div>
      </div>
    </section>
  )
}