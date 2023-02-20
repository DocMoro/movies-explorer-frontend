import './SearchForm.scss';

import { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({callback}) {
  const [data, setData] = useState({
    name: '',
    ckeckbox: false
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    callback(data);
    setData({
      name: '',
      ckeckbox: false
    });
  }

  return (
    <form name='search' className='search' onSubmit={handleSubmit} >
      <div>
        <input name='name' placeholder='Фильм' className='search__input' type='text' onClick={handleChange} value={data.name}></input>
        <button type='submit' className='search__button'></button>
      </div>
        <span className='search__input-error'></span>
      <FilterCheckbox callback={handleChange} checkbox={data.checkbox} />
    </form>
  )
}