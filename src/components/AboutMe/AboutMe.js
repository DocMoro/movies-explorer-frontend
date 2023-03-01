import './AboutMe.scss';

import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me page__section'>
      <h2 className='about-me__header page__header'>Студент</h2>
      <div className='about-me__container'>
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
          <div className='about-me__photo'></div>
        </div>
        <Portfolio />
      </div>
    </section>
  )
}