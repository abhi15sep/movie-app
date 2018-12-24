//@flow
import { observable } from 'mobx'

export default class MovieModel {
  @observable
  id: number

  @observable
  name: ?string = null

  constructor(attributes: {}) {
    Object.assign(this, attributes)
  }
}
