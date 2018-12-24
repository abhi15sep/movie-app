//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import GenreModel from 'models/GenreModel'

export default class GenresStore {
  rootStore: RootStore

  @observable
  genres: Array<GenreModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  setGenres(data: { genres: Array<*> }) {
    this.genres = data.genres.map(genre => new GenreModel(genre))
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

  getGenresByArray = (genreIds: Array<number>): Array<GenreModel> => {
    return genreIds.map(id => this.getGenreById(id))
  }
}
