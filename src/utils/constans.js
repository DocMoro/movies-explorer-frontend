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

const ESC = 27;

export {
  REGEX,
  nameTechs,
  projects,
  ESC
}