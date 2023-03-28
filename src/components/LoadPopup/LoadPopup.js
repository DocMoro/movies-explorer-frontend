import './LoadPopup.scss';

import Preloader from '../Preloader/Preloader'; 

export default function LoadPopup({loadPopup}) {
  return (
    <div className={`load${loadPopup ? ' load_active' : ''}`}>
      <Preloader />
    </div>
  )
}