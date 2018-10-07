import React from 'react'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
  render() {
    const { store } = this.props

    return (
      <div>
        <button onClick={() => store.movieStore.discoverMovies()}>
          discover
        </button>
        <div>{JSON.stringify(store.movieStore.movies, null, 2)}</div>
      </div>
    )
  }
}

export default App
