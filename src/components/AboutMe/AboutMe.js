import './AboutMe.scss';

import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me page__section'>
      <h2 className='about-me__header page__header'>Студент</h2>
        <div className='about-me__info'>
          <div className='about-me__container'>
            <h3 className='about-me__title'>Андрей</h3>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 25 лет</h4>
            <p className='about-me__text'>Я родился и живу в Санкт-Петербурге, закончил факультет 
              "Информационных и управляющих систем" БГТУ Военмех. Я люблю актерское мастерство, 
              биографии поэтов, а ещё увлекаюсь экстремальными видами спорта. С 2020 
              года работал инженер-программистом. После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='link about-me__link' href='https://github.com/DocMoro'>Github</a>
          </div>
          <div className='about-me__photo'></div>
        </div>
        <Portfolio />
    </section>
  )
}