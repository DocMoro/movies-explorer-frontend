import './FilterCheckbox.scss';

export default function FilterCheckbox({checkbox, handleCheckbox}) {
  return (
    <div className='filter'>
      <input name='checkbox' className='filter__checkbox' type='checkbox' value={checkbox}></input>
      <label className={`filter__text${checkbox ? ' filter__text_activated' : ''}`} onClick={handleCheckbox}>Короткометражки</label>
    </div>
  )
}