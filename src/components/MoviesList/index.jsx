//@flow
import React from 'react'
import { InfiniteScroll, Box } from 'grommet'
import MovieModel from 'models/MovieModel'
import MovieListItem from 'components/MoviesListItem'

type Props = {
  movies: Array<MovieModel>,
  onLoadNextPage: () => void
}

class MoviesList extends React.PureComponent<Props> {
  renderMoviesListItem = (movie: MovieModel) => {
    return <MovieListItem key={movie.id} movie={movie} />
  }

  render() {
    const { movies, onLoadNextPage } = this.props
    return (
      <Box>
        <InfiniteScroll items={movies} onMore={onLoadNextPage}>
          {(item: MovieModel) => this.renderMoviesListItem(item)}
        </InfiniteScroll>
      </Box>
    )
  }
}

export default MoviesList
