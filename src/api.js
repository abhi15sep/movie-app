//@flow
import { API_KEY, API_URL, DEFAULT_LANGUAGE } from './config'
import logger from 'log'

function printError(error: Error): Promise<*> {
  logger.error('api-error:', error)
  return new Promise.reject(error)
}

function unWrapJson(response: Response): Promise<*> {
  return response.json()
}
export default class Api {
  fetch: () => Promise<*>

  constructor(fetch: () => Promise<*>) {
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
    return fetch(this.buildUrl('discover/movie', { page: page || '1' }))
      .catch(printError)
      .then(unWrapJson)
  }

  discoverSeries = (page: ?string) => {
    return fetch(this.buildUrl('discover/tv', { page: page || '1' }))
      .catch(printError)
      .then(unWrapJson)
  }

  getMovieGenres = () => {
    return fetch(this.buildUrl('genre/movie/list'))
      .catch(printError)
      .then(unWrapJson)
  }

  getSeriesGenres = () => {
    return fetch(this.buildUrl('genre/tv/list'))
      .catch(printError)
      .then(unWrapJson)
  }

  buildUrl = (path: string, params: {} = {}): URL => {
    const newUrl = new URL(`${API_URL}${path}`)
    newUrl.search = new URLSearchParams({
      api_key: API_KEY,
      language: DEFAULT_LANGUAGE,
      ...params
    }).toString()
    return newUrl
  }
}
