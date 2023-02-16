import './Techs.scss';

export default function Techs() {
  return (
    <section className='techs section'>
      <h2 className='techs__header section__header'>Технологии</h2>
      <h3 className='tesh__subtitle'>7 технологий</h3>
      <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='tech__list'>
        <li className='tech__cell'>
          <p className='tech__text-cell'>HTML</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>CSS</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>JS</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>React</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>Git</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>Express.js</p>
        </li>
        <li className='tech__cell'>
          <p className='tech__text-cell'>mongoDB</p>
        </li>
      </ul>
    </section>
  )
}