const REGEX = '^[A-ZА-ЯЁ]{1}[A-ZА-ЯЁa-zа-яё\\s-]{1,29}$';

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

const dataCards = [
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  },
  {
    _id: 12,
    name: 'Киноальманах «100 лет дизайна»',
    link: 'https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg',
    time: '1ч 42м'
  }
];

export {
  REGEX,
  projects,
  dataCards
}