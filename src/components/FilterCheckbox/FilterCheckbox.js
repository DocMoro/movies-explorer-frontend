import './FilterCheckbox.scss';

export default function FilterCheckbox({checkbox, callback}) {
  return (
    <div className='filter'>
      <input name='checkbox' className='filter__checkbox' type='checkbox' onClick={callback} value={checkbox}></input>
      <span className={`filter__text${checkbox && ' filter__text_activated'}`}>Короткометражки</span>
    </div>
  )
}