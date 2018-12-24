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
  setMovies(data: { results: Array<*> }): Array<MovieModel> {
    return (this.movies = data.results.map(this.createMovie))
  }

  @action.bound
  appendMovies(data: { results: Array<*> }): Array<MovieModel> {
    const newMovies = data.results.map(this.createMovie)
    return (this.movies = [...this.movies, ...newMovies])
  }

  @action
  discoverMovies(page: ?string): Promise<Array<MovieModel>> {
    if (this.movies.length > 0) return Promise.resolve(this.movies)
    const { api, genresStore } = this.rootStore
    return genresStore
      .fetchMovieGenres()
      .then(() =>
        api.discoverMovies(page).then(page ? this.appendMovies : this.setMovies)
      )
  }

  createMovie = (data: {}): MovieModel => {
    const { genresStore } = this.rootStore
    const newMovie = new MovieModel(data)
    newMovie.genres = genresStore.getMovieGenresByArray(newMovie.genre_ids)
    return newMovie
  }
}
