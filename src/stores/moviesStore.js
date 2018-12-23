//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import MovieModel from 'models/MovieModel'
import GenreModel from 'models/GenreModel'

export default class MoviesStore {
  rootStore: RootStore

  @observable
  movies: Array<MovieModel> = []

  @observable
  genres: Array<GenreModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  setGenres(data: { genres: Array<*> }) {
    this.genres = data.genres.map(genre => new GenreModel(genre))
  }

  @action.bound
  setMovies(data: { results: Array<*> }) {
    this.movies = data.results.map(movie => new MovieModel(movie))
  }

  @action
  discoverMovies() {
    const { api } = this.rootStore
    return this.fetchGenres().then(() =>
      api.discoverMovies().then(this.setMovies)
    )
  }

  @action
  fetchGenres() {
    const { api } = this.rootStore
    return api.getGenres().then(genres => this.setGenres(genres))
  }

  getGenreById = (id: number): GenreModel => {
    const filtered = this.genres.filter(genre => genre.id === id)
    return filtered[0]
  }

  getGenreByMovie = (movie: MovieModel): Array<GenreModel> => {
    return movie.genre_ids.map(id => this.getGenreById(id))
  }
}
