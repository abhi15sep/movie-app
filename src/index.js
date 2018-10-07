import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'

import App from './components/App'

import RootStore from './stores'

const store = new RootStore(window.fetch)

render(
  <div>
    <DevTools />
    <App store={store} />
  </div>,
  document.getElementById('root')
)

// playing around in the console
window.store = store
