import './Footer.scss';

import Link from '../Link/Link';

export default function Footer() {
  <footer className='footer'>
    <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className='footer__container'>
      <p className="footer__year">{`© ${new Date().getFullYear()}`}</p>
      <>
        <Link classElement='footer__link' text='Яндекс.Практикум' />
        <Link classElement='footer__link' text='Github' />
      </>
    </div>
  </footer>
}