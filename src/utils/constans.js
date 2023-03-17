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
  },
  search: {

  }
}

const AUTH_BASE_ERROR = 'На сервере произошла ошибка';
const SEARCH_BASE_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ESC = 27;

export {
  REGEX,
  nameTechs,
  projects,
  errorsSubmit,
  AUTH_BASE_ERROR,
  SEARCH_BASE_ERROR,
  ESC
}