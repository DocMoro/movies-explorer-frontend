import './NotFound.scss';

import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const hist = useHistory();

  return(
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <button onClick={() => hist.goBack()} className='not-found__button button'>Назад</button>
    </section>
  )
}