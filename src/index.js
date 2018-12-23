import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router'

import App from './containers/App'
import RootStore from './stores'

const browserHistory = createBrowserHistory()

const rootStore = new RootStore(window.fetch)
const routingStore = new RouterStore()

const stores = {
  rootStore,
  ...rootStore,
  routingStore
}

const history = syncHistoryWithStore(browserHistory, routingStore)

render(
  <div>
    <DevTools />
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
