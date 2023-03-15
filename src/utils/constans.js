const REGEX = '^[A-ZА-ЯЁ]{1}[A-ZА-ЯЁa-zа-яё\\s-]{1,29}$';

const nameTechs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

const projects = [
  {
    link: 'https://github.com/DocMoro',
    name: 'Статический сайт'
  },
  {
    link: 'https://github.com/DocMoro',
    name: 'Адаптивный сайт'
  },
  {
    link: 'https://github.com/DocMoro',
    name: 'Одностраничное приложение'
  }
];

const errorsSubmit = {
  loggin: {
    'Переданы некорректные данные': 'При авторизации произошла ошибка. Переданный токен некорректен',
    'Ресурс по запрашиваемому _id не найден': 'Вы ввели неправильный логин или пароль.'
  },
  registration: {
    'Переданы некорректные данные': 'При регистрации пользователя произошла ошибка.',
    'Пользователь с данным email уже существует': 'Пользователь с данным email уже существует'
  }
}

const baseError = 'На сервере произошла ошибка';

const ESC = 27;

export {
  REGEX,
  nameTechs,
  projects,
  errorsSubmit,
  baseError,
  ESC
}