import './SearchForm.scss';

import { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  const [data, setData] = useState({
    name: '',
    checkbox: false
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleClick() {
    setData({
      ...data,
      checkbox: !data.checkbox
    })

  }

  /* function handleSubmit(e) {
    e.preventDefault();
  
    callback(data);
    setData({
      name: '',
      ckeckbox: false
    });
  } */

  return (
    <form name='search' className='search' /* onSubmit={handleSubmit} */ >
      <div className='search__container'>
        <input name='name' placeholder='Фильм' className='search__input input' type='text' onChange={handleChange} value={data.name} required></input>
        <button type='submit' className='search__button button'></button>
      </div>
        <label className='search__input-error nameRegister'></label>
      <FilterCheckbox callback={handleClick} checkbox={data.checkbox} />
    </form>
  )
}