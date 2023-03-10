import './AuthInput.scss';

import { REGEX } from '../../utils/constans';

export default function AuthInput({text, cbChange, value, error}) {
  let data;
  
  switch(text) {
    case 'Имя':
      data = {
        text: 'Имя',
        name: 'name',
        type: 'text'
      };
      break;

    case 'E-mail':
      data = {
        text: 'E-mail',
        name: 'email',
        type: 'email'
      };
      break;

    case 'Пароль':
      data = {
        text: 'Пароль',
        name: 'password',
        type: 'password'
      };
      break;

    default:
      data = {
        text: undefined,
        name: undefined,
        type: undefined
      };
  }

  return (
    <fieldset className='auth-input'>
      <h2 className='auth-input__title'>{data.text}</h2>
      {
        data.name === 'name'
        ? <input 
            className='auth-input__input input' 
            name={data.name} 
            type={data.type} 
            value={value} 
            onChange={cbChange} 
            pattern={REGEX}
            required
          ></input>
        : <input 
            className='auth-input__input input' 
            name={data.name} 
            type={data.type} 
            value={value} 
            onChange={cbChange} 
            required
          ></input>
      }
      <label className='auth-input__input-error'>{error}</label>
    </fieldset>
  )
}