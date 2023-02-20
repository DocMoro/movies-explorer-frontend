import './FilterCheckbox.scss';

export default function FilterCheckbox() {
  return (
    <fieldset className='filter'>
      <input className='filter__checkbox' type='checkbox'></input>
      <span className='filter__text'>Короткометражки</span>
    </fieldset>
  )
}