import './InfoTooltip.scss';

import fail from '../../images/fail.svg';
import accept from '../../images/accept.svg';

export default function InfoTooltip({infoPopup, cbInfoPopup}) {
  const { state, message, success } = infoPopup;

  function handleInfoPopup(e) {
    if(e.target === e.currentTarget) {
      cbInfoPopup()
    }
  }

  return (
    <div className={`popup${state ? " popup_active" : ''}`} onClick={handleInfoPopup}>
      <div className="popup__auth-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
        <img className="popup__auth-image" src={success ? accept : fail} alt={success ? 'Успех' : 'Провал'} />
        <h2 className="popup__auth-title">{message}</h2>
      </div>
    </div>
  )
}