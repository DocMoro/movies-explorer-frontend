import './SearchForm.scss';

import { useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({cbSearch, submitError}) {
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

  function handleCheckbox() {
    setData({
      ...data,
      checkbox: !data.checkbox
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    cbSearch(data);
  }

  return (
    <form name='search' className='search' onSubmit={handleSubmit} >
      <div className='search__container'>
        <input 
          name='name' 
          placeholder='Фильм' 
          className='search__input input' 
          type='text' 
          onChange={handleChange} 
          value={data.name} 
          required
        ></input>
        <button type='submit' className='search__button button'></button>
      </div>
        <label className='search__input-error'>{submitError}</label>
      <FilterCheckbox handleCheckbox={handleCheckbox} checkbox={data.checkbox} />
    </form>
  )
}