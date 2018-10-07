import { observable } from 'mobx'

export default class MovieModel {
  @observable
  id
  @observable
  title
  @observable
  finished = false

  constructor(title) {
    this.title = title
  }
}
