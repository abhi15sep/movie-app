//@flow
import logger from 'log'
import { action, observable } from 'mobx'
import RootStore from '.'

export default class AuthStore {
  rootStore: RootStore

  @observable
  requestToken: ?string = localStorage.getItem('requestToken')

  @observable
  sessionId: ?string = localStorage.getItem('sessionId')

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  setRequestToken(requestToken: string) {
    localStorage.setItem('requestToken', requestToken)
    this.requestToken = requestToken
  }

  @action
  setSessionId(sessionId: ?string) {
    localStorage.setItem('sessionId', sessionId || '')
    this.sessionId = sessionId
  }

  getRequestToken() {
    this.rootStore.api.createRequestToken().then(data => {
      logger.info('getRequestToken', data)
      this.setRequestToken(data.request_token)
      this.rootStore.api.askUserPremission(this.requestToken)
    })
  }

  getSessionId() {
    this.rootStore.api.createSessionId(this.requestToken).then(data => {
      logger.info('getSessionId', data)
      this.setSessionId(data.session_id)
      if (!data.failure) {
        this.setSessionId(data.session_id)
      }
      if (data.status_code === 17) {
        logger.info('requestToken expired', this.requestToken)
        this.getRequestToken()
      }
    })
  }
}
