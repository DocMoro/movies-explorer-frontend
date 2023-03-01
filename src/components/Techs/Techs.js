import './Techs.scss';

export default function Techs() {
  return (
    <section className='techs page__section'>
      <h2 className='techs__header page__header'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title page__title'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          <li className='techs__cell'>
            <p className='techs__text-cell'>HTML</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>CSS</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>JS</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>React</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>Git</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>Express.js</p>
          </li>
          <li className='techs__cell'>
            <p className='techs__text-cell'>mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  )
}