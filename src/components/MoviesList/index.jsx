//@flow
import React from 'react'
import { InfiniteScroll } from 'grommet'
import MovieModel from 'models/MovieModel'
import MoviesStore from 'stores/moviesStore'
import MovieListItem from 'components/MoviesListItem'

type Props = {
  movies: Array<MovieModel>,
  moviesStore: MoviesStore
}

class MoviesList extends React.PureComponent<Props> {
  renderMoviesListItem = (movie: MovieModel) => {
    const { moviesStore } = this.props
    const genres = moviesStore.getGenreByMovie(movie)
    return <MovieListItem key={movie.id} movie={movie} genres={genres} />
  }

  render() {
    const { movies } = this.props
    return (
      <InfiniteScroll items={movies} show={0}>
        {(item: MovieModel) => this.renderMoviesListItem(item)}
      </InfiniteScroll>
    )
  }
}

export default MoviesList
