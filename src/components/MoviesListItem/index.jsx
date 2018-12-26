//@flow
import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import MovieModel from 'models/MovieModel'
import MetaInfos from 'components/MetaInfos'
import Genres from 'components/Genres'

const StyledImage = styled.img`
  width: 200px;
  object-fit: contain;
`
const StyledMoviesListItem = styled(Box)`
  background-color: white;
`

type Props = {
  movie: MovieModel
}

class MoviesListItem extends React.PureComponent<Props> {
  render() {
    const { movie } = this.props
    return (
      <Box pad="small">
        <StyledMoviesListItem
          elevation="medium"
          border="all"
          round="medium"
          direction="row"
          overflow="hidden"
        >
          <StyledImage src={movie.posterUrl} />
          <Box pad="medium" gap="small" flex>
            <Box>
              <Text size="large" weight="bold" truncate>
                {movie.title}
              </Text>
              <Box direction="row" gap="xsmall">
                <Text size="medium" truncate>
                  {movie.original_title}
                </Text>
                <Text size="medium">[{movie.original_language}]</Text>
              </Box>
            </Box>
            <Genres genres={movie.genres} />
            <Box flex overflow="scroll">
              <Text size="small">{movie.overview}</Text>
            </Box>
            <MetaInfos
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              popularity={movie.popularity}
              releaseDate={movie.release_date}
            />
          </Box>
        </StyledMoviesListItem>
      </Box>
    )
  }
}

export default MoviesListItem
