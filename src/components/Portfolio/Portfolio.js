import './Portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__cell'>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <h4 className='portfolio__name'>Статический сайт</h4>
            <div className='portfolio__image'></div>
          </a>
        </li>
        <li className='portfolio__cell'>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <h4 className='portfolio__name'>Адаптивный сайт</h4>
            <div className='portfolio__image'></div>
          </a>
        </li>
        <li className='portfolio__cell'>
          <a className='link portfolio__link' href='https://github.com/DocMoro'>
            <h4 className='portfolio__name'>Одностраничное приложение</h4>
            <div className='portfolio__image'></div>
          </a>
        </li>
      </ul>
    </div>
  )
}