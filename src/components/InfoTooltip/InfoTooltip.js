import './InfoTooltip.scss';

import { useCallback } from 'react';

import fail from '../../images/fail.svg';
import accept from '../../images/accept.svg';

export default function InfoTooltip({infoPopup, cbInfoPopup}) {
  const { state, message, success } = infoPopup;

  const handleInfoPopup = useCallback((e) => {
    if(e.target === e.currentTarget) {
      cbInfoPopup(message, success)
    }
  }, [cbInfoPopup, message, success])

  const handlerClouse = useCallback(() => {
    cbInfoPopup(message, success)
  }, [cbInfoPopup, message, success])

  return (
    <div className={`popup${state ? " popup_active" : ''}`} onClick={handleInfoPopup}>
      <div className="popup__auth-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={handlerClouse}></button>
        <img className="popup__auth-image" src={success ? accept : fail} alt={success ? 'Успех' : 'Провал'} />
        <h2 className="popup__auth-title">{message}</h2>
      </div>
    </div>
  )
}