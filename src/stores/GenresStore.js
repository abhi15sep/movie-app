//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import GenreModel from 'models/GenreModel'

export default class GenresStore {
  rootStore: RootStore

  @observable
  movieGenres: Array<GenreModel> = []

  @observable
  seriesGenres: Array<GenreModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  setMovieGenres(data: { genres: Array<{}> }) {
    this.movieGenres = data.genres.map(genre => new GenreModel(genre))
  }

  @action
  fetchMovieGenres() {
    const { api } = this.rootStore
    return api.getMovieGenres().then(genres => this.setMovieGenres(genres))
  }

  getMovieGenreById = (id: number): GenreModel => {
    const filtered = this.movieGenres.filter(genre => genre.id === id)
    return filtered[0]
  }

  getMovieGenresByArray = (genreIds: Array<number>): Array<GenreModel> => {
    return genreIds.map(id => this.getMovieGenreById(id)).filter(genre => genre)
  }

  @action.bound
  setSeriesGenres(data: { genres: Array<{}> }) {
    this.seriesGenres = data.genres.map(genre => new GenreModel(genre))
  }

  @action
  fetchSeriesGenres() {
    const { api } = this.rootStore
    return api.getSeriesGenres().then(genres => this.setSeriesGenres(genres))
  }

  getSeriesGenreById = (id: number): GenreModel => {
    const filtered = this.seriesGenres.filter(genre => genre.id === id)
    return filtered[0]
  }

  getSeriesGenresByArray = (genreIds: Array<number>): Array<GenreModel> => {
    return genreIds
      .map(id => this.getSeriesGenreById(id))
      .filter(genre => genre)
  }
}
