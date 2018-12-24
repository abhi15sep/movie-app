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
  setSeries(data: { results: Array<*> }): Array<SeriesModel> {
    return (this.series = data.results.map(this.createSeries))
  }

  @action.bound
  appendSeries(data: { results: Array<*> }): Array<SeriesModel> {
    const newSeries = data.results.map(this.createSeries)
    return (this.series = [...this.series, ...newSeries])
  }

  @action
  discoverSeries(page: ?string): Promise<Array<SeriesModel>> {
    if (this.series.length > 0) return Promise.resolve(this.series)
    const { api, genresStore } = this.rootStore
    return genresStore
      .fetchSeriesGenres()
      .then(() =>
        api.discoverSeries(page).then(page ? this.appendSeries : this.setSeries)
      )
  }

  createSeries = (data: {}): SeriesModel => {
    const { genresStore } = this.rootStore
    const newSeries = new SeriesModel(data)
    newSeries.genres = genresStore.getSeriesGenresByArray(newSeries.genre_ids)
    return newSeries
  }
}
