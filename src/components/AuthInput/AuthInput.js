import './AuthInput.scss';

export default function AuthInput({text}) {
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
  }

  return (
    <fieldset className='auth-input'>
      <h2 className='auth-input__title'>{data.text}</h2>
      <input className='auth-input__input input' name={data.name} type={data.type} required></input>
      <label className={`auth-input__input-error ${data.name}Register`}></label>
    </fieldset>
  )
}