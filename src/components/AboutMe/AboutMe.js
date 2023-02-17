import './AboutMe.scss';

export default function AboutMe() {
  return (
    <section className='about-me page__section'>
      <h2 className='about-me__header page__header'>Студент</h2>
      <div className='about-me__container container'>
        <div className='about-me__info'>
          <div className='about-me__left-side'>
            <h3 className='about-me__title page__title'>Виталий</h3>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
            <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 
              года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='link about-me__link' href='https://github.com/DocMoro'>Github</a>
          </div>
          <img className='about-me__photo' href='../../images/photo.img' alt='photo developer' />
        </div>
        <h3 className='about-me__subtitle'>Портфолио</h3>
        <ul className='about-me__list'>
          <li className='about-me__cell'>
            <h4 className='about-me__name'></h4>
            <a className='link about-me__link' href='https://github.com/DocMoro'>
              <div className='about-me__image'></div>
            </a>
          </li>
          <li className='about-me__cell'>
            <h4 className='about-me__name'></h4>
            <a className='link about-me__link' href='https://github.com/DocMoro'>
              <div className='about-me__image'></div>
            </a>
          </li>
          <li className='about-me__cell'>
            <h4 className='about-me__name'></h4>
            <a className='link about-me__link' href='https://github.com/DocMoro'>
              <div className='about-me__image'></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}