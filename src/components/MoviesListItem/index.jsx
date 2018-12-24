//@flow
import React from 'react'
import { Box, Text } from 'grommet'
import { Group, Star, Calendar } from 'grommet-icons'
import styled, { type ReactComponentStyled } from 'styled-components'
import MovieModel from 'models/MovieModel'
import Badge from 'components/Badge'

const StyledImage: ReactComponentStyled<> = styled.img`
  width: 200px;
  object-fit: contain;
`

type Props = {
  movie: MovieModel
}

class MoviesListItem extends React.PureComponent<Props> {
  render() {
    const { movie } = this.props
    return (
      <Box pad="small">
        <Box
          elevation="medium"
          border="all"
          round="medium"
          direction="row"
          overflow="hidden"
        >
          <StyledImage src={movie.posterUrl} />
          <Box pad="medium" gap="small">
            <Text size="large" weight="bold">
              {movie.title}
            </Text>
            <Box direction="row" gap="xsmall" wrap>
              {movie.genres.map(genre => (
                <Badge
                  key={genre.id}
                  label={genre.name}
                  background="neutral-1"
                />
              ))}
            </Box>
            <Box flex="grow">
              <Text size="small">{movie.overview}</Text>
            </Box>
            <Box direction="row" gap="xsmall" alignSelf="end">
              <Badge
                icon={<Star size="small" />}
                label={`${movie.vote_count ||
                  'no vote_count'} / ${movie.vote_average ||
                  'no vote_average'}`}
                background="neutral-3"
              />
              <Badge
                icon={<Group size="small" />}
                label={movie.popularity}
                background="neutral-3"
              />
              <Badge
                icon={<Calendar size="small" />}
                label={movie.release_date}
                background="neutral-3"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default MoviesListItem
