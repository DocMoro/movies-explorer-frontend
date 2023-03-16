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
}

const mainApi = new MainApi({
  URL: 'https://api.andreymorogin.movies.nomoredomainsclub.ru/'
});

export default mainApi;