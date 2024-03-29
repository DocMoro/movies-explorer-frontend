import './Techs.scss';

import { NAME_TECHS } from '../../utils/constans';

export default function Techs() {
  return (
    <section className='techs page__section'>
      <h2 className='techs__header page__header'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили 
        технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          {NAME_TECHS.map((nameTech, i) => (
            <li className='techs__cell' key={i}>
              <p className='techs__text'>{nameTech}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}