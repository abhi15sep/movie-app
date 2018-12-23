//@flow
import Api from 'api'
import AuthStore from './authStore'
import MoviesStore from './moviesStore'
export default class RootStore {
  api: Api
  authStore: AuthStore
  moviesStore: MoviesStore

  constructor(fetch: any) {
    this.api = new Api(fetch)
    this.moviesStore = new MoviesStore(this)
    this.authStore = new AuthStore(this)
  }
}
