import './Portfolio.scss';

export default function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__cell'>
          <h4 className='portfolio__name'>Статический сайт</h4>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <div className='portfolio__image'></div>
          </a>
        </li>
        <li className='portfolio__cell'>
          <h4 className='portfolio__name'>Адаптивный сайт</h4>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <div className='portfolio__image'></div>
          </a>
        </li>
        <li className='portfolio__cell'>
          <h4 className='portfolio__name'>Одностраничное приложение</h4>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <div className='portfolio__image'></div>
          </a>
        </li>
      </ul>
    </>
  )
}