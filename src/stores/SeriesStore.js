//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import SeriesModel from 'models/SeriesModel'

export default class SeriesStore {
  rootStore: RootStore

  @observable
  series: Array<SeriesModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action.bound
  setSeries(data: { results: Array<*> }) {
    this.series = data.results.map(this.createSeries)
  }

  @action.bound
  appendSeries(data: { results: Array<*> }) {
    const newSeries = data.results.map(this.createSeries)
    this.series = [...this.series, ...newSeries]
  }

  @action
  discoverSeries(page: ?string) {
    const { api, genresStore } = this.rootStore
    return genresStore
      .fetchGenres()
      .then(() =>
        api.discoverMovies(page).then(page ? this.appendSeries : this.setSeries)
      )
  }

  createSeries = (data: {}): SeriesModel => {
    const { genresStore } = this.rootStore
    const newSeries = new SeriesModel(data)
    newSeries.genres = genresStore.getGenresByArray(newSeries.genre_ids)
    return newSeries
  }
}
