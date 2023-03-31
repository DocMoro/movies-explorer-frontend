import './SearchForm.scss';

import { useCallback, useEffect, useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({saved, cbSearch, cbCheckbox, loader}) {
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

  const saveSearch = useCallback((data) => {
    const localPath = saved ? 'user-search' : 'search';

    localStorage.setItem(localPath, JSON.stringify(data));
  }, [saved])

  const handleCheckbox = useCallback(() => {
    setData((state) => {
      const newState = {
        ...state,
        checkbox: !state.checkbox
      };

      cbCheckbox(newState);
      saveSearch(newState);
      return newState
    })
  }, [cbCheckbox, saveSearch])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    saveSearch(data);
    cbSearch(data);
  }, [saveSearch, cbSearch, data])

  const handleChange = useCallback((e) =>{
    const {name, value} = e.target;

    setErr('');
    setData({
      ...data,
      [name]: value
    });
  }, [data])

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
        ></input>
        <button 
          type='submit' 
          className='search__button'
          disabled={loader ? 'disabled' : ''}>
        </button>
      </div>
        <label className='search__input-error'>{err}</label>
      <FilterCheckbox handleCheckbox={handleCheckbox} checkbox={data.checkbox} />
    </form>
  )
}