//@flow
import { API_KEY, API_URL } from './config'
import logger from 'log'

function printError(error: Error): Promise<*> {
  logger.error('api-error:', error)
  return new Promise.reject(error)
}

function unWrapJson(response: Response): Promise<*> {
  return response.json()
}
export default class Api {
  fetch = null

  constructor(fetch: *) {
    this.fetch = fetch
  }

  askUserPremission = (requestToken: ?string) => {
    if (requestToken) {
      window.open(`https://www.themoviedb.org/authenticate/${requestToken}`)
    }
  }

  createRequestToken = (): Promise<*> => {
    return fetch(`${API_URL}authentication/token/new?api_key=${API_KEY}`)
      .catch(printError)
      .then(unWrapJson)
  }

  createSessionId = (requestToken: ?string) => {
    return fetch(`${API_URL}authentication/session/new?api_key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({ request_token: requestToken }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(printError)
      .then(unWrapJson)
  }

  discoverMovies = (page: ?string) => {
    const url = new URL(`${API_URL}discover/movie`)
    url.search = new URLSearchParams({
      api_key: API_KEY,
      page: page || '1'
    }).toString()
    return fetch(url)
      .catch(printError)
      .then(unWrapJson)
  }

  getGenres = () => {
    return fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}`)
      .catch(printError)
      .then(unWrapJson)
  }
}
