import './Footer.scss';

import Href from '../Href/Href';

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className="footer__year">{`© ${new Date().getFullYear()}`}</p>
        <div>
          <Href classElement={'footer__link'} text={'Яндекс.Практикум'} href={'https://practicum.yandex.ru/'}/>
          <Href classElement={'footer__link'} text={'Github'} href={'https://github.com/DocMoro'}/>
        </div>
      </div>
    </footer>
  )
}