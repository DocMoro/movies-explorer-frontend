import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className="footer__year">{`© ${new Date().getFullYear()}`}</p>
        <div className='footer__links'>
          <a className='link footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
          <a className='link footer__link' href='https://github.com/DocMoro'>Github</a>
        </div>
      </div>
    </footer>
  )
}