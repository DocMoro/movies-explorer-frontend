import './SearchForm.scss';

import { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({}) {
  const [data, setData] = useState({
    name: '',
    ckeckbox: false
  });

  function handleChange(e) {
    const {name, value} = e.target;
    console.log({name, value});
    setData({
      ...data,
      [name]: value
    });
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
        <input name='name' placeholder='Фильм' className='search__input' type='text' onClick={handleChange} value={data.name}></input>
        <button type='submit' className='search__button button'></button>
      </div>
        <span className='search__input-error'></span>
      <FilterCheckbox callback={handleChange} checkbox={data.checkbox} />
    </form>
  )
}