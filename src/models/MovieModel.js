//@flow
import { observable, computed } from 'mobx'
import { IMAGE_URL } from 'config'
import GenreModel from './GenreModel'

export default class MovieModel {
  @observable
  vote_count: ?number = null

  @observable
  id: ?number = null

  @observable
  video: * = null

  @observable
  vote_average: ?number = null

  @observable
  title: ?string = null

  @observable
  popularity: ?number = null

  @observable
  poster_path: ?string = null

  @observable
  original_language: ?string = null

  @observable
  original_title: ?string = null

  @observable
  genre_ids: Array<number> = []

  @observable
  backdrop_path: ?string = null

  @observable
  adult: ?boolean = null

  @observable
  overview: ?string = null

  @observable
  release_date: ?string = null

  @observable
  genres: Array<GenreModel> = []

  constructor(attributes: {}) {
    Object.assign(this, attributes)
  }

  @computed
  get posterUrl() {
    return this.poster_path ? `${IMAGE_URL}w200${this.poster_path}` : null
  }
}
