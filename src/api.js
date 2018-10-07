import { API_KEY, API_URL } from './config'

function printError(error) {
  // eslint-disable-next-line no-console
  console.log('api-error:', error)
}

export default class Api {
  fetch

  constructor(fetch) {
    this.fetch = fetch
  }
  discoverMovies = () => {
    return fetch(`${API_URL}discover/movie?api_key=${API_KEY}`)
      .catch(printError)
      .then(response => response.json())
  }
}
