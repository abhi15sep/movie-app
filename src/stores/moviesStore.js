//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import MovieModel from 'models/MovieModel'

export default class MoviesStore {
  rootStore: RootStore

  @observable
  movies: Array<MovieModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  setMovies(data: { results: Array<*> }) {
    this.movies = data.results.map(this.createMovie)
  }

  @action.bound
  appendMovies(data: { results: Array<*> }) {
    const newMovies = data.results.map(this.createMovie)
    this.movies = [...this.movies, ...newMovies]
  }

  @action
  discoverMovies(page: ?string) {
    const { api, genresStore } = this.rootStore
    return genresStore
      .fetchGenres()
      .then(() =>
        api.discoverMovies(page).then(page ? this.appendMovies : this.setMovies)
      )
  }

  createMovie = (data: {}): MovieModel => {
    const { genresStore } = this.rootStore
    const newMovie = new MovieModel(data)
    newMovie.genres = genresStore.getGenresByArray(newMovie.genre_ids)
    return newMovie
  }
}
