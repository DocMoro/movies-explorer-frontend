const REGEX = '^[A-ZА-ЯЁ]{1}[A-ZА-ЯЁa-zа-яё\\s-]{1,29}$';

const NAME_TECHS = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

const PROJECTS = [
  {
    link: 'https://docmoro.github.io/how-to-learn/',
    name: 'Статический сайт'
  },
  {
    link: 'https://docmoro.github.io/russian-travel/',
    name: 'Адаптивный сайт'
  },
  {
    link: 'https://docmoro.github.io/mesto/',
    name: 'Одностраничное приложение'
  },
  {
    link: 'https://andreymorogin.mesto.nomoredomainsrocks.ru/',
    name: 'Приложение с авторизацией'
  },
  {
    link: 'https://dnd-characters.ru/',
    name: 'Многостраничный пет-проект'
  }
];

const ERR_SUBMIT = {
  loggin: {
    'Переданы некорректные данные': 'При авторизации произошла ошибка. Переданный токен некорректен',
    'Ресурс по запрашиваемому _id не найден': 'Вы ввели неправильный логин или пароль.'
  },
  registration: {
    'Переданы некорректные данные': 'При регистрации пользователя произошла ошибка.',
    'Пользователь с данным email уже существует': 'Пользователь с данным email уже существует'
  }
}

const AUTH_BASE_ERROR = 'На сервере произошла ошибка';
const SEARCH_BASE_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ESC = 27;

export {
  REGEX,
  NAME_TECHS,
  PROJECTS,
  ERR_SUBMIT,
  AUTH_BASE_ERROR,
  SEARCH_BASE_ERROR,
  ESC
}