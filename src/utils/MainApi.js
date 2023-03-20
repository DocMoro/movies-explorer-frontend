class MainApi {
  constructor(options) {
    this._URL = options.URL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register({password, email, name}) {
    return fetch(`${this._URL}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email, name})
    })
    .then(this._checkResponse)
  }

  authorize({password, email}) {
    return fetch(`${this._URL}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(this._checkResponse)
  }

  getContent(token) {
    return fetch(`${this._URL}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(this._checkResponse)
  }

  getUserCards() {
    return fetch(`${this._url}movies`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponse);
  }

  createCard(card) {
    return fetch(`${this._url}movies`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    .then(this._checkResponse);
  }

  setUserInfo({name, about}) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  URL: 'https://api.andreymorogin.movies.nomoredomainsclub.ru/'
});

export default mainApi;