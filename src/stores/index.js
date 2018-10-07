import Api from '../api'
import MovieStore from './movieStore'

export default class RootStore {
  api
  movieStore

  constructor(fetch) {
    this.api = new Api(fetch)
    this.movieStore = new MovieStore(this)
  }
}
