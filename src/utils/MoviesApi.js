class MoviesApi {
  constructor(options) {
    this._URL = options.URL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(this._URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  URL: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;