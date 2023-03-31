import './LoadPopup.scss';

import Preloader from '../Preloader/Preloader'; 

export default function LoadPopup() {
  return (
    <div className='load'>
      <Preloader />
    </div>
  )
}