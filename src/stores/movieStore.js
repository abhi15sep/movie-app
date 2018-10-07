import { observable, action } from 'mobx'
export default class MovieStore {
  rootStore

  @observable
  movies = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action
  discoverMovies() {
    this.rootStore.api.discoverMovies().then(this.setMovies)
  }

  @action.bound
  setMovies(data) {
    this.movies = data.results
  }
}
