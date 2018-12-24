//@flow
import Api from 'api'
import AuthStore from './AuthStore'
import GenresStore from './GenresStore'
import MoviesStore from './MoviesStore'
import SeriesStore from './SeriesStore'

export default class RootStore {
  api: Api
  authStore: AuthStore
  genresStore: GenresStore
  moviesStore: MoviesStore
  seriesStore: SeriesStore

  constructor(fetch: any) {
    this.api = new Api(fetch)
    this.authStore = new AuthStore(this)
    this.moviesStore = new MoviesStore(this)
    this.seriesStore = new SeriesStore(this)
    this.genresStore = new GenresStore(this)
  }
}
