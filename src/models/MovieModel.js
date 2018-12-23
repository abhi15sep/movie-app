//@flow
import { observable, computed } from 'mobx'
import { IMAGE_URL } from 'config'

/*const test = {
  vote_count: 315,
  id: 335983,
  video: false,
  vote_average: 6.6,
  title: 'Venom',
  popularity: 467.931,
  poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
  original_language: 'en',
  original_title: 'Venom',
  genre_ids: [27, 878, 28, 53],
  backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
  adult: false,
  overview:
    'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego “Venom” to save his life.',
  release_date: '2018-10-03'
}*/

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

  constructor(attributes: *) {
    Object.assign(this, attributes)
  }

  @computed
  get posterUrl() {
    return this.poster_path ? `${IMAGE_URL}w200${this.poster_path}` : null
  }
}
