import './AboutProject.scss';

export default function AboutProject() {
  return (
    <section className='about-project section page__section'>
      <h2 className='about-project__header page__header'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__description'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className='about-project__scheme'>
          <p className='about-project__cell about-project__cell_color_green'>1 неделя</p>
          <p className='about-project__cell about-project__cell_color_grey'>4 недели</p>
          <p className='about-project__cell-bottom'>Back-end</p>
          <p className='about-project__cell-bottom'>Front-end</p>
        </div>
      </div>
    </section>
  )
}