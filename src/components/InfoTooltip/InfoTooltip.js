import fail from '../../images/fail.svg';

export default function InfoTooltip({infoPopup, cbInfoPopup}) {
  const { state, error} = infoPopup;

  function handleInfoPopup(e) {
    if(e.target === e.currentTarget) {
      cbInfoPopup()
    }
  }

  return (
    <div className={`popup ${state && "popup_active"}`} onClick={onClick={handleInfoPopup}}>
      <div className="popup__auth-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть"></button>
        <img className="popup__auth-image" src={fail}/>
        <h2 className="popup__auth-title">{error}</h2>
      </div>
    </div>
  )
}