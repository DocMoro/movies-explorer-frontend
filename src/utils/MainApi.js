const BASE_URL = 'https://api.andreymorogin.movies.nomoredomainsclub.ru/';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);

export const register = ({password, email, name}) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
  .then(checkResponse)
};

export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then(checkResponse)
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
}