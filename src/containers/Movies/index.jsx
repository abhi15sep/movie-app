//@flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import MoviesStore from 'stores/MoviesStore'
import MoviesList from 'components/MoviesList'

type Props = {
  moviesStore: MoviesStore
}

@inject('moviesStore')
@observer
class Movies extends React.Component<Props> {
  componentDidMount() {
    const { moviesStore } = this.props
    moviesStore.discoverMovies()
  }

  render() {
    const { moviesStore } = this.props
    return <MoviesList movies={moviesStore.movies} moviesStore={moviesStore} />
  }
}

export default Movies
