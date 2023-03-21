import './SearchForm.scss';

import { useEffect, useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({saved, cbSearch}) {
  const [err, setErr] = useState('');
  const [data, setData] = useState({
    name: '',
    checkbox: false
  });

  useEffect(() => {
    const localPath = saved ? 'user-search' : 'search';
    const dataSearch = JSON.parse(localStorage.getItem(localPath));

    if(dataSearch) {
      setData(dataSearch);
    }
  }, [saved]);

  function handleChange(e) {
    const {name, value} = e.target;

    setErr('');
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
    
    if(data.name !== '') {
      const localPath = saved ? 'user-search' : 'search';

      localStorage.setItem(localPath, JSON.stringify(data));
      cbSearch(data);
    } else {
      setErr('Нужно ввести ключевое слово');
    }
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
        <label className='search__input-error'>{err}</label>
      <FilterCheckbox handleCheckbox={handleCheckbox} checkbox={data.checkbox} />
    </form>
  )
}