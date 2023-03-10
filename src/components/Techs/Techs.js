import './Techs.scss';

import { nameTechs } from '../../utils/constans';

export default function Techs() {
  return (
    <section className='techs page__section'>
      <h2 className='techs__header page__header'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили 
        технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          {nameTechs.map(nameTech => (
            <li className='techs__cell'>
              <p className='techs__text'>{nameTech}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}