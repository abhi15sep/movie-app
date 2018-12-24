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
  page: number = 1

  componentDidMount() {
    const { moviesStore } = this.props
    moviesStore.discoverMovies()
  }

  handleLoadNextPage = () => {
    const { moviesStore } = this.props
    this.page = this.page + 1
    moviesStore.discoverMovies(this.page.toString())
  }

  render() {
    const { moviesStore } = this.props
    return (
      <MoviesList
        movies={moviesStore.movies}
        onLoadNextPage={this.handleLoadNextPage}
      />
    )
  }
}

export default Movies
